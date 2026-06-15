import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const assetsDir = path.join(process.cwd(), "public/assets");
const targets = [
  { name: "bg", maxWidth: 1920 },
  { name: "buildings", maxWidth: 1920 },
  { name: "logo", maxWidth: 340 },
];

for (const { name, maxWidth } of targets) {
  const input = path.join(assetsDir, `${name}.png`);
  const output = path.join(assetsDir, `${name}.webp`);

  let pipeline = sharp(input);
  const meta = await pipeline.metadata();

  if (maxWidth && meta.width > maxWidth) {
    pipeline = sharp(input).resize(maxWidth);
  }

  await pipeline.webp({ quality: 82, effort: 6, alphaQuality: 90 }).toFile(output);

  const [inSize, outSize, outMeta] = await Promise.all([
    stat(input).then((s) => s.size),
    stat(output).then((s) => s.size),
    sharp(output).metadata(),
  ]);

  console.log(
    `${name}: ${meta.width}x${meta.height} ${Math.round(inSize / 1024)}KB -> ${outMeta.width}x${outMeta.height} ${Math.round(outSize / 1024)}KB webp`,
  );
}

const files = await readdir(assetsDir);
for (const file of files.filter((f) => f.endsWith(".webp"))) {
  const size = (await stat(path.join(assetsDir, file))).size;
  console.log(`  ${file}: ${Math.round(size / 1024)}KB`);
}
