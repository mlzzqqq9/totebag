import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

export interface NaskahItem {
  id: string;
  batch: string;
  jadwal: string;
  jenis: 'halaman' | 'artikel';
  slug: string;
  url: string;
  canonical: string;
  keyword: string;
  searchIntent: string;
  cluster: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  primaryEntity: string;
  secondaryEntity: string;
  targetPembaca: string;
  ctaText: string;
  ctaUrl: string;
  directAnswer: string;
  bodyHtml: string;
  bodyMarkdown: string;
  faqs: { question: string; answer: string }[];
  toc: { id: string; title: string; level: number }[];
  schemaJson: Record<string, any> | null;
  readTime: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function parseNaskahContent(content: string, filename: string): NaskahItem {
  // Extract ID
  const idMatch = content.match(/\*\*ID:\*\*\s*(\w+)/) || filename.match(/^(\d+)_/);
  const id = idMatch ? idMatch[1] : '';

  // Extract Batch
  const batchMatch = content.match(/\*\*Batch:\*\*\s*([^\s|]+)/);
  const batch = batchMatch ? batchMatch[1].trim() : '';

  // Extract Jadwal
  const jadwalMatch = content.match(/\*\*Jadwal:\*\*\s*([^\s|]+)/);
  const jadwal = jadwalMatch ? jadwalMatch[1].trim() : '2026-11-12';

  // Extract Jenis
  const jenisMatch = content.match(/\*\*Jenis:\*\*\s*([^\r\n]+)/);
  const jenis = (jenisMatch && jenisMatch[1].trim().toLowerCase().includes('halaman')) ? 'halaman' : 'artikel';

  // Extract URL rencana
  const urlMatch = content.match(/\*\*URL rencana:\*\*\s*([^\r\n]+)/);
  let rawUrl = urlMatch ? urlMatch[1].replace(/`/g, '').trim() : '';
  if (!rawUrl.startsWith('/')) rawUrl = '/' + rawUrl;
  if (!rawUrl.endsWith('/')) rawUrl = rawUrl + '/';

  // Calculate slug
  const cleanUrl = rawUrl.replace(/^\/|\/$/g, '');
  const slug = cleanUrl.includes('/') ? cleanUrl.split('/').pop() || '' : cleanUrl;

  // Extract Canonical
  const canonicalMatch = content.match(/\*\*Canonical rencana:\*\*\s*([^\r\n]+)/);
  const canonical = canonicalMatch ? canonicalMatch[1].trim() : `https://totebag.web.id${rawUrl}`;

  // Extract Keyword
  const keywordMatch = content.match(/\*\*Keyword utama \(hipotesis\):\*\*\s*([^\r\n]+)/);
  const keyword = keywordMatch ? keywordMatch[1].trim() : '';

  // Extract Search Intent
  const intentMatch = content.match(/\*\*Search intent:\*\*\s*([^\r\n]+)/);
  const searchIntent = intentMatch ? intentMatch[1].trim() : '';

  // Extract Cluster
  const clusterMatch = content.match(/\*\*Cluster:\*\*\s*([^\r\n]+)/);
  const cluster = clusterMatch ? clusterMatch[1].trim() : 'Tote Bag Fundamental';

  // Extract SEO Title
  const seoTitleMatch = content.match(/\*\*SEO title:\*\*\s*([^\r\n]+)/);
  const seoTitle = seoTitleMatch ? seoTitleMatch[1].trim() : '';

  // Extract Meta Description
  const metaDescMatch = content.match(/\*\*Meta description:\*\*\s*([^\r\n]+)/);
  const metaDescription = metaDescMatch ? metaDescMatch[1].trim() : '';

  // Extract H1
  const h1Match = content.match(/\*\*H1:\*\*\s*([^\r\n]+)/) || content.match(/^#\s+(.+)$/m);
  const h1 = h1Match ? h1Match[1].trim() : '';

  // Extract Entities
  const peMatch = content.match(/\*\*Primary entity:\*\*\s*([^\r\n]+)/);
  const primaryEntity = peMatch ? peMatch[1].trim() : '';

  const seMatch = content.match(/\*\*Secondary entity:\*\*\s*([^\r\n]+)/);
  const secondaryEntity = seMatch ? seMatch[1].trim() : '';

  const tpMatch = content.match(/\*\*Target pembaca:\*\*\s*([^\r\n]+)/);
  const targetPembaca = tpMatch ? tpMatch[1].trim() : '';

  // Extract CTA
  const ctaMatch = content.match(/\*\*CTA:\*\*\s*([^\r\n]+)/);
  const ctaText = ctaMatch ? ctaMatch[1].trim() : '';
  const ctaUrlMatch = ctaText.match(/(https?:\/\/[^\s]+)/);
  const ctaUrl = ctaUrlMatch ? ctaUrlMatch[1] : 'https://wa.me/6282131087971';

  // Extract JSON-LD Schema
  let schemaJson: Record<string, any> | null = null;
  const jsonMatch = content.match(/```json\s*([\s\S]*?)\s*```/);
  if (jsonMatch) {
    try {
      schemaJson = JSON.parse(jsonMatch[1]);
    } catch (e) {
      // ignore parse error fallback
    }
  }

  // Extract Body between '---' and editorial notes or schema
  let bodyMarkdown = '';
  const parts = content.split(/\r?\n---\r?\n/);
  if (parts.length > 1) {
    const afterFrontmatter = parts.slice(1).join('\n---\n');
    // cut before '## Catatan editorial' or '## Schema JSON-LD'
    const cutEnd = afterFrontmatter.split(/##\s+(?:Catatan editorial|Schema JSON-LD)/i)[0];
    bodyMarkdown = cutEnd.trim();
  } else {
    bodyMarkdown = content;
  }

  // Remove duplicate top H1 from bodyMarkdown if it exists
  bodyMarkdown = bodyMarkdown.replace(/^#\s+[^\r\n]+\r?\n+/, '');

  // Extract Direct Answer (first non-empty paragraph)
  const paragraphs = bodyMarkdown.split(/\r?\n\r?\n+/).map(p => p.trim()).filter(p => p && !p.startsWith('#'));
  const directAnswer = paragraphs.length > 0 ? paragraphs[0] : '';

  // Extract FAQs
  const faqs: { question: string; answer: string }[] = [];
  const faqSectionMatch = bodyMarkdown.match(/##\s+Pertanyaan yang sering diajukan([\s\S]*?)(?=##|$)/i);
  if (faqSectionMatch) {
    const faqBlock = faqSectionMatch[1];
    const qBlocks = faqBlock.split(/###\s+/).filter(Boolean);
    for (const block of qBlocks) {
      const lines = block.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
      if (lines.length > 0) {
        const question = lines[0].replace(/\?*$/, '?');
        const answer = lines.slice(1).join(' ').trim();
        if (question && answer) {
          faqs.push({ question, answer });
        }
      }
    }
  }

  // Extract TOC headings
  const toc: { id: string; title: string; level: number }[] = [];
  const headingRegex = /^(#{2,3})\s+([^\r\n]+)$/gm;
  let match;
  while ((match = headingRegex.exec(bodyMarkdown)) !== null) {
    const level = match[1].length;
    const title = match[2].trim();
    // Exclude internal notes
    if (!title.toLowerCase().includes('catatan editorial') && !title.toLowerCase().includes('schema')) {
      const hId = slugify(title);
      toc.push({ id: hId, title, level });
    }
  }

  // Add IDs to markdown headings before parsing HTML
  let processedMarkdown = bodyMarkdown.replace(/^(#{2,3})\s+([^\r\n]+)$/gm, (full, hashes, title) => {
    const cleanTitle = title.trim();
    const hId = slugify(cleanTitle);
    return `<h${hashes.length} id="${hId}">${cleanTitle}</h${hashes.length}>`;
  });

  const bodyHtml = marked.parse(processedMarkdown, { gfm: true, breaks: true }) as string;

  // Approximate read time: ~200 words per minute
  const wordCount = bodyMarkdown.split(/\s+/).length;
  const minutes = Math.max(3, Math.ceil(wordCount / 180));
  const readTime = `${minutes} menit baca`;

  return {
    id,
    batch,
    jadwal,
    jenis,
    slug,
    url: rawUrl,
    canonical,
    keyword,
    searchIntent,
    cluster,
    seoTitle,
    metaDescription,
    h1,
    primaryEntity,
    secondaryEntity,
    targetPembaca,
    ctaText,
    ctaUrl,
    directAnswer,
    bodyHtml,
    bodyMarkdown,
    faqs,
    toc,
    schemaJson,
    readTime
  };
}

let cachedNaskahList: NaskahItem[] | null = null;

export function getAllNaskah(): NaskahItem[] {
  if (cachedNaskahList) return cachedNaskahList;

  const naskahDir = path.resolve(process.cwd(), 'naskah');
  if (!fs.existsSync(naskahDir)) {
    return [];
  }

  const files = fs.readdirSync(naskahDir).filter(f => f.endsWith('.md'));
  const items: NaskahItem[] = [];

  for (const file of files) {
    const filePath = path.join(naskahDir, file);
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const item = parseNaskahContent(content, file);
      items.push(item);
    } catch (e) {
      console.error(`Error parsing ${file}:`, e);
    }
  }

  // Sort by ID naturally
  items.sort((a, b) => {
    const numA = parseInt(a.id, 10) || 999;
    const numB = parseInt(b.id, 10) || 999;
    return numA - numB;
  });

  cachedNaskahList = items;
  return items;
}

export function getNaskahById(id: string): NaskahItem | undefined {
  const all = getAllNaskah();
  const normalized = id.padStart(2, '0');
  return all.find(item => item.id === id || item.id === normalized);
}

export function getNaskahBySlug(slug: string): NaskahItem | undefined {
  const all = getAllNaskah();
  return all.find(item => item.slug === slug);
}

export function getNaskahByUrl(url: string): NaskahItem | undefined {
  const all = getAllNaskah();
  let cleanUrl = url.trim();
  if (!cleanUrl.startsWith('/')) cleanUrl = '/' + cleanUrl;
  if (!cleanUrl.endsWith('/')) cleanUrl = cleanUrl + '/';
  return all.find(item => item.url === cleanUrl);
}

export function getBlogArticles(): NaskahItem[] {
  const all = getAllNaskah();
  return all.filter(item => item.url.startsWith('/blog/'));
}
