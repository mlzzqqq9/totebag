# DESIGN.md — Tote Bag | Design System & UI Specification

**Produk:** `totebag.web.id`  
**Versi:** 1.0 · 27 Oktober 2026  
**Framework UI:** Bootstrap 5.3.x + CSS custom dalam Astro JS  
**Arah visual:** Premium, minimalis, profesional, hangat, mudah dikenali; **tanpa ornamen berlebihan**.

> Catatan sumber: analisis entity menentukan positioning B2B, konten dan kebutuhan bukti; **palet dan tipografi di bawah adalah rekomendasi desain baru**, bukan fakta yang dinyatakan di file analisis.

## 1. Konsep visual
**Tema: “Modern Crafted Utility.”** Komposisi bersih, foto produk jadi elemen dominan, warna hijau pinus gelap yang mudah dikenali berpasangan dengan latar warm ivory dan aksen tembaga lembut. Estetika terasa rapi seperti brand merchandise korporat, bukan ecommerce fashion ramai.

### Keputusan penting
- Logo wajib asli bila sudah ada; sementara gunakan wordmark teks “Tote Bag” tanpa membuat logo palsu.
- Tidak menampilkan icon emoji. Pakai Bootstrap Icons SVG teroptimasi atau SVG custom dengan lisensi sesuai.
- Bukan seluruh latar gelap; mayoritas permukaan netral agar warna dan tekstur tas tetap akurat.
- Foto nyata produk dari minimal tiga sudut, detail jahitan, close-up bahan, perbandingan ukuran dan penggunaan.
- Grafis dekoratif seminimal mungkin; jangan memakai pola random, gradient berlebihan, atau animasi terus bergerak.

## 2. Design tokens
### Warna
| Token | Hex | Penggunaan |
|---|---|---|
| `--brand-primary` | `#173F38` | Navbar aktif, headline aksen, tombol primer, footer |
| `--brand-primary-hover` | `#0E2E29` | Hover tombol |
| `--brand-accent` | `#C18755` | Label editorial, garis aksen kecil, penanda pilihan |
| `--surface` | `#FBF9F4` | Background utama warm ivory |
| `--surface-alt` | `#F1EFE8` | Section bergantian, kartu sekunder |
| `--surface-card` | `#FFFFFF` | Card |
| `--text-main` | `#1C2825` | Headline dan body |
| `--text-muted` | `#626D68` | Deskripsi dan metadata |
| `--border-soft` | `#DFE3DE` | Border tipis |
| `--focus-ring` | `#1D6EBC` | Fokus aksesibilitas |
| `--danger` | `#A52929` | Error form |

**Aturan warna:** kira-kira 70% latar netral, 25% hijau pinus & teks kuat, 5% accent. Cek semua pasangan foreground/background terhadap WCAG AA sebelum release. Teks kecil jangan memakai accent tembaga pada ivory tanpa kontras yang lolos.

### Tipografi
- Heading: **Manrope** atau **Plus Jakarta Sans** (pilih satu; weights 500/600/700).
- Body: **Inter** atau system-ui. Maksimal dua keluarga font, preload seperlunya.
- Scale desktop: Display `clamp(2.4rem, 5vw, 4.8rem)`, H1 kategori `clamp(2rem, 3.8vw, 3.4rem)`, H2 `clamp(1.6rem, 3vw, 2.6rem)`, H3 `1.25–1.5rem`, body `1rem`, small `0.875rem`.
- Line-height body 1.65, heading 1.12–1.25; panjang paragraf ideal 65–75 karakter pada artikel.

### Spacing, radius, shadow
- Spacing scale berdasarkan 4/8 px: 8, 12, 16, 24, 32, 48, 64, 96.
- Section padding: mobile 48–64 px; tablet 64–80 px; desktop 88–112 px.
- Card radius 16 px, input 10 px, button 10 px; jangan pill pada semua komponen.
- Shadow ringan `0 12px 32px rgba(14,46,41,.06)`; utamakan border subtle.
- Container utama Bootstrap `.container`; landing hero boleh `.container-fluid` dibatasi max content width 1320 px.

## 3. Responsive strategy
| Viewport | Bootstrap | Pola UI |
|---|---|---|
| 320–575 px | xs | Navbar offcanvas; hero 1 kolom; 1 kartu/row untuk kategori utama; CTA full-width; artikel 1 kolom |
| 576–767 px | sm | 1–2 card/row; padding bertambah; tombol tidak memanjang berlebihan |
| 768–991 px | md | 2–3 card/row; hero dapat tetap stack; komposisi tablet |
| 992–1199 px | lg | Navbar desktop; hero 2 kolom; product grid 3; sidebar artikel sticky |
| 1200–1399 px | xl | Grid 3–4, space lebih lapang |
| ≥1400 px | xxl | Konten maksimum terkendali; hero 2 kolom; hindari garis teks terlalu panjang |

