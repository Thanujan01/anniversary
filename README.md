# 💞 Thanu & Thamil — Four Years

A six-page animated anniversary site, built from your own photos and your own
list of dates.

> **This repository is public**, because GitHub Pages on a free account only
> serves public repositories. Everything here — including all 63 photographs —
> can be read by anyone who finds it. The gate on `login.html` does not change
> that: its answers are in the page source. Keep that in mind before adding
> anything here you would not want read.

## How to open it

Double-click **`login.html`**. It works straight from the file — no server, no internet
needed (the fonts come from Google Fonts if you are online; it still looks right offline).

Opening any other page sends her to the login first, so `index.html` works as an entry
point too.

To show it on her phone:

```bash
python -m http.server 8777
```

…then open `http://<your-computer-ip>:8777` on the phone while on the same wifi.

## Putting it online

The published copy lives in **`docs/`**, and GitHub Pages serves that folder. Only
the seven pages and the four asset folders they reference go in it — `README.md`,
`PRIVATE-NOTES.md`, `tools/`, `img/` and the originals never do.

Rebuild it after any change and push:

```bash
python tools/build-dist.py
git add docs && git commit -m "Rebuild the published site" && git push
```

GitHub Pages is switched on under **Settings → Pages**, with the source set to
branch `main`, folder `/docs`. The first build takes a couple of minutes.

Every page in `docs/` carries a `noindex` meta and there is a `robots.txt`, so
search engines are asked to stay away. That is a request, not a wall — the link
works for anyone who has it.

The `_headers` file in `docs/` is for Cloudflare and is ignored by GitHub Pages.

Pushes from a slow connection may fail on a single large upload; see
`tools/push-in-batches.sh`.

## Where the content comes from

| Source | What it became |
|---|---|
| `relationship_memories_chronological.txt` | The timeline, the six "first times" with the exact minute, the memory jar, the quiz |
| `img/` (63 photos, dated in the filenames) | Every photograph on the site, sorted oldest → newest |
| `one.jpg` | Hidden under the gold on the **Surprises** page |
| `hero.jpg` | The photo on the home page, cropped by the script so both faces land in the middle of the card |
| `couple.webp` | Your cartoon sticker — background removed, used as the login page's intro image |

The words around those facts are mine. **Read them before she does** — especially the
sixteen reasons on *Letters* and the long letter at the bottom of that page. They should
sound like you, and right now they sound like me. Everything is in `assets/js/data.js`.

Both birthdays are in `CONFIG` — `himBorn` 5 July 2001, `herBorn` 13 July 2005, eight days
apart. Three days on the site come from them: **5 July 2024** is your twenty-third (the water
photos), **13 July 2025** is her twentieth, and **12 July 2026** is the twenty-first you
celebrated a day early. They are collected in the **Birthdays** album.

## The login gate

**`login.html`** guards everything. Three dates, one lock each, asked one at a time:

| Lock | Question | Answer |
|---|---|---|
| 1 💞 | The day we said yes to this | see `PRIVATE-NOTES.md` |
| 2 🤝 | The day we first met | see `PRIVATE-NOTES.md` |
| 3 💑 | Our first meetup as a couple | see `PRIVATE-NOTES.md` |

The three dates are in **`PRIVATE-NOTES.md`**, which stays on your computer and is not
in this repository — this repo is public so that GitHub Pages can serve the site.
All three are confirmed by your own memories file. Wrong answers shake the box and give a
hint — gentler each time, and the third hint on each lock basically gives it away, so she
can never get properly stuck. All three right → the card bursts open, confetti, door opens.

Your cartoon sticker of the two of you sits at the top. The file you sent had the
transparency checkerboard baked into the pixels, so that was cut away, the white
sticker border redrawn cleanly, and the result saved as `assets/photos/couple.png`
(the original is `couple.webp` in the project root). It floats gently, with a rose
glow behind it and hearts drifting up past it.

**It is a romantic lock, not security.** The answers are in the page source, and anyone who
views source can read them. It is there to make the door feel earned, not to keep anyone out.

The unlock lasts for the browser tab — close it and the three dates are asked again. To
change that to "ask once and remember forever", swap `sessionStorage` for `localStorage`
in [assets/js/gate.js](assets/js/gate.js) and in the two places it appears in `login.html`.

To change the questions or answers, edit the `GATE` array near the bottom of `login.html`.

## The six pages

| Page | What is in it |
|---|---|
| **index.html** | Hero, live countdown to 16 Nov 2026, eight running numbers, a random memory, links to everything |
| **timeline.html** | 38 moments in order, from the 10:44 PM message to the fourth anniversary. Your own Tanglish lines appear under each one in handwriting |
| **albums.html** | All 63 photos — five year chapters plus seven small collections (Rings, On the bike, Uniform days, Days out, Our tables, Dressed up, Cake day), favourites, shuffle, slideshow, lightbox |
| **memories.html** | The six first times with the real clock times, a polaroid wall, the memory jar, an 8-question quiz |
| **surprises.html** | 6 gift coupons, the scratch card, a spin-the-wheel, a love meter, a locked vault |
| **letters.html** | 6 sealed "open when…" envelopes, 16 flip-cards of reasons, the long letter |

## Hidden bits

- **Scratch the whole gold panel** on *Surprises* — `one.jpg` is underneath it.
- **The vault passcode** is in `PRIVATE-NOTES.md` (it is your date, DDMMYYYY).
- Flip **all 16** reason cards on *Letters* for a bonus card.
- Open **all 6** gift boxes for a confetti storm.
- Empty the memory jar — all 16 — for a message.
- Tap anywhere on a page: little hearts burst out.
- On the login, typing the first date's eight digits straight into the first box fills all three, and pasting
  a whole date works too.
- The **🔇 button** in the navbar plays a soft melody, generated in the browser — no audio file.

## Changing anything

Almost everything lives in **`assets/js/data.js`**:

- `CONFIG` — names, day one, the anniversary date, the vault passcode, and `herDear` + `herPet` (the two lines of the big heading on the home page — "My dear" / "Pondaddi")
- `PHOTOS` — caption and note for each photo, its year album (`a`) and its collections (`t`)
- `FIRSTS` — the six moments with the exact times; the clock hands are drawn from `time`
- `TIMELINE` — every moment. `tam` is your own wording, `meet` is the meet-up number, `k:"star"` makes it a gold card
- `REASONS`, `LETTERS`, `GIFTS`, `WHEEL`, `JAR`, `QUIZ` — the text of each surprise

Edit, save, refresh. No build step.

## About the photos

Your 63 originals are untouched in `img/` (152 MB). The site uses optimised copies:

- `assets/photos/` — full size for the lightbox (max 1700px)
- `assets/thumbs/` — grid and timeline (max 700px)
- `assets/tiny/` — small previews

That is **22 MB** in total, so it loads fast on a phone.

If you add more photos later, drop them in `img/` named `DD_MM_YYYY.jpg` (add ` (2)`,
` (3)` for several from one day) and re-run:

```bash
python tools/resize-photos.py
```

It rebuilds all three sizes and prints a manifest — id, date, shape — for every photo.
Ids are assigned **in date order**, so adding an older photo renumbers the ones after it.
The printed manifest shows which id now maps to which original file; copy the new ids
into `PHOTOS` in `data.js` and give them captions.
