# Rebuilds assets/photos, assets/thumbs, assets/tiny from the originals in img/.
# Filenames carry the date: DD_MM_YYYY (with optional " (n)" for several from one day).
# Ids are assigned in DATE ORDER, so p01 is the oldest photo and p63 the newest.
import os, re, json, datetime, sys
from PIL import Image, ImageOps

ROOT  = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC   = os.path.join(ROOT, "img")
OUTS  = {"photos": 1700, "thumbs": 700, "tiny": 220}
QUAL  = {"photos": 84, "thumbs": 80, "tiny": 70}
for d in OUTS:
    os.makedirs(os.path.join(ROOT, "assets", d), exist_ok=True)

def file_date(name):
    """DD_MM_YYYY somewhere in the filename -> date. Falls back to None."""
    m = re.search(r"(\d{1,2})[_-](\d{1,2})[_-](20\d\d)", name)
    if m:
        d, mo, y = map(int, m.groups())
        try:
            return datetime.date(y, mo, d)
        except ValueError:
            pass
    return None

def seq(name):
    """' (3)' -> 3, so same-day photos keep the order they were named in."""
    m = re.search(r"\((\d+)\)", name)
    return int(m.group(1)) if m else 0

files = sorted(f for f in os.listdir(SRC) if f.lower().endswith((".jpg", ".jpeg", ".png")))
rows  = []
for f in files:
    d = file_date(f)
    if d is None:
        print("!! no date in filename, skipped:", f, file=sys.stderr)
        continue
    rows.append((d, seq(f), f))
rows.sort(key=lambda r: (r[0], r[1], r[2]))

manifest = []
for i, (d, s, f) in enumerate(rows):
    slug = "p%02d" % (i + 1)
    with Image.open(os.path.join(SRC, f)) as im:
        im = ImageOps.exif_transpose(im).convert("RGB")
        w, h = im.size
        for sub, box in OUTS.items():
            c = im.copy(); c.thumbnail((box, box), Image.LANCZOS)
            c.save(os.path.join(ROOT, "assets", sub, slug + ".jpg"),
                   "JPEG", quality=QUAL[sub], optimize=True, progressive=(sub != "tiny"))
    manifest.append({"id": slug, "src": f, "date": d.isoformat(),
                     "w": w, "h": h, "ratio": round(w / h, 3),
                     "orient": "landscape" if w > h else ("portrait" if h > w else "square")})

# one.jpg lives at the project root and is used for the scratch card, not the albums.
one = os.path.join(ROOT, "one.jpg")
if os.path.exists(one):
    with Image.open(one) as im:
        im = ImageOps.exif_transpose(im).convert("RGB")
        c = im.copy(); c.thumbnail((1100, 1100), Image.LANCZOS)
        c.save(os.path.join(ROOT, "assets", "photos", "one.jpg"),
               "JPEG", quality=86, optimize=True, progressive=True)
        print("one.jpg ->", im.size, file=sys.stderr)

# hero.jpg is the home-page photo. It is cropped to the shape of the card on
# the home page (72% x 78% of a square) with the two faces in the middle of
# the frame, rather than being squashed into it by object-fit.
hero = os.path.join(ROOT, "hero.jpg")
if os.path.exists(hero):
    FACE_X, FACE_Y = 0.47, 0.29   # where the two faces sit in hero.jpg
    with Image.open(hero) as im:
        im = ImageOps.exif_transpose(im).convert("RGB")
        W, H = im.size
        ar = 0.72 / 0.78
        ch = min(H, int(W / ar))
        cw = ch * ar
        top = max(0, min(H - ch, FACE_Y * H - ch * 0.45))
        left = max(0, min(W - cw, FACE_X * W - cw / 2))
        c = im.crop((int(left), int(top), int(left + cw), int(top + ch)))
        c = c.resize((900, int(900 / ar)), Image.LANCZOS)
        c.save(os.path.join(ROOT, "assets", "photos", "hero.jpg"),
               "JPEG", quality=88, optimize=True, progressive=True)
        print("hero.jpg ->", c.size, file=sys.stderr)

print(json.dumps(manifest, indent=0, separators=(",", ":")))
tot = sum(os.path.getsize(os.path.join(ROOT, "assets", s, m["id"] + ".jpg"))
          for s in OUTS for m in manifest)
print("COUNT:", len(manifest), " TOTAL assets MB:", round(tot / 1e6, 2), file=sys.stderr)
