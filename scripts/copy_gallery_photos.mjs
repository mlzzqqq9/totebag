import fs from 'node:fs';
import path from 'node:path';

const brainDir = 'C:\\Users\\User\\.gemini\\antigravity-ide\\brain\\6d8d4d58-9d0b-492e-8cbd-41aba56055a0';
const destDir = path.join(process.cwd(), 'public', 'media');

const map = [
  { prefix: 'gallery_canvas_studio_', dest: 'foto-canvas.jpg' },
  { prefix: 'gallery_giftset_studio_', dest: 'foto-giftset.jpg' },
  { prefix: 'gallery_blacu_studio_', dest: 'foto-blacu.jpg' },
  { prefix: 'gallery_mika_studio_', dest: 'foto-mika.jpg' },
  { prefix: 'gallery_denim_studio_', dest: 'foto-denim.jpg' },
  { prefix: 'gallery_spunbond_studio_', dest: 'foto-spunbond.jpg' },
  { prefix: 'gallery_cordura_studio_', dest: 'foto-cordura.jpg' },
  { prefix: 'gallery_satin_studio_', dest: 'foto-satin.jpg' }
];

const files = fs.readdirSync(brainDir);

for (const item of map) {
  const match = files.filter(f => f.startsWith(item.prefix) && f.endsWith('.jpg')).pop();
  if (match) {
    const src = path.join(brainDir, match);
    const dest = path.join(destDir, item.dest);
    fs.copyFileSync(src, dest);
    console.log(`Copied ${match} -> ${item.dest}`);
  } else {
    console.log(`No match for ${item.prefix}`);
  }
}
