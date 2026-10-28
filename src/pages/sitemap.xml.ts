import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';
import { getAllNaskah } from '../utils/naskah';
import { products, cityServices, portfolioItems, authors } from '../data/siteData';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://totebag.web.id';
  const today = new Date().toISOString().split('T')[0];

  interface SitemapEntry {
    url: string;
    lastmod: string;
    changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly';
    priority: string;
  }

  const entriesMap = new Map<string, SitemapEntry>();

  // Helper to add entry without duplication
  const addEntry = (url: string, lastmod = today, changefreq: SitemapEntry['changefreq'] = 'weekly', priority = '0.8') => {
    if (!entriesMap.has(url)) {
      entriesMap.set(url, { url, lastmod, changefreq, priority });
    }
  };

  // 1. Core Priority Pages
  addEntry(`${baseUrl}/`, today, 'weekly', '1.0');
  addEntry(`${baseUrl}/produk/`, today, 'weekly', '0.9');
  addEntry(`${baseUrl}/tote-bag/`, today, 'weekly', '0.9');
  addEntry(`${baseUrl}/tote-bag-custom/`, today, 'weekly', '0.9');
  addEntry(`${baseUrl}/harga-tote-bag-custom/`, today, 'weekly', '0.9');
  addEntry(`${baseUrl}/jenis-bahan-tote-bag/`, today, 'weekly', '0.9');
  addEntry(`${baseUrl}/tote-bag-perusahaan/`, today, 'weekly', '0.9');
  addEntry(`${baseUrl}/tote-bag-seminar/`, today, 'weekly', '0.9');
  addEntry(`${baseUrl}/tote-bag-custom-malang/`, today, 'weekly', '0.9');
  addEntry(`${baseUrl}/panduan-produksi-tote-bag/`, today, 'weekly', '0.8');
  addEntry(`${baseUrl}/cara-pesan/`, today, 'weekly', '0.8');
  addEntry(`${baseUrl}/layanan/`, today, 'weekly', '0.8');
  addEntry(`${baseUrl}/portofolio/`, today, 'weekly', '0.8');
  addEntry(`${baseUrl}/blog/`, today, 'daily', '0.8');
  addEntry(`${baseUrl}/faq/`, today, 'weekly', '0.8');

  // 2. Automatically scan src/pages for ANY newly added .astro files
  try {
    const pagesDir = path.resolve(process.cwd(), 'src/pages');
    const scanDir = (dir: string, baseRoute = '') => {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          scanDir(fullPath, `${baseRoute}/${file}`);
        } else if (file.endsWith('.astro')) {
          // Skip dynamic templates [slug].astro and 404
          if (file.includes('[') || file === '404.astro') continue;
          
          let route = baseRoute;
          if (file === 'index.astro') {
            route = route ? `${route}/` : '/';
          } else {
            const pageName = file.replace(/\.astro$/, '');
            route = `${route}/${pageName}/`;
          }
          if (!route.startsWith('/')) route = '/' + route;
          addEntry(`${baseUrl}${route}`, today, 'monthly', '0.7');
        }
      }
    };
    scanDir(pagesDir);
  } catch (e) {
    // fallback if filesystem access has issues
  }

  // 3. Product Detail Pages
  for (const prod of products) {
    addEntry(`${baseUrl}/produk/${prod.slug}/`, today, 'weekly', '0.8');
  }

  // 4. City Landing Pages
  for (const city of cityServices) {
    addEntry(`${baseUrl}/layanan/${city.slug}/`, today, 'weekly', '0.8');
  }

  // 5. Portfolio Case Studies
  for (const item of portfolioItems) {
    addEntry(`${baseUrl}/portofolio/${item.slug}/`, today, 'monthly', '0.7');
  }

  // 6. Author Profile Pages
  for (const author of Object.values(authors)) {
    addEntry(`${baseUrl}/penulis/${author.slug}/`, today, 'monthly', '0.6');
  }

  // 7. Blog Articles from Naskah (Auto-updates with publication schedule)
  const naskahArticles = getAllNaskah().filter(n => n.url.startsWith('/blog/'));
  for (const art of naskahArticles) {
    addEntry(`${baseUrl}/blog/${art.slug}/`, art.jadwal || today, 'monthly', '0.7');
  }

  const entries = Array.from(entriesMap.values());

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    entry => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