**Uji tambahan:** lebar 320, 360, 375, 390, 430, 768, 820, 1024, 1280, 1440, 1920 px; zoom 200%; layar landscape; tulisan panjang; reduced motion.

## 4. Struktur header / navigasi
**Desktop (≥992px):** kiri wordmark; tengah `Beranda`, `Produk ▾`, `Tote Bag Custom`, `Solusi ▾`, `Portofolio`, `Blog`, `Tentang`; kanan CTA `Minta Penawaran`. Kontak dan Cara Pesan bisa masuk ke menu solusi/footer bila lebar sempit. Aktif state terlihat secara visual.

**Mobile (<992px):** brand kiri, tombol hamburger kanan (`aria-label="Buka navigasi"`), menu Bootstrap `offcanvas` dapat ditutup dengan close/backdrop/Escape; elemen menu berjarak cukup; CTA WA menonjol dan tetap aksesibel. Tidak ada dropdown hover-only.

**Sticky nav:** opsional `sticky-top` dengan backdrop opaque/border dan shadow minimal; perhatikan anchoring heading dengan `scroll-margin-top`.

## 5. Komponen desain reusable
| Nama `.astro` | Bootstrap dasar | Aturan desain |
|---|---|---|
| `Header.astro` | navbar, offcanvas, dropdown | Height 72–80 desktop / 64 mobile, brand terlihat |
| `Footer.astro` | container, row, col | 3–4 kolom desktop, stack mobile; identitas yang valid |
| `Button.astro` | btn | Primary hijau, secondary outline, link textual, focus ring |
| `Hero.astro` | row, col, ratio | H1 tunggal, ringkasan, 2 CTA, media utama |
| `CategoryCard.astro` | card | Gambar 4:3, title, teaser, arrow SVG |
| `ProductCard.astro` | card, ratio | Gambar konsisten, atribut faktual, CTA detail |
| `ProductGallery.astro` | carousel / modal | Thumbnails/gambar; no autoplay; zoom accessible |
| `PortfolioCard.astro` | card | Foto asli, label project faktual; tidak pakai logo klien tanpa izin |
| `FAQAccordion.astro` | accordion | Satu interaksi per pertanyaan; heading jelas |
| `Breadcrumbs.astro` | breadcrumb | Struktur semantik dan JSON-LD sinkron |
| `SpecsTable.astro` | table-responsive | Label jelas, tidak terpotong di mobile |
| `RelatedContent.astro` | row, card | Link kontekstual sesuai topik |
| `AuthorBio.astro` | card | Penulis nyata, bio pendek |
| `ArticleSidebar.astro` | sticky-top | Sticky hanya lg+, sidebar turun di mobile |
| `WhatsAppCTA.astro` | btn, position utilities | Pesan encode, nomor sumber, no false success |
| `ContactBrief.astro` | form-control | Jika belum ada backend, gunakan pengisian untuk pesan WA |
| `BackToTop.astro` | btn | Tampil setelah scroll, accessible, reduced motion |
| `SEOHead.astro` | - | Title, canonical, OG, twitter, meta, JSON-LD |

**JavaScript policy:** Bootstrap CSS globally; import Bootstrap JS selective untuk offcanvas, dropdown, accordion, modal, carousel. Satu kali initialization; hindari jQuery.

## 6. Blueprint halaman
### Beranda (`/`)
```text
┌──────────────────────────────────────────┐
│ BRAND     PRODUK  CUSTOM  SOLUSI  [CTA]  │
├──────────────────────────────────────────┤
│ H1 + subcopy + CTA      FOTO TOTE BAG    │
│ Primary / Secondary     (real product)   │
├──────────────────────────────────────────┤
│ KATEGORI BAHAN     [Canvas] [Blacu] ...  │
│ SOLUSI             [Corporate] [Seminar]  │
│ KEUNGGULAN FAKTUAL    3 kolom             │
│ GALERI PRODUK      cards/grid              │
│ PORTOFOLIO ASLI    2–3 proyek             │
│ BAHAN & BRANDING   editorial + diagram    │
│ CARA PESAN         4–6 langkah            │
│ WILAYAH LAYANAN    bukti layanan nyata    │
│ FAQ                accordion              │
│ ARTIKEL            3 cards                │
│ CTA BAND + FOOTER                         │
└──────────────────────────────────────────┘
```
Hero mobile menjadi 1 kolom dengan copy di atas media; foto rasio 4:3 atau 5:4; CTA tidak bertumpuk secara sempit. Desktop media seimbang kira-kira 50% area, background tidak ramai.

