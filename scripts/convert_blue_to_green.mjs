import sharp from 'sharp';
import fs from 'node:fs';

async function processImage(i) {
  const inputPath = `public/media/klien-${i}.png`;
  const image = sharp(inputPath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Let's inspect pixels and detect the blue lines and header
  // In the image, the blue is prominent in the header line and title:
  // Typically R < 60, G < 140, B > 150 (blue dominant: B - R > 50 and B - G > 30)
  // Let's replace blue with our brand green: Forest Green (#173F38 -> R:23, G:63, B:56) or vibrant emerald (#1E564B -> R:30, G:86, B:75) or (#198754)
  
  for (let idx = 0; idx < data.length; idx += channels) {
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const a = channels === 4 ? data[idx + 3] : 255;

    if (a > 30) {
      // Check if pixel is predominantly blue (like the header text and border lines)
      // e.g. blue header line is typically around (0, 80-120, 180-255)
      if (b > 110 && b > r + 40 && b > g + 15) {
        // Shift hue to brand forest/emerald green:
        // Calculate lightness of the blue pixel to preserve anti-aliasing and gradients
        const lum = 0.299 * r + 0.587 * g + 0.114 * b;
        const factor = lum / 150;
        // Brand green is rgb(23, 63, 56) base, or rgb(30, 95, 75)
        const targetR = Math.min(255, Math.round(23 * factor));
        const targetG = Math.min(255, Math.round(110 * factor));
        const targetB = Math.min(255, Math.round(85 * factor));

        data[idx] = targetR;
        data[idx + 1] = targetG;
        data[idx + 2] = targetB;
      }
    }
  }

  await sharp(data, {
    raw: {
      width,
      height,
      channels
    }
  })
  .png()
  .toFile(`public/media/klien-${i}-hijau.png`);

  // Replace original with the green version
  fs.copyFileSync(`public/media/klien-${i}-hijau.png`, `public/media/klien-${i}.png`);
  fs.unlinkSync(`public/media/klien-${i}-hijau.png`);
  console.log(`Updated klien-${i}.png to brand green!`);
}

async function main() {
  for (let i = 1; i <= 7; i++) {
    await processImage(i);
  }
  console.log('All 7 images transformed to green successfully!');
}

main();
