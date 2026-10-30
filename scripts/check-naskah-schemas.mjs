import fs from 'node:fs';
import path from 'node:path';

const naskahDir = path.resolve('./naskah');
const files = fs.readdirSync(naskahDir).filter(f => f.endsWith('.md'));

console.log(`Total markdown files: ${files.length}`);

const missingImageCount = {
  Organization: 0,
  BlogPosting: 0,
  Article: 0,
  WebPage: 0,
  Product: 0
};

const issues = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join(naskahDir, file), 'utf8');
  const jsonMatch = content.match(/```json\s*([\s\S]*?)\s*```/);
  if (!jsonMatch) return;
  
  let schema;
  try {
    schema = JSON.parse(jsonMatch[1]);
  } catch (e) {
    return;
  }

  const inspect = (node) => {
    if (!node) return;
    const t = node['@type'];
    if (t === 'BlogPosting' || t === 'Article' || t === 'NewsArticle') {
      if (!node.image) {
        missingImageCount[t] = (missingImageCount[t] || 0) + 1;
        issues.push({ file, type: t, issue: 'missing image' });
      }
    }
    if (t === 'Organization' || t === 'LocalBusiness') {
      if (!node.image) {
        missingImageCount.Organization = (missingImageCount.Organization || 0) + 1;
        issues.push({ file, type: t, issue: 'missing image' });
      }
    }
  };

  if (Array.isArray(schema['@graph'])) {
    schema['@graph'].forEach(inspect);
  } else {
    inspect(schema);
  }
});

console.log('Issues in raw markdown schemas:', JSON.stringify(missingImageCount, null, 2));
console.log(`Total issues in raw markdown files: ${issues.length}`);
if (issues.length > 0) {
  console.log('First 5 issues:', issues.slice(0, 5));
}
