# PRD — Website Tote Bag Custom B2B

**Proyek:** totebag.web.id  
**Versi:** 1.0 — 27 Oktober 2026  
**Status:** Dokumen perencanaan; belum menjadi website yang diimplementasikan  
**Referensi utama:** `Analisis_Entity_SEO_ToteBag(1).md`  
**Stack:** Astro JS (versi stabil saat implementasi), Bootstrap 5.3.x, CSS custom, TypeScript opsional, static site generation.

## 1. Executive summary
Bangun situs katalog dan lead generation premium-minimalis yang responsif untuk penyedia tote bag custom bagi perusahaan, instansi, kampus, EO, UMKM, dan panitia seminar. Fokus bukan bersaing sebagai marketplace fashion umum, melainkan memfasilitasi penilaian vendor dan permintaan penawaran (RFQ) B2B. Situs harus menjelaskan material, model, ukuran, pilihan custom branding, bukti pekerjaan, prosedur, dan jalur konsultasi WhatsApp.

**Positioning bersumber dari analisis:** “Penyedia Tote Bag Custom untuk Perusahaan, Instansi, dan Event Berbasis di Malang dengan Layanan Pemesanan Antarkota.”

## 2. Identitas proyek
| Item | Keputusan |
|---|---|
| Domain | `https://totebag.web.id/` |
| Nama yang digunakan sementara | Tote Bag |
| Basis bisnis | Malang, Jawa Timur |
| Kontak WhatsApp | `+62 821-3108-7971` → `https://wa.me/6282131087971` |
| Segmen | Procurement, purchasing, HRD, marketing, EO, panitia seminar, UMKM |
| Geografis | Malang prioritas; layanan antarkota ke Surabaya, Jakarta, Bandung, Makassar, Lombok, Sumatra, Sulawesi berdasarkan kapabilitas nyata |
| Tujuan primer | Qualified inquiry via WhatsApp |
| Tujuan sekunder | Katalog yang dapat dibandingkan, SEO B2B, kepercayaan, edukasi |

**Data belum tersedia dalam sumber:** alamat lengkap, email, jam operasional, harga, MOQ, lead time, kapasitas produksi, logo resmi, daftar SKU, daftar pelanggan yang berizin, kebijakan retur/revisi, foto asli. Jangan mengarangnya; tampilkan hanya setelah diverifikasi. Nama brand generik harus dikonfirmasi dalam inventaris identitas sebelum penerbitan.

## 3. Sasaran dan indikator keberhasilan
1. Pengunjung menemukan solusi berdasarkan **bahan**, **kebutuhan**, atau **portofolio** dalam maksimal tiga interaksi navigasi.
2. Semua produk memiliki informasi yang cukup untuk meminta penawaran: bahan, ukuran, fitur, metode custom, opsi jumlah, foto, dan status informasi harga/MOQ yang jelas.
3. Tombol CTA WhatsApp dapat digunakan di semua tipe halaman; prefill menyertakan konteks produk tanpa membuat klaim yang tidak benar.
4. Semua halaman bernilai SEO memiliki canonical, metadata unik, breadcrumb bila relevan, internal link kontekstual, dan schema yang mencerminkan konten nyata.
5. Target teknis *internal* (bukan jaminan hasil lapangan): Lighthouse Mobile Performance ≥90, Accessibility ≥95, Best Practices ≥95, SEO ≥95 pada template utama setelah diuji; Core Web Vitals LCP ≤2,5 s, INP ≤200 ms, CLS ≤0,1 pada data lapangan p75 jika tersedia.
6. Ukur event: `whatsapp_click`, `rfq_submit` (hanya jika form benar-benar ada), `product_view`, `portfolio_view`, `filter_use` (hanya bila dipakai), dan `file_download` jika fitur unduh disediakan. Jangan mengukur percakapan selesai atau deal dari klik saja.

**KPI bisnis yang perlu baseline:** sesi organik relevan, klik WhatsApp berkonteks, jumlah inquiry yang memenuhi syarat, tingkat respons, dan penawaran jadi pesanan. Belum ada target kuantitatif tervalidasi di file sumber.