### Halaman produk/kategori
Breadcrumb → H1 + ringkasan spesifik → kategori tabs/link → product grid → informasi bahan & ukuran → tabel perbandingan → FAQ → CTA. Mobile: filter accordion/offcanvas hanya bila katalog cukup banyak; hindari sidebar permanen.

### Detail produk
Breadcrumb → 2 kolom (gallery + detail) pada desktop → judul, badges atribut (bukan promosi palsu), spesifikasi, pilihan custom, CTA → ilustrasi ukuran → real use case → FAQ → produk terkait. Mobile: gallery di atas; CTA setelah ringkasan; tabel responsif.

### Portofolio
Header editorial → filter tags bila data cukup → visual cards → proyek dapat diklik ke halaman detail (jika tersedia) → CTA. Jangan tampilkan logo konsumen yang tidak mendapat izin.

### Halaman artikel
```text
DESKTOP ≥992px
┌───────────────────────────────┬───────────────┐
│ Breadcrumb                    │ Author bio    │
│ H1                            │ Sticky below  │
│ Author + publish/update       │ Related items │
│ Hero + alt/caption            │               │
│ Jawaban singkat               │               │
│ TOC with H2 anchor links      │               │
│ H2 + text/table/photo         │               │
│ FAQ + sources + CTA           │               │
└───────────────────────────────┴───────────────┘
MOBILE: artikel full-width, sidebar pindah ke bawah.
```
Jangan memisahkan sidebar menjadi fixed viewport overlay. Sticky hanya jika tinggi sidebar wajar; ketika konten lebih tinggi dari viewport, sticky perlu dibatasi/ditiadakan.

### Kontak dan cara pesan
Komunikasi langsung di atas fold. Form opsional hanya jika ada pemrosesan yang benar. Tampilkan daftar data yang perlu disiapkan: jenis bahan, qty, ukuran, warna, logo, deadline, kota kirim, budget. Nomor utama: `6282131087971` sesuai dokumen sumber.

## 7. UI behavior dan microinteraction
- Hover card: translateY maksimal -3px, shadow halus dan perubahan border; tidak menyembunyikan informasi di hover.
- Animasi masuk section maksimal 200–350 ms, hanya jika diperlukan; `prefers-reduced-motion` mematikan animasi.
- Product gallery arrows kiri/kanan, kontrol keyboard, tidak autoplay; foto tidak terpotong sehingga bentuk tas berubah.
- FAQ accordion state tidak menggeser fokus tak terduga.
- Tombol WhatsApp membuka tautan resmi dengan parameter pesan sesuai halaman.
- Back-to-top bekerja setelah klik; hindari floating buttons bertumpuk dengan CTA/cookie bar.
- Sticky CTA mobile opsional: tampil saat CTA utama keluar viewport; implementasi nanti harus diaudit agar tidak menutup konten.

## 8. Bootstrap theme starter (CSS)
```css
:root {
  --brand-primary: #173f38;
  --brand-primary-hover: #0e2e29;
  --brand-accent: #c18755;
  --surface: #fbf9f4;
  --surface-alt: #f1efe8;
  --text-main: #1c2825;
  --text-muted: #626d68;
  --border-soft: #dfe3de;
  --bs-primary: #173f38;
  --bs-body-bg: #fbf9f4;
  --bs-body-color: #1c2825;
  --bs-border-color: #dfe3de;
  --bs-border-radius: 0.625rem;
}
body { background: var(--surface); color: var(--text-main); }
.btn-brand { background: var(--brand-primary); color: #fff; border: 1px solid var(--brand-primary); }
.btn-brand:hover { background: var(--brand-primary-hover); color: #fff; }
.btn-brand:focus-visible, a:focus-visible { outline: 3px solid #1d6ebc; outline-offset: 3px; }
.section-space { padding-block: clamp(3rem, 6vw, 7rem); }
.hero-title { font-size: clamp(2.4rem, 5vw, 4.8rem); line-height: 1.12; letter-spacing: -0.035em; }
.product-card { border: 1px solid var(--border-soft); border-radius: 1rem; overflow: hidden; }
.product-card img { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: contain; }
.article-body { max-width: 74ch; }
.article-body h2, .article-body h3 { scroll-margin-top: 7rem; }
@media (min-width: 992px) { .article-sidebar { position: sticky; top: 6rem; align-self: start; } }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { scroll-behavior: auto !important; transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; } }
```
**Penting:** Override variabel `--bs-primary` saja tidak selalu mengubah seluruh utility CSS Bootstrap yang sudah dikompilasi (misalnya `.btn-primary`). Gunakan `.btn-brand` atau kompilasi Bootstrap Sass dengan `$primary` baru agar konsisten.

