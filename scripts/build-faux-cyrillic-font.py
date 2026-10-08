#!/usr/bin/env python3
"""Build "Geodr Faux" — a faux-Cyrillic display font — from Montserrat.

Faux (pseudo) Cyrillic keeps normal Latin text but draws some letters as the
Cyrillic letters they resemble: R as Я, N as И, W as Ш and so on. The text in the
page stays ordinary Latin, so search engines, screen readers and copy/paste are
unaffected. Only the glyph shapes change.

Montserrat is licensed under the SIL Open Font License 1.1, which allows
modification and embedding. The licence text ships next to the fonts in
app/fonts/OFL.txt. The output is renamed so it is not mistaken for Montserrat.

Usage (from the repo root):

    npm pack @fontsource/montserrat && tar xzf fontsource-montserrat-*.tgz
    pip install fonttools brotli
    python3 scripts/build-faux-cyrillic-font.py package/files app/fonts

Edit SWAPS below to change which letters are substituted.
"""

import sys
from pathlib import Path

from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.ttLib import TTFont

# Latin character -> Cyrillic character whose outline is used instead.
SWAPS = {
    "R": "Я", "N": "И", "W": "Ш", "U": "Ц", "Y": "Ч", "D": "Д",
    "r": "я", "n": "и", "w": "ш", "u": "ц", "y": "ч",
}

FAMILY = "Geodr Faux"
WEIGHTS = {700: "Bold", 800: "ExtraBold"}


def build(src_dir: Path, out_dir: Path, weight: int, style_name: str) -> Path:
    latin = TTFont(src_dir / f"montserrat-latin-{weight}-normal.woff")
    cyrillic = TTFont(src_dir / f"montserrat-cyrillic-{weight}-normal.woff")

    latin_cmap = latin.getBestCmap()
    cyr_cmap = cyrillic.getBestCmap()
    cyr_glyphs = cyrillic.getGlyphSet()
    glyf, hmtx = latin["glyf"], latin["hmtx"]

    for lat_char, cyr_char in SWAPS.items():
        lat_name = latin_cmap[ord(lat_char)]
        cyr_name = cyr_cmap[ord(cyr_char)]
        pen = TTGlyphPen(None)  # draws composites as plain outlines
        cyr_glyphs[cyr_name].draw(pen)
        new_glyph = pen.glyph()
        glyf[lat_name] = new_glyph
        new_glyph.recalcBounds(glyf)
        advance = cyrillic["hmtx"][cyr_name][0]
        hmtx[lat_name] = (advance, getattr(new_glyph, "xMin", 0))

    # The STAT table points at Montserrat's names; the static font doesn't need it.
    if "STAT" in latin:
        del latin["STAT"]

    full_name = f"{FAMILY} {style_name}"
    ps_name = f"{FAMILY.replace(' ', '')}-{style_name}"
    for record in latin["name"].names:
        if record.nameID in (1, 16):
            record.string = FAMILY
        elif record.nameID in (2, 17):
            record.string = style_name
        elif record.nameID == 3:
            record.string = f"{ps_name};derived from Montserrat (OFL 1.1)"
        elif record.nameID == 4:
            record.string = full_name
        elif record.nameID == 6:
            record.string = ps_name
    latin["OS/2"].usWeightClass = weight

    latin.flavor = "woff2"
    out_path = out_dir / f"GeodrFaux-{style_name}.woff2"
    latin.save(out_path)
    return out_path


def main() -> None:
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    src_dir, out_dir = Path(sys.argv[1]), Path(sys.argv[2])
    out_dir.mkdir(parents=True, exist_ok=True)
    for weight, style_name in WEIGHTS.items():
        path = build(src_dir, out_dir, weight, style_name)
        print(f"wrote {path} ({path.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
