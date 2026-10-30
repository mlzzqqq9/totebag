import fs from 'node:fs';
import path from 'node:path';

const naskahDir = path.resolve('./naskah');
const files = fs.readdirSync(naskahDir).filter(f => f.endsWith('.md'));

console.log(`Processing ${files.length} markdown files...`);

let updatedCount = 0;

for (const file of files) {
  const filePath = path.join(naskahDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  const jsonMatch = content.match(/```json\s*([\s\S]*?)\s*```/);
  if (!jsonMatch) continue;

  try {
    const rawJsonStr = jsonMatch[1];
    const schema = JSON.parse(rawJsonStr);
    let modified = false;

    const enrich = (item) => {
      if (!item || typeof item !== 'object') return;
      const type = item['@type'];
      
      if (type === 'Organization' || type === 'LocalBusiness') {
        if (!item.image) {
          item.image = 'https://totebag.web.id/media/lifestyle-tote-bag-green-energy.webp';
          modified = true;
        }
        if (!item.logo) {
          item.logo = 'https://totebag.web.id/favicon.svg';
          modified = true;
        }
      }

      if (type === 'BlogPosting' || type === 'Article' || type === 'NewsArticle') {
        if (!item.image) {
          item.image = 'https://totebag.web.id/media/lifestyle-tote-bag-green-energy.webp';
          modified = true;
        }
      }
    };

    if (Array.isArray(schema['@graph'])) {
      schema['@graph'].forEach(enrich);
    } else {
      enrich(schema);
    }

    if (modified) {
      const newJsonStr = JSON.stringify(schema, null, 2);
      const newContent = content.replace(jsonMatch[0], `\`\`\`json\n${newJsonStr}\n\`\`\``);
      fs.writeFileSync(filePath, newContent, 'utf8');
      updatedCount++;
    }
  } catch (e) {
    console.error(`Error in ${file}:`, e.message);
  }
}

console.log(`Successfully updated ${updatedCount} markdown files!`);
