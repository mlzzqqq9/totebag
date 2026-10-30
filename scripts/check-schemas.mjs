import fs from 'node:fs';
import path from 'node:path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const distDir = path.resolve('./dist');
const htmlFiles = walk(distDir);

console.log(`Found ${htmlFiles.length} HTML files in dist/`);

const report = [];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(distDir, file).replace(/\\/g, '/');
  
  // Find all jsonld scripts
  const matches = content.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
  for (const m of matches) {
    try {
      const data = JSON.parse(m[1]);
      
      const inspectItem = (item) => {
        if (!item) return;
        const type = item['@type'];
        
        // Check Organization / LocalBusiness
        if (type === 'Organization' || type === 'LocalBusiness' || (Array.isArray(type) && (type.includes('Organization') || type.includes('LocalBusiness')))) {
          if (!item.image) {
            report.push({ file: relPath, type, issue: 'Missing image' });
          }
          if (!item.logo) {
            report.push({ file: relPath, type, issue: 'Missing logo' });
          }
          if (!item.address) {
            report.push({ file: relPath, type, issue: 'Missing address' });
          }
        }
        
        // Check Article / BlogPosting / NewsArticle
        if (type === 'Article' || type === 'BlogPosting' || type === 'NewsArticle') {
          if (!item.image) {
            report.push({ file: relPath, type, issue: 'Missing image' });
          }
        }
        
        // Check Product
        if (type === 'Product') {
          if (!item.image) {
            report.push({ file: relPath, type, issue: 'Missing image' });
          }
        }
      };

      if (Array.isArray(data['@graph'])) {
        data['@graph'].forEach(inspectItem);
      } else if (Array.isArray(data)) {
        data.forEach(inspectItem);
      } else {
        inspectItem(data);
      }

    } catch (e) {
      report.push({ file: relPath, type: 'JSON-PARSE-ERROR', issue: e.message });
    }
  }
});

console.log(`Total issues found: ${report.length}`);
if (report.length > 0) {
  console.log(JSON.stringify(report.slice(0, 30), null, 2));
}
