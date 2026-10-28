import fs from 'node:fs';
import path from 'node:path';

const brainDir = 'C:\\Users\\User\\.gemini\\antigravity-ide\\brain\\6d8d4d58-9d0b-492e-8cbd-41aba56055a0';
const destDir = path.join(process.cwd(), 'public', 'media');

const map = [
  { prefix: 'gallery_canvas_close_studio_', dest: 'foto-macro.jpg' },
  { prefix: 'gallery_seminar_kit_studio_', dest: 'foto-seminar.jpg' },
  { prefix: 'gallery_dinir_navy_studio_', dest: 'foto-dinir.jpg' },
  { prefix: 'gallery_unboxing_vip_studio_', dest: 'foto-unboxing.jpg' }
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