## 4. Pengguna dan jobs-to-be-done
| Persona | Kebutuhan | Penyelesaian UI |
|---|---|---|
| Procurement perusahaan | Spesifikasi, kesesuaian vendor, RFQ, qty, deadline | Halaman solusi B2B + tabel spesifikasi + CTA RFQ |
| HRD | Tote bag onboarding / gift karyawan | Kategori penggunaan + galeri hasil |
| EO/panitia seminar | Waktu produksi, pilihan harga/bahan, banyak unit | Solusi seminar + cara pesan + FAQ |
| Marketing/UMKM | Logo, warna, packaging, contoh hasil | Galeri custom dan panduan teknik cetak |
| Pembeli wanita | Bahan, ukuran, kenyamanan, tampilan pemakaian | Cluster sekunder `/tote-bag-wanita/` hanya bila produknya nyata |

## 5. Scope
### MVP — wajib untuk rilis
- Layout Astro dengan header responsif, footer, navigasi, CTA WhatsApp, breadcrumb, search engine metadata.
- Beranda; tentang; katalog; setidaknya kategori bahan yang tersedia; tote bag custom; solusi perusahaan; solusi seminar; portofolio bila ada bukti nyata; cara pesan; kontak; blog dan satu artikel pilar; layanan Malang.
- Halaman detail SKU (slug dinamis atau konten terstruktur) dengan foto, spesifikasi, info pemesanan, hubungan kategori, dan produk terkait.
- FAQ menggunakan Bootstrap Accordion; navbar collapse/offcanvas mobile; produk dengan card & responsive grid; galeri responsif; pagination untuk daftar panjang.
- Image optimization WebP/AVIF bila tepat, lazy-load gambar bawah lipatan, optimasi font, reduced motion, focus state dan HTML semantik.
- JSON-LD relevan per tipe halaman; sitemap; robots; canonical; OG/Twitter cards; favicon/logo bila tersedia; redirect untuk slug lama bila ada.
- Deployment statis, verifikasi HTTPS, analytics consent/privacy sesuai kebutuhan dan monitoring dasar.

### Fase 2 — bila data/kapabilitas telah tersedia
- Filter katalog berdasarkan bahan/ukuran/fitur dengan URL query yang masuk akal; studi kasus portofolio detail; video proses nyata.
- Halaman layanan kota lainnya dengan bukti pengiriman dan konten unik; perbandingan produk interaktif; downloadable RFQ checklist.
- Kalkulator estimasi bersyarat jika daftar harga dan aturan qty terverifikasi; jangan tampilkan harga fiktif.

### Out of scope awal
- Marketplace multi-seller, pembayaran online, stok realtime, CRM yang belum terintegrasi, akun pelanggan, rating/testimoni palsu, generator desain logo kompleks, chatbot yang mengklaim stok/harga tak terverifikasi.

## 6. Arsitektur informasi & route
| URL | Search intent / tujuan | Status |
|---|---|---|
| `/` | Brand, overview vendor, CTA | MVP |
| `/tentang-kami/` | Profil usaha, bukti identitas | MVP |
| `/produk/` | Indeks katalog per bahan dan model | MVP |
| `/produk/tote-bag-canvas/` | Kategori canvas | Sesuai inventaris |
| `/produk/tote-bag-blacu/` | Kategori blacu | Sesuai inventaris |
| `/produk/tote-bag-spunbond/` | Kategori spunbond | Sesuai inventaris |
| `/produk/tote-bag-kulit/` | Kategori kulit | Jika benar-benar dijual |
| `/produk/[slug]/` | Detail SKU tertentu; slug unik tanpa konflik kategori | MVP saat SKU tersedia |
| `/tote-bag-custom/` | Pilar komersial custom logo | MVP |
| `/tote-bag-perusahaan/` | Solusi pengadaan korporat | MVP |
| `/tote-bag-seminar/` | Seminar & event | MVP |
| `/tote-bag-wanita/` | Cluster sekunder fashion/merchandise | Fase 2 jika relevan |
| `/portofolio/` | Galeri pesanan autentik | MVP jika tersedia |
| `/portofolio/[slug]/` | Studi kasus individual | Fase 2 |
| `/cara-pesan/` | Alur konsultasi → brief → sampel → konfirmasi → produksi → QC → kirim | MVP; sesuaikan proses nyata |
| `/layanan/malang/` | Basis dan pelayanan lokal | MVP |
| `/layanan/[kota]/` | Cakupan layanan lintas kota | Fase 2; unik dan terverifikasi |
| `/blog/` | Hub artikel/topical authority | MVP |
| `/blog/[slug]/` | Artikel dan FAQ | MVP |
| `/penulis/[slug]/` | Profil author asli | MVP bila artikel memakai byline |
| `/kontak/` | Kanal inquiry dan data bisnis | MVP |
| `/kebijakan-privasi/` | Informasi pengumpulan data | MVP jika mengumpulkan data |
| `/404` | Halaman tidak ditemukan, jalur balik | MVP |

