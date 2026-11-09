#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Push this repo to GitHub over a slow, resetting uplink.
#
# One 21 MB push kept dying — HTTP 408 from GitHub, then "connection was
# reset" twice, at 30-200 KiB/s. A single push is one long HTTP request, and
# this connection will not hold one open that long.
#
# So: rebuild the same files as a chain of ~1 MB commits, then push them one
# at a time. Each push is its own short request, and a failure costs one
# small piece instead of the whole upload.
#
# Safe to re-run. It skips every commit the remote already has, so if it dies
# half way, run it again and it carries on from there.
#
#   bash tools/push-in-batches.sh
# ---------------------------------------------------------------------------
set -u

REMOTE=origin
BRANCH=main
SOURCE=main              # the branch whose content we are shipping
WORK=_batched            # temp branch holding the split history
BATCH_BYTES=1200000      # ~1 MB per commit
MAX_TRIES=6

cd "$(dirname "$0")/.." || exit 1

say() { printf '\n\033[1m%s\033[0m\n' "$*"; }

# --- committer identity (this repo only) ----------------------------------
git config user.name  >/dev/null 2>&1 || git config user.name  "Thanujan01"
git config user.email >/dev/null 2>&1 || git config user.email "aralychurch001@gmail.com"

# --- build the split history, unless a previous run already did -----------
if git rev-parse --verify -q "$WORK" >/dev/null; then
  say "Reusing the split history from an earlier run."
else
  say "Keeping your original history as 'original-history'"
  git branch -f original-history "$SOURCE" || exit 1

  mapfile -t ALL < <(git ls-tree -r --name-only "$SOURCE")
  if [ "${#ALL[@]}" -eq 0 ]; then echo "no files on $SOURCE"; exit 1; fi

  # Split into "everything that is not a photo" and the photos themselves.
  TEXT=(); IMGS=()
  for f in "${ALL[@]}"; do
    case "${f,,}" in
      *.jpg|*.jpeg|*.png|*.webp|*.gif) IMGS+=("$f") ;;
      *)                               TEXT+=("$f") ;;
    esac
  done

  say "Starting a fresh linear history"
  git checkout -q --orphan "$WORK" || exit 1
  git reset -q                         # keep the files, stage nothing

  # Commit 1: the site itself. Small, so the first push is quick.
  git add -- "${TEXT[@]}" || exit 1
  git commit -q -m "The site: pages, styles, scripts and the build tools

Pushed in pieces — see tools/push-in-batches.sh for why." || exit 1
  echo "  commit 1: ${#TEXT[@]} files"

  # Then the photos, ~BATCH_BYTES at a time.
  n=1; acc=0; batch=()
  flush() {
    [ "${#batch[@]}" -eq 0 ] && return 0
    git add -- "${batch[@]}" || exit 1
    git commit -q -m "Photographs, part $n (${#batch[@]} files)" || exit 1
    echo "  commit $((n+1)): ${#batch[@]} photos, $((acc/1024)) KiB"
    n=$((n+1)); acc=0; batch=()
  }
  for f in "${IMGS[@]}"; do
    sz=$(stat -c%s "$f" 2>/dev/null || echo 0)
    if [ "$acc" -gt 0 ] && [ $((acc + sz)) -gt "$BATCH_BYTES" ]; then flush; fi
    batch+=("$f"); acc=$((acc + sz))
  done
  flush
fi

# --- push the chain, oldest first -----------------------------------------
mapfile -t SHAS < <(git rev-list --reverse "$WORK")
total=${#SHAS[@]}
say "Pushing $total commits, oldest first"

remote_head=$(git ls-remote "$REMOTE" "refs/heads/$BRANCH" 2>/dev/null | cut -f1)
i=0
for sha in "${SHAS[@]}"; do
  i=$((i+1))

  # Already up there? Skip it. (Cheap: the remote head is an ancestor check.)
  if [ -n "$remote_head" ] && git merge-base --is-ancestor "$sha" "$remote_head" 2>/dev/null; then
    printf '[%2d/%2d] %s  already on GitHub\n' "$i" "$total" "${sha:0:8}"
    continue
  fi

  subject=$(git log -1 --format=%s "$sha")
  ok=0
  for try in $(seq 1 "$MAX_TRIES"); do
    printf '[%2d/%2d] %s  %-42s try %d ... ' "$i" "$total" "${sha:0:8}" "${subject:0:42}" "$try"
    if git push -q "$REMOTE" "$sha:refs/heads/$BRANCH" 2>/tmp/pusherr; then
      echo "ok"; ok=1; remote_head=$sha; break
    fi
    echo "failed"
    sed 's/^/        /' /tmp/pusherr | tail -3
    sleep $((try * 5))
  done
  if [ "$ok" -ne 1 ]; then
    say "Stopped at commit $i of $total. Re-run this script to carry on."
    exit 1
  fi
done

# --- done: make main point at what we pushed ------------------------------
say "All $total commits are on GitHub"
git checkout -q -B "$BRANCH" "$WORK" || exit 1
git branch -q -D "$WORK" 2>/dev/null
git branch -q --set-upstream-to="$REMOTE/$BRANCH" "$BRANCH" 2>/dev/null
echo "Local '$BRANCH' now matches the remote. Your first two commits are kept on 'original-history'."
