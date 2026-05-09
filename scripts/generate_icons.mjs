import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const repoRoot = path.resolve(import.meta.dirname, "..");
const publicDir = path.join(repoRoot, "public");
const src = path.join(publicDir, "homeicon.png");

async function main() {
  if (!fs.existsSync(src)) {
    throw new Error(`Source icon not found: ${src}`);
  }

  const base = sharp(src).ensureAlpha();

  const sizes = {
    "favicon-16x16.png": 16,
    "favicon-32x32.png": 32,
    "favicon-48x48.png": 48,
    "apple-touch-icon.png": 180,
    "android-chrome-192x192.png": 192,
    "android-chrome-512x512.png": 512,
  };

  await Promise.all(
    Object.entries(sizes).map(async ([name, size]) => {
      const outPath = path.join(publicDir, name);
      await base
        .clone()
        .resize(size, size, { fit: "cover" })
        .png({ compressionLevel: 9, adaptiveFiltering: true })
        .toFile(outPath);
    }),
  );

  // OG image (1200x630): centered logo on black background
  const ogPath = path.join(publicDir, "og-image.png");
  const logoSize = Math.floor(630 * 0.72);
  const logo = await base
    .clone()
    .resize(logoSize, logoSize, { fit: "contain" })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 1 },
    },
  })
    .composite([
      {
        input: logo,
        left: Math.floor((1200 - logoSize) / 2),
        top: Math.floor((630 - logoSize) / 2),
      },
    ])
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(ogPath);

  // Copy to common fallback filenames some browsers request
  fs.copyFileSync(path.join(publicDir, "favicon-32x32.png"), path.join(publicDir, "favicon.png"));

  process.stdout.write(`Wrote icons into ${publicDir}\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