Catatan: rencana URL didasarkan pada file sumber, dengan penambahan URL detail produk, penulis, legal, dan studi kasus sebagai usulan implementasi. Hindari halaman kota massal yang isinya hanya mengganti nama kota.

## 7. Detail requirements per template
### 7.1 Homepage
Urutan: navbar → hero H1 **“Tote Bag Custom untuk Perusahaan, Seminar, dan Event”** → kartu kategori bahan → solusi berdasarkan industri/penggunaan → benefit yang bisa dibuktikan → galeri hasil asli → portofolio → edukasi bahan/ukuran/printing → langkah pemesanan → cakupan layanan nyata → FAQ → artikel terkait → CTA utama → footer.
- Hero memuat 1 CTA primer “Konsultasi via WhatsApp” dan 1 CTA sekunder “Lihat Katalog”.
- Tidak ada statistik “ribuan klien” atau klaim produksi sendiri jika belum terbukti.
- Hero visual pakai foto produk nyata; video hanya jika aset tersedia dan dioptimasi, dengan poster fallback.

### 7.2 Katalog & kategori
- Desktop: 3 atau 4 kolom sesuai lebar; tablet 2; mobile 1–2 sesuai keterbacaan.
- Kartu: foto, nama produk, bahan, beberapa atribut kunci, link detail, CTA konsultasi.
- Jangan menampilkan harga “mulai dari” sebelum ada data valid; gunakan “Minta penawaran”.
- Filter visual boleh memakai Bootstrap nav-pills/accordion tetapi harus keyboard-operable dan konten mudah ditemukan crawler; untuk MVP utamakan navigasi link kategori.

### 7.3 Detail produk
- Breadcrumb → H1 → galeri gambar alt faktual → ringkasan → spesifikasi tabel (bahan, ukuran, tali, furing/zipper, warna, cetak, MOQ/lead time jika valid) → opsi custom → dokumentasi nyata → langkah pesan → FAQ → produk terkait.
- CTA WhatsApp mengandung nama SKU, qty yang diisi opsional dan kebutuhan custom; encode dengan `encodeURIComponent`.
- Produk tanpa data lengkap disembunyikan dari indeks dan tidak diterbitkan sebagai placeholder tipis.

### 7.4 Halaman solusi
- Nyatakan konteks pembeli, daftar rekomendasi material berbasis data, checklists brief pembelian (qty, deadline, logo, budget, alamat pengiriman), contoh kasus berizin bila ada, FAQ RFQ dan CTA.

### 7.5 Portofolio
- Hanya pesanan nyata dan foto asli; izin untuk merek/logo/nama pembeli.
- Studi kasus: kebutuhan, material, ukuran, metode branding, tantangan, solusi, hasil, foto, tanggal bila diperkenankan. Hindari hasil numerik tanpa data.

### 7.6 Artikel
- Breadcrumb → judul → ringkasan jawaban langsung 40–80 kata bila sesuai intent → author/reviewer asli → tanggal terbit/perbarui → hero image + alt → daftar isi anchor H2 → isi artikel bertabel/contoh/bukti → FAQ → tautan cluster/produk → CTA.
- Desktop sidebar sticky untuk profil author, kategori, artikel/produk terkait; di layar kecil sidebar turun setelah konten, tidak overlay.
- Jangan menyamakan optimasi GEO dengan jaminan masuk jawaban AI.

