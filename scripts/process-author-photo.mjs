import sharp from 'sharp';
import path from 'node:path';
import fs from 'node:fs';

const inputPath = 'C:/Users/User/.gemini/antigravity-ide/brain/00c837ab-1137-4b96-9009-00449c902769/.user_uploaded/media_1793328277537.jpg';
const outputPath = path.resolve('./public/media/author-maulana.webp');

async function processAuthorPhoto() {
  // Read metadata
  const meta = await sharp(inputPath).metadata();
  console.log('Original dimensions:', meta.width, 'x', meta.height);

  // We want a square crop that focuses on the head and upper torso
  // Image is 768 x 1024. The head is around y=380, x=384.
  // Let's create a 768 x 768 square from y=200 to y=968:
  await sharp(inputPath)
    .extract({ left: 0, top: 180, width: 768, height: 768 })
    .resize(500, 500)
    .webp({ quality: 88 })
    .toFile(outputPath);

  console.log('Successfully saved to:', outputPath);
  const outStat = fs.statSync(outputPath);
  console.log('New file size:', outStat.size, 'bytes');
}

processAuthorPhoto().catch(console.error);