## 9. Contoh markup Bootstrap dalam Astro
```astro
---
const { title, href, image, alt } = Astro.props;
---
<div class="col-12 col-sm-6 col-lg-4">
  <article class="card product-card h-100">
    <img src={image} alt={alt} loading="lazy" width="640" height="480" />
    <div class="card-body d-flex flex-column gap-2">
      <h3 class="h5 card-title mb-0">{title}</h3>
      <a class="btn btn-brand mt-auto" href={href}>Lihat Detail</a>
    </div>
  </article>
</div>
```
Dalam implementasi nyata, untuk foto sumber lokal gunakan komponen `<Image />` dari `astro:assets` dan tipe props yang benar; contoh ini menunjukkan pola kelas Bootstrap, bukan komponen final yang siap dipakai tanpa data.

## 10. Media guidelines
- Studio produk: background sederhana netral/warm ivory atau styling konsisten; warna barang dan logo harus sesuai barang asli.
- Ratio hero 5:4 desktop dan 4:3 mobile; kategori 4:3; detail produk 1:1 atau 4:3; portfolio 4:3; artikel 16:9 bila layak.
- Gambar dalam katalog tidak boleh sengaja terpotong pada tas/talinya; `object-fit: contain` untuk produk, `cover` hanya pada lifestyle shot yang aman dicrop.
- File nama deskriptif: `tote-bag-canvas-natural-tampak-depan.webp`. Alt menjelaskan objek, bukan spam kata kunci.
- Prioritas `astro:assets`; sumber ke format WebP/AVIF dengan lebar sesuai device, dimensi eksplisit; cek hasil kompresi visual.
- Logo SVG/PNG asli untuk favicon, OG image 1200×630 piksel setelah brand disetujui; gunakan aset yang benar-benar ada.

## 11. Content design & microcopy
**Tone:** jelas, B2B, tidak bombastis, mudah dipahami.

Contoh copy hero:
- Eyebrow: `CUSTOM MERCHANDISE • MALANG`
- H1: `Tote Bag Custom untuk Perusahaan, Seminar, dan Event`
- Subcopy: `Pilih bahan, ukuran, dan kebutuhan branding tote bag untuk acara maupun perusahaan. Jelajahi pilihan produk dan konsultasikan spesifikasi pesanan Anda.`
- CTA primer: `Konsultasi via WhatsApp`
- CTA sekunder: `Jelajahi Produk`

CTA halaman produk: `Tanyakan Spesifikasi & Penawaran`. CTA portfolio: `Diskusikan Pesanan Serupa`. FAQ menampilkan pertanyaan yang nyata, tidak membuat jawaban harga/MOQ fiktif.

## 12. SEO and trust visual requirements
- Semua H1/H2 dirender sebagai HTML, bukan teks dalam image.
- Portfolio menekankan proof visual; published date, izin klien dan angka asli hanya bila terverifikasi.
- Autor artikel memiliki profil asli; visible publish/update time jika ada.
- Foto contoh tanpa data produk tidak dinyatakan sebagai order yang sudah dikerjakan.
- Footer menampilkan domain, kontak, kota Malang, jalur kebijakan privasi; alamat detail hanya setelah validasi.
- JSON-LD mengikuti teks visual, bukan membuat klaim tambahan yang tidak terlihat.

## 13. Quality assurance UI
- [ ] Menu hamburger dapat dibuka/tutup dengan touch, keyboard, Escape.
- [ ] Semua CTA dan ukuran tombol nyaman di layar 320 px, tidak menutup konten.
- [ ] Tidak ada horizontal scroll dari grid, tabel, gambar, atau tulisan panjang.
- [ ] Warna dan kontras lolos audit AA; focus state terlihat.
- [ ] Layout card proporsional di mobile, tablet, desktop.
- [ ] Animasi menghormati reduced motion.
- [ ] Sidebar artikel tidak overlap footer dan tidak sticky di mobile.
- [ ] Breadcrumb, heading, image alt, canonical, OG dan schema sinkron.
- [ ] Product image tidak kehilangan bentuk tas atau mengubah spesifikasi visual.
- [ ] Link WhatsApp tepat `6282131087971` di seluruh proyek.

## 14. Referensi desain teknis
- Bootstrap components: https://getbootstrap.com/docs/5.3/components/
- Bootstrap breakpoints: https://getbootstrap.com/docs/5.3/layout/breakpoints/
- Astro docs: https://docs.astro.build/
- Dokumen dasar: `Analisis_Entity_SEO_ToteBag(1).md`

**Keputusan belum final sebelum design sign-off:** palet, font, brand/logo, data SKU, foto produk, daftar kota layanan dengan bukti, konten portofolio, dan SOP inquiry.