### 7.7 Contact/RFQ
- CTA utama WhatsApp, nomor tampak jelas, jam/email/alamat hanya jika valid.
- Opsional form fields: nama, organisasi, email/WA, tipe tas, jumlah, target tanggal, lokasi kirim, ringkasan desain, persetujuan privasi; validasi client + server jika form benar-benar ditambahkan. Untuk static site tanpa backend, gunakan WhatsApp prefill; jangan membuat form yang pura-pura terkirim.

## 8. Komponen Bootstrap (penggunaan nyata)
| Komponen / utilitas Bootstrap | Dipakai di |
|---|---|
| `container`, `container-fluid`, `row`, `col-*`, `g-*` | Grid responsif semua halaman |
| `navbar`, `navbar-expand-lg`, `offcanvas` | Header mobile/desktop |
| `dropdown` | Navigasi produk bila submenu cukup besar |
| `card`, `ratio`, `object-fit-cover` | Katalog, artikel, portofolio |
| `btn`, `btn-outline-*`, `btn-lg` | CTA dan aksi sekunder |
| `accordion` | FAQ / filter mobile |
| `breadcrumb` | Produk, kategori, artikel, portofolio |
| `carousel` | Galeri terpilih; jangan otomatis berputar tanpa kontrol |
| `modal` | Zoom foto atau konfirmasi; aksesibilitas wajib |
| `form-control`, `form-select`, `form-label` | Form RFQ bila benar-benar ada |
| `table-responsive`, `table` | Perbandingan dan spesifikasi |
| `pagination` | Daftar blog/portfolio jika panjang |
| `sticky-top`, `d-*`, `gap-*`, `order-*` | Sidebar & susunan responsif |
| `visually-hidden`, utility focus | Aksesibilitas |

Gunakan **Bootstrap resmi** dengan komponen HTML normal dalam `.astro`. JavaScript Bootstrap diimpor hanya untuk komponen yang membutuhkannya. Jangan mengimpor JS bundle berat pada halaman tanpa interaksi.

## 9. Sistem konten (data model)
- `Product`: id, slug, name, category, material, dimensions, features[], techniques[], images[], altText[], MOQ?, price?, leadTime?, description, usage[], isPublished, verifiedAt.
- `Category`: slug, title, overview, products[], primaryKeyword, relatedLinks[].
- `Portfolio`: slug, clientDisplayName? (izin), brief, specs, photos[], permissionsStatus, outcome, publishDate.
- `Article`: slug, title, description, authorId, reviewerId?, publishedAt, updatedAt?, cover, headings, references[], relatedProductIds[].
- `Author`: name, role, realBio, photo?, profileUrl.
- `FAQ`: question, answer, applicablePages[].
- `BusinessProfile`: canonicalName, telephone, address?, serviceAreas[], logo?, socialLinks[].
- Semua objek dengan kolom `?` opsional tidak boleh dipalsukan demi schema atau UI.

## 10. SEO / AEO / GEO & schema
- Setiap halaman: title unik, meta description unik, lang `id`, canonical absolut, Open Graph title/description/image (gambar valid), Twitter card, satu H1, heading hierarkis, alt, internal links, sitemap, robots, favicon, 404 wajar.
- Satu organisasi `@id = https://totebag.web.id/#organization` direferensikan lintas schema di `@graph`.
- Beranda: `Organization`, `WebSite`, `WebPage`; `LocalBusiness` hanya saat detail yang valid tersedia.
- Kategori: `CollectionPage`/`WebPage`, `BreadcrumbList`, `ItemList` jika koleksi benar-benar ada.
- Detail SKU: `Product`, `BreadcrumbList`; `Offer` hanya jika penawaran dan syaratnya benar; jangan menambahkan rating/review buatan.
- Solusi: `WebPage`, `BreadcrumbList`, `FAQPage` jika FAQ nyata ditampilkan, tanpa harapan otomatis rich result.
- Artikel: `BlogPosting`/`Article`, `Person` untuk author asli, `BreadcrumbList`, `FAQPage` jika relevan.
- Video: `VideoObject` hanya untuk video yang benar-benar tersedia dengan metadata valid.
- FAQ/AEO: jawab langsung dan akurat; hindari keyword stuffing; data dan sumber dapat diperiksa.
- Schema dihasilkan dari data konten yang sama dengan teks visual; validasi melalui validator Schema.org dan alat pengujian hasil kaya yang relevan.
- Jangan mengklaim rank, Knowledge Panel, atau AI Overview akan tercapai secara otomatis.

