from __future__ import annotations

from pathlib import Path

from PIL import Image


def main() -> None:
    repo_root = Path(__file__).resolve().parents[1]
    public_dir = repo_root / "public"
    src = public_dir / "homeicon.png"

    img = Image.open(src).convert("RGBA")

    sizes: dict[str, tuple[int, int]] = {
        "favicon-16x16.png": (16, 16),
        "favicon-32x32.png": (32, 32),
        "favicon-48x48.png": (48, 48),
        "android-chrome-192x192.png": (192, 192),
        "android-chrome-512x512.png": (512, 512),
        "apple-touch-icon.png": (180, 180),
    }

    for name, size in sizes.items():
        resized = img.resize(size, Image.Resampling.LANCZOS)
        resized.save(public_dir / name, format="PNG", optimize=True)

    # Multi-size favicon.ico
    img.save(public_dir / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])

    # OG image: centered logo on black background (1200x630)
    og_size = (1200, 630)
    og = Image.new("RGBA", og_size, (0, 0, 0, 255))
    max_w, max_h = og_size
    target_h = int(max_h * 0.72)
    target_w = target_h
    logo = img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    ox = (max_w - target_w) // 2
    oy = (max_h - target_h) // 2
    og.alpha_composite(logo, (ox, oy))
    og.convert("RGB").save(public_dir / "og-image.png", format="PNG", optimize=True)

    print(f"Wrote icons into {public_dir}")


if __name__ == "__main__":
    main()

