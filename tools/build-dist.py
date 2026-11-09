"""
Build docs/ — the folder GitHub Pages serves.

Everything the site needs, and nothing else. In particular it leaves out:

  img/                                    152 MB of untouched originals
  hero.jpg, one.jpg, couple.webp          the sources resize-photos.py crops from
  relationship_memories_chronological.txt  your notes
  README.md                               has the gate answers and the vault passcode
  assets/tiny/                            built, but nothing on the site references it
  tools/                                  these scripts

It also writes the three things that keep the site out of search engines:
a noindex meta in every page, a robots.txt, and a _headers file that makes
Cloudflare send X-Robots-Tag on every response.

    python tools/build-dist.py

Commit docs/ and push; GitHub Pages serves it (see README.md).
"""

import os
import re
import shutil

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# docs/ is what GitHub Pages serves, so unlike the rest of the build output
# it IS committed. Pages can publish from the repo root or from docs/, and
# docs/ is the one that keeps README.md, tools/ and data.js out of the
# served site.
DIST = os.path.join(ROOT, "docs")

# Only these asset folders are referenced by the pages. assets/tiny is
# deliberately absent — resize-photos.py still makes it, nothing uses it.
ASSET_DIRS = ["css", "js", "photos", "thumbs"]

ROBOTS_META = '<meta name="robots" content="noindex, nofollow, noarchive, noimageindex">'
VIEWPORT_RE = re.compile(r'(<meta name="viewport"[^>]*>)')

HEADERS = """/*
  X-Robots-Tag: noindex, nofollow, noarchive, noimageindex
  Referrer-Policy: no-referrer
  X-Content-Type-Options: nosniff
"""

ROBOTS_TXT = "User-agent: *\nDisallow: /\n"


def build():
    # Empty it rather than removing it. On Windows, rmdir fails with
    # WinError 32 whenever any process (an editor, a terminal, this app)
    # happens to be sitting in dist/.
    if os.path.isdir(DIST):
        for name in os.listdir(DIST):
            p = os.path.join(DIST, name)
            shutil.rmtree(p) if os.path.isdir(p) else os.remove(p)
    os.makedirs(os.path.join(DIST, "assets"), exist_ok=True)

    pages = 0
    for name in sorted(os.listdir(ROOT)):
        if not name.endswith(".html"):
            continue
        with open(os.path.join(ROOT, name), encoding="utf-8") as f:
            html = f.read()

        # Slip the noindex in right after the viewport meta. If a page ever
        # loses that line, say so rather than shipping an indexable page.
        if VIEWPORT_RE.search(html):
            html = VIEWPORT_RE.sub(r"\1\n" + ROBOTS_META, html, count=1)
        else:
            raise SystemExit("no viewport meta in %s — cannot place noindex" % name)

        with open(os.path.join(DIST, name), "w", encoding="utf-8") as f:
            f.write(html)
        pages += 1

    for d in ASSET_DIRS:
        src = os.path.join(ROOT, "assets", d)
        if not os.path.isdir(src):
            raise SystemExit("missing assets/%s" % d)
        shutil.copytree(src, os.path.join(DIST, "assets", d))

    with open(os.path.join(DIST, "_headers"), "w", encoding="utf-8", newline="\n") as f:
        f.write(HEADERS)
    with open(os.path.join(DIST, "robots.txt"), "w", encoding="utf-8", newline="\n") as f:
        f.write(ROBOTS_TXT)

    files = sum(len(fs) for _, _, fs in os.walk(DIST))
    size = sum(
        os.path.getsize(os.path.join(dp, f))
        for dp, _, fs in os.walk(DIST)
        for f in fs
    )
    print("docs/  %d pages, %d files, %.1f MB" % (pages, files, size / 1048576.0))

    # A loud check: none of the private files should have made it in.
    banned = ["README.md", "relationship_memories_chronological.txt",
              "hero.jpg", "one.jpg", "couple.webp"]
    here = os.listdir(DIST)
    leaked = [b for b in banned if b in here]
    if leaked:
        raise SystemExit("private file(s) in docs: %s" % ", ".join(leaked))
    print("private files kept out: ok")


if __name__ == "__main__":
    build()