## 11. Teknik dan arsitektur aplikasi
```text
/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── media/             # aset statis yang memang tidak melalui pipeline Astro
├── src/
│   ├── assets/            # gambar diproses via astro:assets
│   ├── components/
│   │   ├── layout/        # Header, Footer, Breadcrumbs, WhatsAppCTA
│   │   ├── ui/            # Button, ProductCard, FAQAccordion, PortfolioCard
│   │   ├── product/       # Gallery, SpecsTable, RelatedProducts
│   │   └── seo/           # SEOHead, JsonLd
│   ├── content/           # koleksi articles/products/portfolio
│   ├── data/              # profile bisnis, navigasi, FAQ
│   ├── layouts/           # BaseLayout, ArticleLayout, ProductLayout
│   ├── pages/             # Astro file-based routing
│   ├── scripts/           # perilaku interaksi bila perlu
│   └── styles/            # tokens.scss atau tokens.css, global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```
- Gunakan Astro Content Collections untuk katalog, blog dan portofolio agar terstruktur dan tervalidasi.
- Atur `site: 'https://totebag.web.id'` dan `trailingSlash: 'always'` secara konsisten.
- Target build `output: 'static'`; deploy Vercel/Netlify/static hosting. Tidak memerlukan database untuk MVP.
- Gunakan Bootstrap 5.3.x resmi; bila perlu custom Sass gunakan paket npm dan token variabel, tanpa dependensi ke Astro-Bootstrap third-party.
- Instal integrasi sitemap yang kompatibel dengan versi Astro pada saat implementasi.
- Jaga ukuran JS: komponen disclosure dapat memakai native details jika tidak butuh Bootstrap JS; untuk requirement ini FAQ memakai accordion Bootstrap.
- Sitemap hanya untuk halaman publik valid; jangan indeks halaman placeholder, admin, atau hasil pencarian internal.

## 12. Responsive & aksesibilitas
- Breakpoints Bootstrap: xs <576; sm ≥576; md ≥768; lg ≥992; xl ≥1200; xxl ≥1400.
- Mobile-first; uji 320/360/390/430/576/768/1024/1280/1440/1920 px dan orientasi landscape; **tidak** hanya mengandalkan breakpoint teoretis.
- Minimum tap target diusahakan 44×44 px, focus visible, contrast WCAG AA, skip-to-content, navbar dapat dioperasikan keyboard, aria-expanded sesuai state, gambar dengan width/height untuk cegah CLS.
- Navbar mobile menggunakan offcanvas; desktop expanded. Sidebar artikel hanya sticky pada ≥lg, dengan `top` mempertimbangkan tinggi navbar, berhenti sebelum footer. Tidak fixed overlay mobile.
- CTA WhatsApp sticky mobile jika tidak menutup konten/cookie notice; perhatikan `env(safe-area-inset-bottom)`.
- CSS `clamp()` untuk fluid font dan ruang; `prefers-reduced-motion` mematikan animasi tidak esensial.

## 13. Kinerja & kualitas
- Gunakan `astro:assets` `<Image>`/`<Picture>` untuk resolusi & format adaptif; fokus ukuran hasil unduhan, bukan batas KB kaku yang merusak kualitas; target foto card sekitar <100 KB bila layak, hero disesuaikan dengan kebutuhan.
- Prioritaskan loading gambar hero, lazy-load di bawah fold; format WebP/AVIF bila supported; jangan memaksa video sebagai LCP.
- Font self-host jika berlisensi, hanya 1–2 family, preload font penting, font-display swap; hindari banyak animation JS.
- Validasi HTML, broken links, console errors, sitemap, OG previews, JSON-LD, navigasi, keyboard, dan mobile menu.

## 14. Keamanan dan legal
- Semua sumber testimoni, logo klien dan foto memiliki hak pakai; minta persetujuan sebelum dipublikasi.
- Form RFQ bila digunakan: validasi server, anti-spam, sanitasi input, privasi & kebijakan retensi data, keamanan endpoint; tidak ada form palsu.
- Link eksternal dibuka aman; HTTPS wajib; catat update paket untuk keamanan.
- Hindari klaim keberlanjutan yang tidak ada bukti lifecycle.

## 15. Acceptance criteria dan definisi selesai
- [ ] Semua route MVP yang datanya valid terbuka tanpa 404/loop dan URL publik tidak menampilkan `.html` atau `/index`.
- [ ] Navbar/offcanvas, dropdown, accordion, carousel jika digunakan berfungsi dengan keyboard/touch.
- [ ] Semua CTA ke nomor **6282131087971**, dengan teks pesan sesuai konteks.
- [ ] Semua produk terpublikasi memiliki spesifikasi asli, gambar dan alt relevan.
- [ ] Tidak ada placeholder/klien/harga/MOQ palsu.
- [ ] Metadata/canonical/OG/schema/sitemap/robots teruji pada halaman representatif.
- [ ] Halaman lancar dan bebas horizontal overflow pada lebar 320–1920 px.
- [ ] Core templates lolos audit performa dan aksesibilitas sesuai target internal, atau deviasi dicatat dengan rencana perbaikan.
- [ ] Basic analytics memisahkan klik CTA dari prospek dan penjualan sebenarnya.
- [ ] Pemeriksaan akhir dilakukan pada Chrome Android, Safari iOS, Chrome desktop, Firefox desktop bila tersedia.

## 16. Roadmap implementasi
| Fase | Deliverable | Gate |
|---|---|---|
| 0 — Discovery | Validasi brand, aset, logo, nomor, SKU, harga, proses, testimoni | Data utama siap / gap diberi tanda |
| 1 — Foundation | Astro setup, Bootstrap theme, header/footer, BaseLayout, SEO | Template responsive dan valid |
| 2 — Commercial MVP | Home, katalog, kategori, detail produk, custom, perusahaan, seminar, kontak | Funnel WA berfungsi |
| 3 — Trust & content | Tentang, cara pesan, portofolio asli, blog, author, layanan Malang | Bukti dapat diverifikasi |
| 4 — QA & launch | Optimization, schema, sitemap, deployment, analytic events | Checklist acceptance lulus |
| 5 — Growth | Cluster edukasi, studi kasus, layanan wilayah unik, optimasi conversion | Didorong data Search Console/lead |

## 17. Ketergantungan dan risiko
- **Risiko konten:** analisis adalah strategi, bukan katalog transaksi. Tanpa harga/MOQ/foto nyata, jangan membangun halaman palsu.
- **Risiko SEO:** halaman bahan atau kota tipis berpotensi kurang bernilai; terbitkan saat data cukup.
- **Risiko teknis:** import seluruh JS Bootstrap dapat menambah beban; pakai komponen sesuai kebutuhan.
- **Risiko lead:** chat via WhatsApp tidak memberi pipeline lengkap tanpa tracking manual/CRM; sediakan parameter konteks dan SOP lead.

## 18. Dokumen pasangan
Lihat `DESIGN_ToteBag_Website.md` untuk identitas visual, komponen Bootstrap, layout, breakpoints, motion, dan spesifikasi halaman.

## 19. Referensi
- File sumber: `Analisis_Entity_SEO_ToteBag(1).md` (unggahan pengguna).
- Bootstrap breakpoints: https://getbootstrap.com/docs/5.3/layout/breakpoints/
- Bootstrap components: https://getbootstrap.com/docs/5.3/components/
- Astro docs: https://docs.astro.build/
