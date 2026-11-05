export interface ProductDetailImage {
  url: string;
  caption: string;
  alt: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  material: string;
  dimensions: string;
  tali: string;
  features: string[];
  techniques: string[];
  description: string;
  usage: string[];
  imageUrl: string;
  altText: string;
  price?: string;
  priceScale?: string;
  moq?: string;
  tags?: string[];
  detailImages?: ProductDetailImage[];
  specTable: {
    material: string;
    gramasi?: string;
    ukuranStandard: string;
    pilihanTali: string;
    pilihanPenutup: string;
    opsiCetak: string;
    rekomendasiQty: string;
    estimasiPengerjaan: string;
  };
  highlight: string;
}

export interface Category {
  slug: string;
  title: string;
  shortName: string;
  tagline: string;
  overview: string;
  materialDescription: string;
  primaryKeyword: string;
  benefits: string[];
  recommendedUses: string[];
  imageUrl: string;
}

export interface PortfolioItem {
  slug: string;
  title: string;
  clientType: string;
  city: string;
  qty: string;
  material: string;
  technique: string;
  dimensions: string;
  brief: string;
  solution: string;
  date: string;
  imageUrl: string;
  altText: string;
  keyTakeaway: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  directAnswer: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  authorId: string;
  authorName: string;
  category: string;
  imageUrl: string;
  altText: string;
  tableOfContents: { id: string; title: string }[];
}

export interface AuthorSocials {
  instagram?: string;
  x?: string;
  linkedin?: string;
}

export interface Author {
  id: string;
  slug: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  imageUrl: string;
  socials?: AuthorSocials;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'umum' | 'bahan' | 'pemesanan' | 'desain';
}

export interface CityService {
  slug: string;
  cityName: string;
  province: string;
  badge: string;
  title: string;
  tagline: string;
  overview: string;
  districts: string[];
  leadTimeDelivery: string;
  routeHighlight: string;
  expeditions: {
    name: string;
    type: 'Kargo Darat' | 'Kereta Api' | 'Kargo Udara' | 'Kurir Instan' | 'Travel / Shuttle';
    eta: string;
    description: string;
  }[];
  shippingProcess: {
    step: number;
    title: string;
    desc: string;
  }[];
  packingStandard: string[];
  pickupAvailable: boolean;
  minOrderRecommendation: string;
}

export const businessProfile = {
  name: "Tote Bag Custom B2B",
  domain: "https://totebag.web.id",
  whatsappNumber: "6282131087971",
  whatsappFormatted: "+62 821-3108-7971",
  streetAddress: "Kedungkandang",
  district: "Kedungkandang",
  city: "Malang",
  postalCode: "65136",
  province: "Jawa Timur",
  country: "Indonesia",
  tagline: "Penyedia Tote Bag Custom untuk Perusahaan, Instansi, dan Event",
  subTagline: "Berbasis di Malang dengan Layanan Pemesanan & Pengiriman Antarkota ke Seluruh Indonesia",
  consultationNote: "Konsultasikan kebutuhan bahan, ukuran, dan mock up desain gratis langsung dengan tim produksi.",
};

export const categories: Category[] = [
  {
    slug: 'tote-bag-canvas',
    title: 'Tote Bag Canvas Custom',
    shortName: 'Canvas',
    tagline: 'Material tebal, kokoh, dan bertekstur premium untuk brand image eksklusif.',
    overview: 'Tote bag berbahan canvas twill, baby canvas, dan canvas greige adalah pilihan terfavorit untuk merchandise perusahaan, seminar kit eksklusif, dan produk ritel. Daya tahan tinggi dan mampu memuat barang berat seperti laptop atau buku tebal.',
    materialDescription: 'Canvas memiliki kerapatan tenun tinggi (10 oz - 14 oz), tidak mudah sobek, serta memberikan kesan formal namun casual. Sangat ramah untuk teknik sablon manual, plastisol, bordir komputer, maupun cetak DTF full color.',
    primaryKeyword: 'tote bag canvas custom malang',
    benefits: [
      'Struktur kain tebal & tidak menerawang',
      'Kuat menahan beban hingga 7 - 10 kg',
      'Pilihan warna beragam (natural, hitam, navy, olive, maroon)',
      'Cocok untuk opsi furing & resleting premium'
    ],
    recommendedUses: ['Merchandise Korporat', 'Onboarding Kit Karyawan', 'Seminar Eksekutif', 'Souvenir Komersial'],
    imageUrl: '/media/tote-bag-canvas-twill.webp'
  },
  {
    slug: 'tote-bag-dinir-cordura',
    title: 'Tote Bag Dinir D300, D600 & Cordura',
    shortName: 'Dinir & Cordura',
    tagline: 'Polyester berdaya tahan ekstrem, anti percikan air, tangguh untuk medan aktif & outdoor.',
    overview: 'Material Dinir D300, Dinir D600, serta kain Cordura berlapis coating PVC/PU tahan air adalah solusi tas souvenir yang sangat awet. Paling banyak dipesan oleh sektor pertambangan, kontraktor, industri, dan event keselamatan (safety campaign).',
    materialDescription: 'Serat nilon dan poliester berkerapatan tinggi yang tahan gesekan dan kedap air. Dilengkapi opsi resleting waterproof, saku depan bersekat, dan tali webbing tebal.',
    primaryKeyword: 'tote bag dinir d300 d600 cordura custom',
    benefits: [
      'Tahan air (water repellent) dan anti robek',
      'Kuat menahan beban berat peralatan & perkakas kerja',
      'Pilihan warna solid: hitam, navy, abu tua, army green',
      'Cocok untuk sablon rubber tebal dan bordir komputer'
    ],
    recommendedUses: ['Safety Campaign Site', 'Corporate Gathering', 'Tas Workshop Tambang & Energi', 'Merchandise Komunitas Motor/Outdoor'],
    imageUrl: '/media/tote-bag-cordura.webp'
  },
  {
    slug: 'tote-bag-blacu',
    title: 'Tote Bag Blacu Custom',
    shortName: 'Blacu',
    tagline: 'Karakter serat alami berkesan vintage, ramah lingkungan, dan efisien biaya.',
    overview: 'Kain blacu terbuat dari serat kapas tanpa proses pemutihan kimiawi berlebih, menghasilkan warna broken white/ivory dengan bintik serat katun alami yang autentik. Menjadi opsi paling ideal untuk seminar akademik, workshop, pameran seni, dan kampanye eco-friendly.',
    materialDescription: 'Blacu super grade A memiliki gramasi yang pas: ringan dibawa namun tetap berbobot dan rapi saat dijahit. Opsi sablon 1 sampai 3 warna tampil tajam dan menyatu alami ke dalam pori-pori kain.',
    primaryKeyword: 'tote bag blacu custom souvenir',
    benefits: [
      'Estetika natural & vintage yang sedang tren',
      'Harga sangat terjangkau untuk pemesanan massal ratusan unit',
      'Ringan, mudah dilipat, dan nyaman digunakan sehari-hari',
      'Mudah dicetak dengan sablon rubber/waterbased'
    ],
    recommendedUses: ['Seminar Kampus & Institusi', 'Goodie Bag Workshop', 'Souvenir Pernikahan Natural', 'Kampanye Ramah Lingkungan'],
    imageUrl: '/media/tote-bag-blacu-polos.webp'
  },
  {
    slug: 'tote-bag-spunbond',
    title: 'Tote Bag Spunbond Custom',
    shortName: 'Spunbond',
    tagline: 'Pilihan ekonomis berbobot ringan untuk kebutuhan event massal berskala besar.',
    overview: 'Spunbond (non-woven polypropylene) adalah material sintetis higienis dan ekonomis. Cocok untuk tas seminar kilat, goodie bag pameran dagang (expo), tas promosi toko, dan packaging belanja yang dapat digunakan berulang kali.',
    materialDescription: 'Tersedia dalam ketebalan 75 gsm hingga 100 gsm dengan beragam pilihan warna cerah maupun netral. Dapat dibuat dengan metode ultrasonic press maupun jahit benang untuk daya tahan yang lebih baik.',
    primaryKeyword: 'tote bag spunbond custom murah',
    benefits: [
      'Solusi paling hemat anggaran untuk kuantiti besar',
      'Bobot sangat ringan dan tahan percikan air',
      'Pilihan warna kain paling lengkap dan mencolok',
      'Proses pengerjaan cepat untuk kebutuhan deadline ketat'
    ],
    recommendedUses: ['Expo & Pameran Dagang', 'Goodie Bag Seminar Massal', 'Packaging Retail Belanja', 'Bakti Sosial & Kampanye'],
    imageUrl: '/media/tote-bag-spunbond-color.webp'
  },
  {
    slug: 'tote-bag-mika',
    title: 'Tote Bag Mika Transparan PVC Custom',
    shortName: 'Mika Transparan',
    tagline: 'Tampilan bening estetik dan modern, tahan air 100% untuk merchandise kekinian.',
    overview: 'Tote bag berbahan mika PVC transparan tebal (0.5 - 0.7 mm) memberikan estetika visual yang trendi dan tembus pandang. Sering dipadukan dengan aksen list canvas, tali webbing kontras, atau sablon logo emas untuk suvenir beauty, konser, dan festival seni.',
    materialDescription: 'Material plastik mika fleksibel, jernih kristal, dan tahan bocor. Sangat mudah dibersihkan serta cocok membawa perlengkapan kosmetik, merchandise hampers, atau merchandise event.',
    primaryKeyword: 'tote bag mika transparan pvc custom',
    benefits: [
      '100% kedap air dan mudah dilap',
      'Tampilan modern, stylish, dan estetik kekinian',
      'Isi tas terlihat jelas untuk kontrol keamanan venue konser',
      'Kombinasi sablon foil emas/perak yang menonjol'
    ],
    recommendedUses: ['Goodie Bag Event Konser & Festival', 'Hampers Skincare & Beauty', 'Pouch Merchandise Eksklusif', 'Packaging Ritel Premium'],
    imageUrl: '/media/tote-bag-mika.webp'
  },
  {
    slug: 'tote-bag-denim',
    title: 'Tote Bag Denim Jeans Custom',
    shortName: 'Denim',
    tagline: 'Karakter kasual streetwear berjiwa muda, kokoh dengan serat twill jeans autentik.',
    overview: 'Menghadirkan alternatif tote bag kasual berbahan kain denim (jeans) 10 oz - 12 oz yang kokoh, berbobot, dan santai. Sangat digemari oleh industri apparel, komunitas motor, festival kreatif, dan merchandise gathering perusahaan yang santai namun tetap berkelas.',
    materialDescription: 'Kain denim memberikan tekstur twill biru indigo kasual dengan opsi jahitan benang tembaga kontras, rivet kuningan, dan patch kulit sintetis. Bahan semakin berkarakter seiring waktu pemakaian.',
    primaryKeyword: 'tote bag denim jeans custom malang',
    benefits: [
      'Gaya kasual streetwear yang digemari generasi muda',
      'Kain tebal 10 - 12 oz tidak mudah robek',
      'Jahitan kontras benang tembaga & opsi patch kulit',
      'Menonjolkan keunikan brand di pameran kreatif'
    ],
    recommendedUses: ['Merchandise Brand Apparel & Distro', 'Souvenir Komunitas Kreatif', 'Gathering Perusahaan Kasual', 'Tas Promosi Ritel'],
    imageUrl: '/media/tote-bag-denim.webp'
  },
  {
    slug: 'tote-bag-satin',
    title: 'Tote Bag Satin Full Print Sublimasi',
    shortName: 'Satin Full Print',
    tagline: 'Cetak digital sublimasi full-color tanpa batasan gradasi dengan kilau halus mewah.',
    overview: 'Tote bag berbahan kain satin bridal premium dengan teknologi cetak digital printing sublimasi full-color 360 derajat. Mampu menampilkan ilustrasi foto, lukisan seni rupa, dan desain grafis rumit dengan tingkat ketajaman warna maksimal.',
    materialDescription: 'Kain satin bridal memiliki tekstur halus, licin, dan berkilau mewah. Tinta sublimasi meresap menyatu ke serat poliester sehingga tidak akan luntur atau retak meski dicuci berulang kali.',
    primaryKeyword: 'tote bag satin printing sublimasi full color',
    benefits: [
      'Cetak full-print foto & desain gradasi tanpa batasan warna',
      'Warna cerah, tajam, dan tidak luntur saat dicuci',
      'Permukaan kain halus dengan kilau mewah eksklusif',
      'Cocok untuk souvenir pameran seni & industri kreatif'
    ],
    recommendedUses: ['Souvenir Wisata & Seni Budaya', 'Hampers Fashion & Kosmetik', 'Merchandise Konser Artis', 'Merchandise Pernikahan Mewah'],
    imageUrl: '/media/tote-bag-satin.webp'
  }
];

export const products: Product[] = [
  {
    "id": "DIN-01",
    "slug": "tote-bag-dinir-d300-resleting-standard",
    "name": "Tote Bag Dinir D300 Resleting Standard (30 x 40 cm)",
    "categorySlug": "tote-bag-dinir-cordura",
    "categoryName": "Dinir & Cordura",
    "material": "Dinir D300 Polyester Water-Repellent",
    "dimensions": "30 cm (L) x 40 cm (T)",
    "tali": "Webbing Poliester 3 cm (Panjang 60 cm)",
    "price": "Rp 28.000",
    "priceScale": "Skala 500+ pcs: Rp 22.000",
    "moq": "50 pcs",
    "tags": [
      "tas seminar",
      "tote bag dinir",
      "tas seminar kit",
      "souvenir kantor",
      "dinir d300",
      "tote bag malang",
      "goodie bag event"
    ],
    "features": [
      "Bahan kain Dinir D300 dengan lapisan coating tahan percikan air",
      "Dilengkapi penutup ritsleting logam standard anti-macet",
      "Dimensi 30x40 cm pas untuk dokumen map sertifikat & laptop 14 inci",
      "Jahitan penguat bar-tack X-box pada sambungan tali handle"
    ],
    "techniques": [
      "Sablon Rubber Manual",
      "Digital Heat Press DTF Full Color",
      "Bordir Komputer Presisi"
    ],
    "description": "Tote bag berbahan kain Dinir D300 water-repellent dengan penutup resleting standar yang kokoh. Pilihan paling ideal dan fungsional untuk paket seminar kit kedinasan, diklat kementerian, workshop instansi pemerintah, dan suvenir gathering perusahaan di Malang dan pengiriman seluruh Indonesia.",
    "usage": [
      "Seminar Kit Kedinasan & BUMN",
      "Pelatihan Diklat Instansi",
      "Gathering Perusahaan",
      "Tas Laptop & Dokumen"
    ],
    "imageUrl": "/media/foto-dinir.jpg",
    "altText": "Tote Bag Dinir D300 Resleting Standard 30 x 40 cm untuk seminar kit dan souvenir kantor",
    "highlight": "Tahan percikan air, kuat menampung dokumen tebal, dan dilengkapi ritsleting penutup aman.",
    "detailImages": [
      {
        "url": "/media/foto-macro.jpg",
        "caption": "Detail Serat Dinir D300 Water-Repellent Tahan Percikan Air",
        "alt": "Detail tekstur serat kain dinir d300 dengan lapisan water resistant"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Detail Ritsleting Logam Standard Anti-Macet & Jahitan Bar-tack",
        "alt": "Inspeksi kualitas jahitan penutup resleting dan tali handle tote bag"
      },
      {
        "url": "/media/foto-seminar.jpg",
        "caption": "Contoh Aplikasi Paket Seminar Kit Kantor & Kedinasan",
        "alt": "Aplikasi tote bag dinir d300 untuk paket perlengkapan seminar kit kantor"
      },
      {
        "url": "/media/proses-cetak-dtf-heat-press.webp",
        "caption": "Detail Aplikasi Sablon Rubber & DTF Presisi",
        "alt": "Proses aplikasi sablon dan cetak logo presisi pada tas dinir"
      }
    ],
    "specTable": {
      "material": "Dinir D300 Water-Repellent",
      "gramasi": "300 Denier (Kuat & Ringan)",
      "ukuranStandard": "30 x 40 cm (Flat)",
      "pilihanTali": "Webbing Poliester 3 cm (Panjang 60 cm)",
      "pilihanPenutup": "Resleting Logam Standard / Kancing Magnet",
      "opsiCetak": "Sablon Rubber Presisi, DTF Full Color, Bordir Komputer",
      "rekomendasiQty": "50 - 5.000+ pcs",
      "estimasiPengerjaan": "7 - 12 hari kerja"
    }
  },
  {
    "id": "DIN-02",
    "slug": "tote-bag-dinir-d600-premium-saku",
    "name": "Tote Bag Dinir D600 Premium + Saku Depan (35 x 40 x 8 cm)",
    "categorySlug": "tote-bag-dinir-cordura",
    "categoryName": "Dinir & Cordura",
    "material": "Dinir D600 Extra Thick + Gusset 8 cm",
    "dimensions": "35 cm (L) x 40 cm (T) x 8 cm (Alas)",
    "tali": "Webbing Nilon Herringbone 3.8 cm (Panjang 60 cm)",
    "price": "Rp 35.000",
    "priceScale": "Skala 500+ pcs: Rp 27.500",
    "moq": "50 pcs",
    "tags": [
      "tote bag dinir d600",
      "tas laptop seminar",
      "merchandise bumn",
      "tas diklat instansi",
      "tote bag saku depan"
    ],
    "features": [
      "Bahan Dinir D600 bertekstur kaku, tebal, dan elegan",
      "Saku tempel depan fungsional untuk notebook kecil & pulpen",
      "Alas gusset bervolume muat binder tebal & kotak tumbler",
      "Penutup ritsleting YKK dan jahitan jarum ganda"
    ],
    "techniques": [
      "Sablon Rubber High Density",
      "DTF Full Color",
      "Bordir Komputer"
    ],
    "description": "Tote bag Dinir D600 kelas premium dengan konstruksi kaku dan saku eksterior depan yang memudahkan akses cepat barang pribadi. Sangat diminati instansi perbankan, BUMN, dan korporasi untuk tas seragam kerja atau merchandise rapat kerja nasional.",
    "usage": [
      "Merchandise Korporat BUMN",
      "Tas Pelatihan Eksekutif",
      "Konferensi Kerja Tahunan",
      "Souvenir Gathering Perusahaan"
    ],
    "imageUrl": "/media/foto-dinir.jpg",
    "altText": "Tote Bag Dinir D600 Premium dengan saku depan fungsional dan alas gusset",
    "highlight": "Kain tebal kaku, muat banyak dokumen, dan memiliki saku eksterior akses cepat.",
    "detailImages": [
      {
        "url": "/media/tote-bag-corduroy-maroon-pocket.webp",
        "caption": "Detail Saku Depan Fungsional untuk Akses Cepat Smartphone & Notes",
        "alt": "Detail kompartemen saku depan tote bag dinir d600"
      },
      {
        "url": "/media/foto-macro.jpg",
        "caption": "Detail Tekstur Serat Dinir D600 Rapat & Kokoh",
        "alt": "Makro tekstur tenun dinir d600"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Finishing Jahitan Rantai Double-Needle & Resleting YKK",
        "alt": "Inspeksi kualitas jahitan dan resleting ykk"
      },
      {
        "url": "/media/foto-unboxing.jpg",
        "caption": "Kerapian Kemasan Satuan Siap Distribusi Acara",
        "alt": "Packaging rapi tas tote bag dinir d600"
      }
    ],
    "specTable": {
      "material": "Dinir D600 Heavy Polyester",
      "gramasi": "600 Denier (Kaku & Tebal)",
      "ukuranStandard": "35 x 40 x 8 cm (Semi Gusset)",
      "pilihanTali": "Webbing Nilon Herringbone 3.8 cm",
      "pilihanPenutup": "Resleting YKK / Kancing Magnet Nikel",
      "opsiCetak": "Sablon Rubber, DTF Full Color, Bordir Komputer",
      "rekomendasiQty": "50 - 3.000+ pcs",
      "estimasiPengerjaan": "7 - 14 hari kerja"
    }
  },
  {
    "id": "COR-01",
    "slug": "tote-bag-cordura-tactical-heavy-duty",
    "name": "Tote Bag Cordura 1000D Tactical Heavy Duty (36 x 42 x 10 cm)",
    "categorySlug": "tote-bag-dinir-cordura",
    "categoryName": "Dinir & Cordura",
    "material": "Cordura 1000D Military Grade Nylon",
    "dimensions": "36 cm (L) x 42 cm (T) x 10 cm (Alas)",
    "tali": "Webbing Katun Tebal 4 cm + Bantalan Pundak",
    "price": "Rp 48.000",
    "priceScale": "Skala 500+ pcs: Rp 39.000",
    "moq": "50 pcs",
    "tags": [
      "tote bag cordura",
      "tas cordura tactical",
      "merchandise lapangan",
      "tas outdoor b2b",
      "tote bag tahan air"
    ],
    "features": [
      "Kain Cordura 1000D standar militer tahan gesekan ekstrem",
      "Lapisan furing parasut waterproof di seluruh bagian dalam",
      "Slot kompartemen laptop dengan busa pelindung 5 mm",
      "Webbing tali ekstra kuat dengan bar-tack 4 titik"
    ],
    "techniques": [
      "Bordir Komputer Presisi Tinggi",
      "Patch Karet Velcro (Rubber Patch)",
      "Sablon Plastisol"
    ],
    "description": "Tas tote bag lapangan berkekuatan tinggi dari kain Cordura 1000D asli. Dirancang khusus untuk aktivitas dinas luar, survei lapangan, organisasi hobi petualang, serta corporate merchandise yang mengedepankan durabilitas jangka panjang bertahun-tahun.",
    "usage": [
      "Merchandise Dinas Lapangan",
      "Komunitas Otomotif & Outdoor",
      "Tas Laptop Surveyor",
      "Corporate Gift Eksklusif"
    ],
    "imageUrl": "/media/tote-bag-cordura.webp",
    "altText": "Tote Bag Cordura 1000D Tactical Heavy Duty kuat menahan beban berat",
    "highlight": "Kekuatan tertinggi, tahan abrasi dan percikan air, cocok untuk mobilitas berat.",
    "detailImages": [
      {
        "url": "/media/foto-cordura.jpg",
        "caption": "Detail Material Kain Cordura 1000D Berserat Rapat",
        "alt": "Tekstur permukaan kain cordura nylon tebal"
      },
      {
        "url": "/media/foto-macro.jpg",
        "caption": "Detail Jahitan Penguat Silang X-Box Tahan Tarikan 15 kg",
        "alt": "Jahitan x-box penguat tali cordura"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Kompartemen Dalam dengan Furing Parasut & Saku Rahasia",
        "alt": "Bagian dalam tas tote bag cordura"
      },
      {
        "url": "/media/packing-kargo-tote-bag.webp",
        "caption": "Standar Pengemasan Kargo Ekspedisi ke Seluruh Indonesia",
        "alt": "Proses pengemasan tas kargo ekspedisi"
      }
    ],
    "specTable": {
      "material": "Cordura Nylon 1000D Water-Repellent",
      "gramasi": "1000 Denier (Ekstra Tebal)",
      "ukuranStandard": "36 x 42 x 10 cm (Full Gusset)",
      "pilihanTali": "Webbing Nilon Tebal 4 cm + Padding",
      "pilihanPenutup": "Resleting YKK Besi / Roll-top Clip",
      "opsiCetak": "Bordir Komputer, Patch Velcro, Plastisol Doff",
      "rekomendasiQty": "50 - 2.000+ pcs",
      "estimasiPengerjaan": "10 - 15 hari kerja"
    }
  },
  {
    "id": "COR-02",
    "slug": "tote-bag-cordura-roll-top-multipocket",
    "name": "Tote Bag Cordura Roll-Top Multi-Pocket (35 x 45 x 12 cm)",
    "categorySlug": "tote-bag-dinir-cordura",
    "categoryName": "Dinir & Cordura",
    "material": "Cordura Nylon + Furing Torin Water-Resistant",
    "dimensions": "35 cm (L) x 45 cm (T) x 12 cm (Expandable)",
    "tali": "Dual Function Handle & Sling Strap Webbing 3.8 cm",
    "price": "Rp 55.000",
    "priceScale": "Skala 500+ pcs: Rp 45.000",
    "moq": "50 pcs",
    "tags": [
      "cordura roll top",
      "tas tote bag pria",
      "tas multifungsi",
      "souvenir eksklusif direksi",
      "merchandise outdoor"
    ],
    "features": [
      "Desain penutup gulung (roll-top) dengan buckle asetal kokoh",
      "Volume fleksibel dapat diperbesar saat membawa barang banyak",
      "Dilengkapi tali selempang samping yang bisa dilepas-pasang",
      "Dua saku samping untuk botol tumbler & payung lipat"
    ],
    "techniques": [
      "Bordir Komputer Presisi",
      "Emboss Patch Kulit",
      "Sablon Rubber"
    ],
    "description": "Inovasi tas jinjing modern bertipe roll-top multi-saku berbahan Cordura. Menggabungkan fleksibilitas kapasitas ransel dengan kepraktisan tote bag kerja harian, sangat diminati oleh kalangan muda urban dan staf kantor dinamis.",
    "usage": [
      "Merchandise Gathering Eksklusif",
      "Tas Komuter Pekerja Urban",
      "Souvenir Komunitas Motor/Sepeda",
      "Hadiah VIP Acara"
    ],
    "imageUrl": "/media/foto-cordura.jpg",
    "altText": "Tote Bag Cordura Roll-Top Multi-Pocket kapasitas besar fleksibel",
    "highlight": "Kapasitas fleksibel roll-top, saku samping tumbler, dan fungsi selempang tambahan.",
    "detailImages": [
      {
        "url": "/media/tote-bag-cordura.webp",
        "caption": "Tampilan Desain Roll-Top Fleksibel dengan Buckle Acetal Kuat",
        "alt": "Model roll top buckle tote bag cordura"
      },
      {
        "url": "/media/foto-macro.jpg",
        "caption": "Detail Webbing Tebal & Aksesoris Buckle Import",
        "alt": "Aksesoris buckle dan webbing"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Pemeriksaan Kualitas Kompartemen Laptop Busa 5 mm",
        "alt": "Kompartemen dalam laptop"
      },
      {
        "url": "/media/foto-giftset.jpg",
        "caption": "Paket Merchandise Eksklusif Lengkap",
        "alt": "Giftset cordura lengkap"
      }
    ],
    "specTable": {
      "material": "Cordura 1000D + Torin Furing",
      "gramasi": "1000 Denier",
      "ukuranStandard": "35 x 45 x 12 cm (Bisa Diatur)",
      "pilihanTali": "Handle Jinjing + Tali Selempang 3.8 cm",
      "pilihanPenutup": "Roll-Top + Buckle Acetal + Resleting Dalam",
      "opsiCetak": "Bordir Komputer, Patch Kulit Emboss",
      "rekomendasiQty": "50 - 1.000+ pcs",
      "estimasiPengerjaan": "10 - 15 hari kerja"
    }
  },
  {
    "id": "CAN-01",
    "slug": "tote-bag-canvas-premium-twill",
    "name": "Tote Bag Canvas Twill Off-White Klasik (30 x 40 cm)",
    "categorySlug": "tote-bag-canvas",
    "categoryName": "Canvas",
    "material": "Canvas Twill 12 oz (100% Cotton)",
    "dimensions": "30 cm (L) x 40 cm (T)",
    "tali": "Webbing Katun 3.8 cm (Panjang 60 cm)",
    "price": "Rp 40.000",
    "priceScale": "Skala 500+ pcs: Rp 32.000",
    "moq": "50 pcs",
    "tags": [
      "tote bag canvas",
      "canvas twill",
      "tas kanvas custom",
      "souvenir kantor",
      "merchandise kampus",
      "tas seminar kanvas"
    ],
    "features": [
      "Kain canvas twill 12 oz tenun katun murni berkualitas tinggi",
      "Warna off-white alami yang hangat dan ramah lingkungan",
      "Jahitan ganda penguat bar-tack X-box pada sambungan tali",
      "Mampu menahan beban hingga 10 kg tanpa melar"
    ],
    "techniques": [
      "Sablon Rubber Eco-friendly",
      "DTF Digital Full Color",
      "Bordir Komputer"
    ],
    "description": "Tote bag kanvas katun twill 12 oz bertekstur rapat dan halus. Menjadi standar emas untuk merchandise korporat, seminar bisnis, dan peluncuran produk yang menginginkan kesan natural premium, kokoh, dan awet dicuci bertahun-tahun.",
    "usage": [
      "Merchandise Onboarding Kantor",
      "Seminar Bisnis & Rapat Kerja",
      "Souvenir Pameran B2B",
      "Packaging Butik Retail"
    ],
    "imageUrl": "/media/tote-bag-canvas-twill.webp",
    "altText": "Tote Bag Canvas Twill Premium dengan jahitan rapi dan bahan kokoh",
    "highlight": "Kain kanvas twill 12 oz kokoh, serat halus, ramah lingkungan dan sangat awet.",
    "detailImages": [
      {
        "url": "/media/foto-canvas.jpg",
        "caption": "Detail Tenun Twill Diagonal Canvas 12 oz Alami",
        "alt": "Tekstur serat tenun twill canvas"
      },
      {
        "url": "/media/foto-macro.jpg",
        "caption": "Detail Kerapatan Benang Katun & Tekstur Permukaan",
        "alt": "Serat benang katun canvas halus"
      },
      {
        "url": "/media/proses-cetak-dtf-heat-press.webp",
        "caption": "Aplikasi Cetak Sablon DTF & Rubber Menempel Sempurna",
        "alt": "Sablon dtf pada canvas"
      },
      {
        "url": "/media/foto-seminar.jpg",
        "caption": "Dokumentasi Pengadaan Canvas untuk Seminar Bisnis",
        "alt": "Pameran seminar kit canvas"
      }
    ],
    "specTable": {
      "material": "Canvas Twill 100% Cotton (12 oz)",
      "gramasi": "340 - 360 gsm",
      "ukuranStandard": "30 x 40 cm (Flat)",
      "pilihanTali": "Webbing Katun 3.8 cm / Bahan Senada",
      "pilihanPenutup": "Kancing Magnet Nikel / Resleting YKK / Terbuka",
      "opsiCetak": "Sablon Plastisol, DTF Full Color, Bordir Komputer",
      "rekomendasiQty": "50 - 2.000+ pcs",
      "estimasiPengerjaan": "7 - 14 hari kerja"
    }
  },
  {
    "id": "CAN-02",
    "slug": "tote-bag-canvas-heavy-14oz-boxy",
    "name": "Tote Bag Heavy Canvas 14 oz Boxy Stand-Up (35 x 40 x 10 cm)",
    "categorySlug": "tote-bag-canvas",
    "categoryName": "Canvas",
    "material": "Heavy-Duty Cotton Canvas 14 oz Rigid",
    "dimensions": "35 cm (L) x 40 cm (T) x 10 cm (Alas Boxy)",
    "tali": "Webbing Katun Herringbone 3.8 cm Tebal",
    "price": "Rp 48.000",
    "priceScale": "Skala 500+ pcs: Rp 39.000",
    "moq": "50 pcs",
    "tags": [
      "canvas 14 oz",
      "heavy canvas",
      "tote bag stand up",
      "tas kanvas tebal",
      "souvenir eksklusif"
    ],
    "features": [
      "Ketebalan kanvas 14 oz membuat tas sanggup berdiri sendiri",
      "Alas boxy bervolume muat kotak bekal & laptop tebal",
      "Dilengkapi saku gantung bagian dalam untuk dompet & kunci",
      "Finishing keling logam atau bar-tack di semua titik tumpu"
    ],
    "techniques": [
      "Sablon Discharge",
      "Plastisol Doff",
      "Emboss Patch Kulit",
      "Bordir Komputer"
    ],
    "description": "Varian kanvas ekstra tebal 14 oz berstruktur kaku (rigid). Tas ini sanggup berdiri sendiri di atas meja tanpa roboh saat diisi barang. Sangat populer untuk merchandise brand apparel distro, toko buku indie, dan giftset premium eksekutif.",
    "usage": [
      "Merchandise Brand Distro",
      "Souvenir Direksi & Tamu VIP",
      "Goodie Bag Buku & Publikasi",
      "Tas Belanja Zero-Waste"
    ],
    "imageUrl": "/media/tote-bag-canvas-twill.webp",
    "altText": "Tote Bag Heavy Canvas 14 oz Boxy Stand-Up kokoh berdiri mandiri",
    "highlight": "Kanvas 14 oz tebal mampu berdiri sendiri, alas boxy bervolume muat banyak barang.",
    "detailImages": [
      {
        "url": "/media/foto-canvas.jpg",
        "caption": "Struktur Kain 14 oz Tebal Mampu Berdiri Mandiri",
        "alt": "Canvas 14 oz berdiri tegak"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Konstruksi Jahitan Alas Bawah Boxy & X-Box Handle",
        "alt": "Jahitan alas bawah boxy"
      },
      {
        "url": "/media/foto-macro.jpg",
        "caption": "Detail Tekstur Serat Kasar Berkarakter Otentik",
        "alt": "Serat kanvas 14 oz"
      },
      {
        "url": "/media/foto-giftset.jpg",
        "caption": "Cocok untuk Giftset Eksklusif & Onboarding Kit",
        "alt": "Giftset kanvas boxy"
      }
    ],
    "specTable": {
      "material": "Cotton Canvas Heavy Duty 14 oz",
      "gramasi": "400 - 420 gsm",
      "ukuranStandard": "35 x 40 x 10 cm (Boxy)",
      "pilihanTali": "Webbing Katun Herringbone 3.8 cm",
      "pilihanPenutup": "Kancing Magnet / Resleting Logam Besi",
      "opsiCetak": "Sablon Discharge, Plastisol, Patch Kulit Emboss",
      "rekomendasiQty": "50 - 1.500+ pcs",
      "estimasiPengerjaan": "8 - 14 hari kerja"
    }
  },
  {
    "id": "CAN-03",
    "slug": "tote-bag-canvas-marsoto-laptop",
    "name": "Tote Bag Canvas Marsoto Kompartemen Laptop (38 x 42 x 12 cm)",
    "categorySlug": "tote-bag-canvas",
    "categoryName": "Canvas",
    "material": "Canvas Marsoto Bintik Kapas + Padded Foam 5mm",
    "dimensions": "38 cm (L) x 42 cm (T) x 12 cm (Extra Large)",
    "tali": "Tali Canvas Lapis Jahit 4 cm (Panjang 62 cm)",
    "price": "Rp 58.000",
    "priceScale": "Skala 500+ pcs: Rp 47.500",
    "moq": "50 pcs",
    "tags": [
      "canvas marsoto",
      "tas laptop kanvas",
      "tote bag kerja",
      "merchandise bumn",
      "tas diklat eksekutif"
    ],
    "features": [
      "Bahan kanvas marsoto dengan tekstur anyaman bintik khas alami",
      "Slot khusus laptop 14-15.6 inci dilapisi busa pelindung 5 mm",
      "Penutup ritsleting logam YKK heavy duty menjamin keamanan",
      "Furing katun halus di bagian dalam dilengkapi saku ritsleting"
    ],
    "techniques": [
      "Bordir Komputer Presisi",
      "Sablon Rubber High Density",
      "Patch Kulit Sintetis"
    ],
    "description": "Tas tote bag kerja berkapasitas besar berbahan kain kanvas marsoto. Dilengkapi kompartemen pelindung laptop berbusa empuk dan furing interior rapi, menjadikannya pilihan favorit instansi pemerintah, BUMN, dan startup teknologi.",
    "usage": [
      "Merchandise Karyawan Baru (Onboarding)",
      "Tas Kerja Profesional",
      "Konferensi Internasional",
      "Pelatihan Manajerial"
    ],
    "imageUrl": "/media/tote-bag-canvas-twill.webp",
    "altText": "Tote Bag Canvas Marsoto Kompartemen Laptop aman untuk perangkat elektronik",
    "highlight": "Dilengkapi kompartemen busa laptop 15 inci, resleting YKK, dan furing dalam rapi.",
    "detailImages": [
      {
        "url": "/media/foto-canvas.jpg",
        "caption": "Tekstur Marsoto Bintik Kapas Natural Khas Tenun Garment",
        "alt": "Tekstur kanvas marsoto"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Slot Busa Laptop 14-15.6 Inci Terlindung Aman",
        "alt": "Slot busa laptop"
      },
      {
        "url": "/media/foto-macro.jpg",
        "caption": "Resleting Logam YKK Heavy Duty & Saku Dokumen",
        "alt": "Resleting logam ykk"
      },
      {
        "url": "/media/foto-seminar.jpg",
        "caption": "Pilihan Utama Konferensi Internasional & Diklat BUMN",
        "alt": "Penggunaan seminar bumn"
      }
    ],
    "specTable": {
      "material": "Canvas Marsoto Premium + Busa Foam 5mm",
      "gramasi": "360 - 380 gsm",
      "ukuranStandard": "38 x 42 x 12 cm (Large)",
      "pilihanTali": "Tali Bahan Marsoto Senada / Webbing 4 cm",
      "pilihanPenutup": "Resleting Logam YKK Original",
      "opsiCetak": "Bordir Komputer, Sablon Plastisol, Patch Kulit",
      "rekomendasiQty": "50 - 1.000+ pcs",
      "estimasiPengerjaan": "10 - 15 hari kerja"
    }
  },
  {
    "id": "CAN-04",
    "slug": "tote-bag-canvas-heritage-tenun-batik",
    "name": "Tote Bag Canvas Heritage Aksen Tenun / Batik (32 x 38 x 8 cm)",
    "categorySlug": "tote-bag-canvas",
    "categoryName": "Canvas",
    "material": "Canvas Twill 12 oz + Aksen Kain Tenun / Batik Nusantara",
    "dimensions": "32 cm (L) x 38 cm (T) x 8 cm (Semi Gusset)",
    "tali": "Tali Kulit Sintetis (PU Leather) atau Webbing Katun",
    "price": "Rp 65.000",
    "priceScale": "Skala 500+ pcs: Rp 53.000",
    "moq": "50 pcs",
    "tags": [
      "canvas tenun",
      "tote bag batik",
      "tas souvenir etnik",
      "souvenir kenegaraan",
      "vip corporate gift"
    ],
    "features": [
      "Kombinasi kanvas twill kokoh dengan panel wastra kain tenun/batik asli",
      "Aksen tali kulit sintetis warna tan yang berkelas dan nyaman",
      "Patch label kulit timbul (emboss) logo instansi atau perusahaan",
      "Penutup magnetik tersembunyi dengan furing katun lembut"
    ],
    "techniques": [
      "Emboss Hot Stamp Patch Kulit",
      "Bordir Halus",
      "Sablon Gold Foil"
    ],
    "description": "Karya tote bag kolaborasi seni budaya nusantara. Memadukan kanvas twill 12 oz dengan aksen kain tenun asli atau batik motif nusantara, dilengkapi tali kulit sintetis elegan. Pilihan utama untuk cinderamata diplomatik, tamu kehormatan, dan event berskala nasional.",
    "usage": [
      "Cinderamata Tamu Kehormatan Kenegaraan",
      "Souvenir Pameran Kebudayaan & Pariwisata",
      "Hampers Hari Raya Perusahaan",
      "VIP Speaker Gift"
    ],
    "imageUrl": "/media/tote-bag-canvas-ethnic-tenun.webp",
    "altText": "Tote Bag Canvas Heritage Aksen Tenun Batik dengan tali kulit sintetis",
    "highlight": "Kombinasi wastra tradisional batik/tenun, tali kulit sintetis, dan patch emboss mewah.",
    "detailImages": [
      {
        "url": "/media/tote-bag-navy-batik-flatlay.webp",
        "caption": "Kombinasi Elegan Kain Tradisional Tenun/Batik dengan Canvas",
        "alt": "Flatlay tote bag navy batik tenun"
      },
      {
        "url": "/media/foto-macro.jpg",
        "caption": "Detail Patch Kulit Sintetis Embossed Logo Instansi",
        "alt": "Patch kulit embossed"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Jahitan Presisi Sambungan Wastra Nusantara",
        "alt": "Jahitan sambungan wastra"
      },
      {
        "url": "/media/foto-giftset.jpg",
        "caption": "Souvenir Kenegaraan, VIP Gift & Kunjungan Tamu Asing",
        "alt": "Giftset etnik batik"
      }
    ],
    "specTable": {
      "material": "Canvas Twill 12 oz + Wastra Tenun Asli / Batik",
      "gramasi": "340 gsm (Canvas) + Tenun Tradisional",
      "ukuranStandard": "32 x 38 x 8 cm (Semi Gusset)",
      "pilihanTali": "Tali Kulit Sintetis PU Tebal / Webbing Katun",
      "pilihanPenutup": "Kancing Magnetik Nikel Tersembunyi / Zipper",
      "opsiCetak": "Deboss Patch Kulit, Bordir Komputer",
      "rekomendasiQty": "50 - 1.000+ pcs",
      "estimasiPengerjaan": "10 - 16 hari kerja"
    }
  },
  {
    "id": "CAN-05",
    "slug": "double-wall-weekender-canvas-tote",
    "name": "Double-Wall Weekender Canvas Tote 14+10 oz (45 x 35 x 15 cm)",
    "categorySlug": "tote-bag-canvas",
    "categoryName": "Canvas",
    "material": "Luar Heavy Canvas 14 oz + Furing Dalam 10 oz Katun",
    "dimensions": "45 cm (L) x 35 cm (T) x 15 cm (Extra Large)",
    "tali": "Tali Kulit Sintetis Tebal & Webbing Katun 4 cm",
    "price": "Rp 85.000",
    "priceScale": "Skala 500+ pcs: Rp 69.000",
    "moq": "30 pcs",
    "tags": [
      "canvas duffel",
      "weekender bag",
      "tas kanvas travel",
      "tas kanvas besar",
      "tote bag premium"
    ],
    "features": [
      "Konstruksi dinding ganda (double-wall): luar 14 oz, dalam 10 oz",
      "Kapasitas sangat lapang muat pakaian bepergian 2-3 hari",
      "Dilengkapi slot saku kancing depan, saku botol, dan saku paspor",
      "Keling logam tembaga kuningan pada titik tumpu beban berat"
    ],
    "techniques": [
      "Emboss Patch Kulit Asli/Sintetis",
      "Sablon Discharge Grafis",
      "Bordir Komputer"
    ],
    "description": "Tas jinjing perjalanan akhir pekan (weekender) berspesifikasi ultra-kokoh dengan konstruksi dua lapis kanvas tebal. Kuat menahan beban bawaan pakaian perjalanan, laptop, dokumen tebal, dan perlengkapan harian tanpa melorot.",
    "usage": [
      "Merchandise Wisata & Perjalanan Dinas",
      "Corporate Annual Gathering",
      "Tas Travel Gym & Sport",
      "Hadiah Prestasi Karyawan"
    ],
    "imageUrl": "/media/foto-canvas.jpg",
    "altText": "Double-Wall Weekender Canvas Tote 14+10 oz kapasitas ekstra besar",
    "highlight": "Konstruksi dinding ganda 14+10 oz, muat pakaian 3 hari, keling logam kuningan.",
    "detailImages": [
      {
        "url": "/media/foto-canvas.jpg",
        "caption": "Konstruksi Dinding Ganda Tebal dan Kokoh Maksimal",
        "alt": "Double wall canvas"
      },
      {
        "url": "/media/foto-macro.jpg",
        "caption": "Detail Tali Kulit Sintetis Tebal & Keling Logam Antik",
        "alt": "Tali kulit dan keling logam"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Kompartemen Dalam Lengkap dengan Slot Organizer",
        "alt": "Slot organizer dalam"
      },
      {
        "url": "/media/packing-kargo-tote-bag.webp",
        "caption": "Packing Standar Butik Ekspor & Kargo",
        "alt": "Packing kargo weekender"
      }
    ],
    "specTable": {
      "material": "Luar Heavy Canvas 14 oz + Furing 10 oz",
      "gramasi": "Total >700 gsm (Dua Lapis)",
      "ukuranStandard": "45 x 35 x 15 cm (Extra Large)",
      "pilihanTali": "Kulit Sintetis Tebal + Webbing 4 cm",
      "pilihanPenutup": "Resleting Kuningan YKK Logam Tebal No. 8",
      "opsiCetak": "Patch Kulit Deboss, Bordir Komputer, Sablon Plastisol",
      "rekomendasiQty": "30 - 500+ pcs",
      "estimasiPengerjaan": "10 - 18 hari kerja"
    }
  },
  {
    "id": "CAN-06",
    "slug": "compact-lunch-tumbler-canvas-tote",
    "name": "Compact Lunch & Tumbler Canvas Tote (24 x 26 x 12 cm)",
    "categorySlug": "tote-bag-canvas",
    "categoryName": "Canvas",
    "material": "Canvas Twill 10-12 oz + Slot Karet Tumbler",
    "dimensions": "24 cm (L) x 26 cm (T) x 12 cm (Boxy Stand-up)",
    "tali": "Webbing Katun 3 cm (Panjang 35 cm Jinjing)",
    "price": "Rp 42.000",
    "priceScale": "Skala 500+ pcs: Rp 34.000",
    "moq": "50 pcs",
    "tags": [
      "lunch bag kanvas",
      "tumbler bag",
      "tote bag kecil",
      "tas bekal ramah lingkungan",
      "souvenir kantor wanita"
    ],
    "features": [
      "Bentuk kotak kubus imut pas untuk kotak makan siang & tumbler",
      "Slot elastis khusus di dalam tas agar botol air tidak miring",
      "Kancing penutup magnetik snap nikel praktis membuka-tutup",
      "Mudah dicuci dan ramah lingkungan bebas kantong kresek"
    ],
    "techniques": [
      "Sablon Rubber Eco",
      "DTF Digital Full Color",
      "Bordir Minimalis"
    ],
    "description": "Tas jinjing compact model boxy untuk membawa botol minum tumbler dan kotak bekal harian. Dilengkapi pita elastis penahan botol di sudut dalam agar wadah minuman berdiri tegak dan aman dari risiko tumpah di jalan.",
    "usage": [
      "Kampanye Lingkungan Hidup Kantor (Eco-Office)",
      "Merchandise Ritel & Cafe",
      "Souvenir Launching Produk",
      "Goodie Bag Seminar Sehari"
    ],
    "imageUrl": "/media/tote-bag-canvas-twill.webp",
    "altText": "Compact Lunch & Tumbler Canvas Tote dengan slot elastis penahan botol",
    "highlight": "Dilengkapi slot penahan botol minum agar tidak tumpah, model jinjing boxy yang manis.",
    "detailImages": [
      {
        "url": "/media/foto-canvas.jpg",
        "caption": "Bentuk Kotak Compact Pas untuk Kotak Bekal & Botol Minum",
        "alt": "Model jinjing boxy canvas"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Slot Karet Penahan Tumbler Agar Tidak Tumpah",
        "alt": "Slot karet tumbler"
      },
      {
        "url": "/media/foto-macro.jpg",
        "caption": "Kancing Snap Magnetik Kuat Menutup Rapi",
        "alt": "Kancing snap magnetik"
      },
      {
        "url": "/media/foto-giftset.jpg",
        "caption": "Souvenir Kampanye Hidup Bersih & Zero-Waste Lifestyle",
        "alt": "Souvenir tumbler lunch bag"
      }
    ],
    "specTable": {
      "material": "Canvas Twill 10-12 oz",
      "gramasi": "300 - 340 gsm",
      "ukuranStandard": "24 x 26 x 12 cm (Boxy)",
      "pilihanTali": "Webbing Katun 3 cm (Tali Jinjing Tangan)",
      "pilihanPenutup": "Kancing Magnetik Nikel",
      "opsiCetak": "Sablon Rubber, DTF Full Color, Bordir",
      "rekomendasiQty": "50 - 2.000+ pcs",
      "estimasiPengerjaan": "7 - 12 hari kerja"
    }
  },
  {
    "id": "CAN-00",
    "slug": "tote-bag-canvas-greige-natural",
    "name": "Tote Bag Canvas Greige Natural (30 x 38 cm)",
    "categorySlug": "tote-bag-canvas",
    "categoryName": "Canvas",
    "material": "Canvas Greige Natural 10 oz",
    "dimensions": "30 cm (L) x 38 cm (T)",
    "tali": "Tali Katun Salur 3 cm (Panjang 55 cm)",
    "price": "Rp 38.000",
    "priceScale": "Skala 500+ pcs: Rp 30.000",
    "moq": "50 pcs",
    "tags": [
      "canvas greige",
      "tote bag natural",
      "tas kanvas polos",
      "eco friendly tote bag"
    ],
    "features": [
      "Warna natural broken white",
      "Serat kain padat",
      "Ringan dan awet",
      "Saku gantung dalam opsional"
    ],
    "techniques": [
      "Sablon Rubber 1-4 Warna",
      "Cetak DTF Full Color"
    ],
    "description": "Model flat tote bag klasik dengan warna kain alami tanpa zat pewarna buatan. Memberikan nuansa ramah lingkungan yang modern dan sangat cocok dipadukan dengan desain grafis minimalis bergaya arsitektural maupun tipografi.",
    "usage": [
      "Event Komunitas Kreatif",
      "Merchandise Kampus",
      "Packaging Butik"
    ],
    "imageUrl": "/media/tote-bag-canvas-greige.webp",
    "altText": "Tote Bag Canvas Greige Natural warna broken white alami",
    "highlight": "Kain kanvas greige mentah alami, ramah lingkungan tanpa pewarna kimia.",
    "detailImages": [
      {
        "url": "/media/tote-bag-canvas-greige.webp",
        "caption": "Kain Kanvas Greige Alami Tanpa Proses Pewarna Kimia",
        "alt": "Canvas greige mentah"
      },
      {
        "url": "/media/foto-macro.jpg",
        "caption": "Tekstur Bintik Biji Kapas Alami Terlihat Jelas",
        "alt": "Bintik kapas greige"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Jahitan Rapi dengan Kerapatan Benang Standar Garment",
        "alt": "Jahitan garment"
      },
      {
        "url": "/media/foto-seminar.jpg",
        "caption": "Pilihan Populer Komunitas Seni & Budaya",
        "alt": "Komunitas seni"
      }
    ],
    "specTable": {
      "material": "Canvas Greige Natural 10 oz",
      "gramasi": "280 - 300 gsm",
      "ukuranStandard": "30 x 38 cm (Flat)",
      "pilihanTali": "Webbing Katun Natural 3 cm",
      "pilihanPenutup": "Kancing Magnet / Perekat Velcro / Polos",
      "opsiCetak": "Sablon Waterbased Eco, Sablon Rubber, DTF",
      "rekomendasiQty": "50 - 2.000+ pcs",
      "estimasiPengerjaan": "7 - 12 hari kerja"
    }
  },
  {
    "id": "BLA-01",
    "slug": "tote-bag-blacu-standard-seminar",
    "name": "Tote Bag Blacu Greige Polos Flat Klasik (30 x 40 cm)",
    "categorySlug": "tote-bag-blacu",
    "categoryName": "Blacu",
    "material": "Kain Blacu Super Greige Katun Natural",
    "dimensions": "30 cm (L) x 40 cm (T)",
    "tali": "Bahan Blacu Lapis Jahit (Panjang 55 cm)",
    "price": "Rp 12.000",
    "priceScale": "Skala 500+ pcs: Rp 8.500",
    "moq": "50 pcs",
    "tags": [
      "tote bag blacu",
      "tas seminar murah",
      "tas blacu polos",
      "goodie bag seminar",
      "blacu malang"
    ],
    "features": [
      "Ukuran pas untuk dokumen ordner map folio dan sertifikat A4",
      "Serat katun kapas alami warna greige broken white natural",
      "Jahitan obras dalam rapi dan kuat menahan buku tebal",
      "Pilihan paling hemat anggaran untuk kuantiti di atas 100 pcs"
    ],
    "techniques": [
      "Sablon Manual Rubber (1 - 3 Warna)",
      "DTF Digital Full Color"
    ],
    "description": "Solusi tote bag paling populer untuk seminar nasional, workshop dinas/kampus, dan pelatihan. Dimensi 30x40 cm dirancang tepat untuk memuat ordner map, tumbler minuman, modul materi pelatihan, dan pulpen seminar.",
    "usage": [
      "Seminar Nasional & Workshop",
      "Pelatihan SDM",
      "Event Dinas Pemerintahan",
      "Souvenir Kampus"
    ],
    "imageUrl": "/media/tote-bag-blacu-polos.webp",
    "altText": "Tote Bag Blacu Standard Seminar warna broken white natural",
    "highlight": "Pilihan paling ekonomis untuk kebutuhan seminar di atas 100 pcs.",
    "detailImages": [
      {
        "url": "/media/foto-blacu.jpg",
        "caption": "Serat Katun Alami Greige Bersih Tanpa Pemutih Klorin",
        "alt": "Serat blacu alami"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Jahitan Obras Rapi Mengunci Serat Kain Tidak Rontok",
        "alt": "Jahitan obras rapi"
      },
      {
        "url": "/media/foto-seminar.jpg",
        "caption": "Contoh Tas Seminar Kit Acara Kampus & Dinas",
        "alt": "Seminar kit dinas"
      },
      {
        "url": "/media/proses-cetak-dtf-heat-press.webp",
        "caption": "Aplikasi Sablon Rubber Presisi Warna Tajam",
        "alt": "Sablon rubber blacu"
      }
    ],
    "specTable": {
      "material": "Blacu Super Grade A Cotton Blend",
      "gramasi": "140 - 160 gsm",
      "ukuranStandard": "30 x 40 cm",
      "pilihanTali": "Tali Blacu Lipat Jahit / Webbing Katun Tipis",
      "pilihanPenutup": "Terbuka / Perekat Velcro",
      "opsiCetak": "Sablon Manual Rubber Presisi",
      "rekomendasiQty": "50 - 5.000+ pcs",
      "estimasiPengerjaan": "5 - 10 hari kerja"
    }
  },
  {
    "id": "BLA-02",
    "slug": "tote-bag-blacu-super-broken-white",
    "name": "Tote Bag Blacu Super Broken White Sablon DTF (30 x 40 cm)",
    "categorySlug": "tote-bag-blacu",
    "categoryName": "Blacu",
    "material": "Blacu Super Putih Bersih Bleached Grade A",
    "dimensions": "30 cm (L) x 40 cm (T)",
    "tali": "Tali Webbing Katun Putih Bersih 3 cm",
    "price": "Rp 14.500",
    "priceScale": "Skala 500+ pcs: Rp 10.500",
    "moq": "50 pcs",
    "tags": [
      "blacu dtf",
      "tote bag blacu putih",
      "tas seminar full color",
      "blacu custom logo"
    ],
    "features": [
      "Warna kain putih bersih (bleached) membuat sablon lebih menyala cerah",
      "Mendukung cetak logo bergradasi dan foto digital DTF tajam",
      "Serat kain lebih padat dan tidak berserabut kasar",
      "Tali webbing katun putih yang senada dan nyaman digenggam"
    ],
    "techniques": [
      "Digital Heat Press DTF Full Color",
      "Sablon Rubber Presisi"
    ],
    "description": "Tote bag blacu yang telah melalui proses bleaching sehingga berwarna broken white bersih cerah. Warna dasar yang putih membuat hasil cetak logo full-color dan ilustrasi DTF terlihat sangat hidup, tajam, dan kontras.",
    "usage": [
      "Seminar Internasional",
      "Merchandise Komunitas Kreatif",
      "Souvenir Wisuda Kampus",
      "Peluncuran Produk"
    ],
    "imageUrl": "/media/tote-bag-blacu-sablon.webp",
    "altText": "Tote Bag Blacu Super Broken White Sablon DTF corak warna cerah",
    "highlight": "Kain putih bersih membuat sablon full-color DTF tampil tajam dan menyala.",
    "detailImages": [
      {
        "url": "/media/proses-cetak-dtf-heat-press.webp",
        "caption": "Cetak DTF Full Color Gradasi Halus & Tajam",
        "alt": "Cetak dtf pada blacu putih"
      },
      {
        "url": "/media/foto-blacu.jpg",
        "caption": "Warna Kain Broken White Bersih Elegan",
        "alt": "Warna kain broken white"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Tali Blacu Jahit Ganda Tahan Tarikan",
        "alt": "Tali blacu jahit ganda"
      },
      {
        "url": "/media/foto-unboxing.jpg",
        "caption": "Hasil Cetak Tahan Cuci Berulang Kali",
        "alt": "Cetak tahan cuci"
      }
    ],
    "specTable": {
      "material": "Blacu Super Bleached Grade A",
      "gramasi": "150 - 170 gsm",
      "ukuranStandard": "30 x 40 cm",
      "pilihanTali": "Webbing Katun 3 cm / Tali Blacu Senada",
      "pilihanPenutup": "Kancing Magnet / Velcro / Terbuka",
      "opsiCetak": "DTF Full Color High-Def, Sablon Rubber",
      "rekomendasiQty": "50 - 3.000+ pcs",
      "estimasiPengerjaan": "6 - 12 hari kerja"
    }
  },
  {
    "id": "BLA-03",
    "slug": "tote-bag-blacu-gusset-box",
    "name": "Tote Bag Blacu Lipat Samping / Gusset Box (35 x 40 x 8 cm)",
    "categorySlug": "tote-bag-blacu",
    "categoryName": "Blacu",
    "material": "Blacu Super Grade A + Lebar Alas 8 cm",
    "dimensions": "35 cm (L) x 40 cm (T) x 8 cm (Alas)",
    "tali": "Webbing Katun Natural 3 cm (Panjang 60 cm)",
    "price": "Rp 16.500",
    "priceScale": "Skala 500+ pcs: Rp 12.000",
    "moq": "50 pcs",
    "tags": [
      "blacu gusset",
      "tas seminar boxy",
      "tote bag blacu alas lebar",
      "tas blacu kapasitas besar"
    ],
    "features": [
      "Alas lebar 8 cm memberikan ruang ekstra untuk kotak makan & tumbler",
      "Bentuk tas lebih tegak dan proporsional saat ditaruh",
      "Tali webbing katun tebal tidak membuat pundak pegal",
      "Daya muat beban hingga 7 kg tanpa sobek"
    ],
    "techniques": [
      "Sablon Rubber Manual",
      "DTF Digital Full Color"
    ],
    "description": "Tas blacu dengan penambahan lipatan alas samping dan bawah (gusset) selebar 8 cm. Dirancang khusus bagi panitia yang ingin membagikan paket seminar kit berdimensi tebal seperti tumbler botol minum, snack box, dan ordner modul.",
    "usage": [
      "Workshop Pelatihan Praktis",
      "Seminar Kit Lengkap Tumbler",
      "Bazaar & Pameran UMKM"
    ],
    "imageUrl": "/media/tote-bag-blacu-polos.webp",
    "altText": "Tote Bag Blacu Lipat Samping Gusset Box kapasitas bervolume",
    "highlight": "Alas lebar 8 cm sanggup memuat kotak konsumsi seminar dan tumbler botol minum.",
    "detailImages": [
      {
        "url": "/media/foto-blacu.jpg",
        "caption": "Alas Lebar 8 cm Memuat Kotak Makanan & Tumbler",
        "alt": "Alas lebar 8 cm"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Jahitan Lipatan Siku Box Bawah Presisi",
        "alt": "Jahitan siku lipatan"
      },
      {
        "url": "/media/foto-macro.jpg",
        "caption": "Tali Webbing Katun Natural 3 cm Nyaman di Bahu",
        "alt": "Webbing katun natural"
      },
      {
        "url": "/media/foto-seminar.jpg",
        "caption": "Paket Lengkap Perlengkapan Pelatihan & Workshop",
        "alt": "Paket perlengkapan workshop"
      }
    ],
    "specTable": {
      "material": "Blacu Super Grade A Tebal",
      "gramasi": "150 - 170 gsm",
      "ukuranStandard": "35 x 40 x 8 cm (Gusset)",
      "pilihanTali": "Webbing Katun 3 cm (Panjang 60 cm)",
      "pilihanPenutup": "Kancing Magnet / Velcro / Terbuka",
      "opsiCetak": "Sablon Rubber Presisi, DTF Full Color",
      "rekomendasiQty": "50 - 2.000+ pcs",
      "estimasiPengerjaan": "7 - 12 hari kerja"
    }
  },
  {
    "id": "BLA-04",
    "slug": "tote-bag-blacu-kombinasi-saku",
    "name": "Tote Bag Blacu Kombinasi Saku Depan & Resleting (35 x 40 cm)",
    "categorySlug": "tote-bag-blacu",
    "categoryName": "Blacu",
    "material": "Blacu Super Tebal + Saku Luar + Resleting",
    "dimensions": "35 cm (L) x 40 cm (T)",
    "tali": "Webbing Katun 3 cm (Panjang 60 cm)",
    "price": "Rp 18.500",
    "priceScale": "Skala 500+ pcs: Rp 14.000",
    "moq": "50 pcs",
    "tags": [
      "blacu resleting",
      "tote bag blacu saku",
      "tas seminar resleting",
      "blacu fungsional"
    ],
    "features": [
      "Saku luar depan multifungsi untuk smartphone, nametag & pulpen",
      "Penutup ritsleting atas mencegah barang seminar berhamburan",
      "Desain modern semi-casual cocok digunakan kuliah & kantor",
      "Jahitan sambungan saku rapi tanpa benang bertumpuk"
    ],
    "techniques": [
      "Sablon Manual Saku & Badan",
      "DTF Print Full Color"
    ],
    "description": "Modifikasi fungsional dari tas blacu konvensional. Tambahan saku depan memudahkan peserta event mengambil handphone atau nametag tanpa harus membongkar seluruh isi tas, ditambah ritsleting atas untuk rasa aman maksimal.",
    "usage": [
      "Workshop Praktik Lapangan",
      "Merchandise Komunitas & Fans",
      "Festival Musik & Seni",
      "Tas Kampus Harian"
    ],
    "imageUrl": "/media/tote-bag-blacu-sablon.webp",
    "altText": "Tote Bag Blacu Kombinasi Saku Depan dan Resleting praktis fungsional",
    "highlight": "Fungsional dengan saku eksterior akses cepat dan penutup resleting aman.",
    "detailImages": [
      {
        "url": "/media/tote-bag-corduroy-maroon-pocket.webp",
        "caption": "Saku Luar Depan Praktis untuk Buku Catatan & Ponsel",
        "alt": "Saku depan blacu"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Resleting Atas Menjaga Dokumen Tidak Terjatuh",
        "alt": "Resleting atas blacu"
      },
      {
        "url": "/media/foto-blacu.jpg",
        "caption": "Kombinasi Sablon Logo Badan dan Saku Tas",
        "alt": "Sablon kombinasi saku"
      },
      {
        "url": "/media/foto-giftset.jpg",
        "caption": "Merchandise Komunitas & Gathering Ramah Lingkungan",
        "alt": "Merchandise komunitas"
      }
    ],
    "specTable": {
      "material": "Blacu Super + Pocket Layer + Zipper",
      "gramasi": "160 gsm",
      "ukuranStandard": "35 x 40 cm",
      "pilihanTali": "Webbing Katun Warna Pilihan (Hitam/Natural)",
      "pilihanPenutup": "Resleting Standard Logam / Kancing Magnet",
      "opsiCetak": "Sablon Saku & Badan, DTF Full Color",
      "rekomendasiQty": "50 - 1.500+ pcs",
      "estimasiPengerjaan": "7 - 12 hari kerja"
    }
  },
  {
    "id": "SPN-01",
    "slug": "goodie-bag-spunbond-oval-dcut",
    "name": "Goodie Bag Spunbond Press Oval D-Cut 75 gsm (25 x 35 cm)",
    "categorySlug": "tote-bag-spunbond",
    "categoryName": "Spunbond",
    "material": "Non-Woven Spunbond 75 gsm Ultrasonic Press",
    "dimensions": "25 cm (L) x 35 cm (T)",
    "tali": "Lubang Pegangan Oval (D-Cut Punch Handle)",
    "price": "Rp 4.500",
    "priceScale": "Skala 3.000+ pcs: Rp 2.900",
    "moq": "100 pcs",
    "tags": [
      "spunbond oval",
      "goodie bag murah",
      "tas kresek spunbond",
      "spunbond press",
      "tas promosi ritel"
    ],
    "features": [
      "Diproduksi dengan mesin ultrasonic press otomatis berkecepatan tinggi",
      "Lubang jinjing oval d-cut rapi dan tidak melukai jari tangan",
      "Pilihan paling ekonomis pengganti kantong plastik kresek",
      "Tersedia puluhan opsi warna kain cerah"
    ],
    "techniques": [
      "Sablon Manual 1 Warna",
      "Sablon Rubber"
    ],
    "description": "Goodie bag spunbond 75 gsm model pond oval (D-Cut). Paling banyak dipesan untuk kebutuhan pameran dagang massal, kemasan produk toko oleh-oleh, dan tas pembungkus merchandise acara umum dengan anggaran efisien.",
    "usage": [
      "Packaging Toko & Retail",
      "Pameran Expo Massal",
      "Bakti Sosial & Kampanye",
      "Goodie Bag Event Kilat"
    ],
    "imageUrl": "/media/tote-bag-spunbond-color.webp",
    "altText": "Goodie Bag Spunbond Press Oval D-Cut 75 gsm ekonomis",
    "highlight": "Paling murah dan cepat diproduksi, solusi ideal pengganti kantong kresek sekali pakai.",
    "detailImages": [
      {
        "url": "/media/tote-bag-spunbond-color.webp",
        "caption": "Pilihan Puluhan Warna Cerah Spunbond 75 gsm",
        "alt": "Warna spunbond"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Sambungan Ultrasonic Press Kuat Bebas Jarum Jahit",
        "alt": "Ultrasonic press"
      },
      {
        "url": "/media/foto-spunbond.jpg",
        "caption": "Lubang Pegangan Oval D-Cut Nyaman Dijinjing",
        "alt": "Lubang d-cut"
      },
      {
        "url": "/media/packing-kargo-tote-bag.webp",
        "caption": "Kemasan Bundel Rapi Siap Distribusi Massal",
        "alt": "Distribusi massal"
      }
    ],
    "specTable": {
      "material": "Polypropylene Spunbond Non-Woven 75 gsm",
      "gramasi": "75 gsm",
      "ukuranStandard": "25 x 35 cm (Flat Oval)",
      "pilihanTali": "Lubang Jinjing Oval (D-Cut)",
      "pilihanPenutup": "Terbuka",
      "opsiCetak": "Sablon 1 - 2 Warna Solid",
      "rekomendasiQty": "100 - 10.000+ pcs",
      "estimasiPengerjaan": "3 - 7 hari kerja"
    }
  },
  {
    "id": "SPN-02",
    "slug": "tote-bag-spunbond-press-event",
    "name": "Tote Bag Spunbond Tali Handle Press Klasik 75 gsm (30 x 40 cm)",
    "categorySlug": "tote-bag-spunbond",
    "categoryName": "Spunbond",
    "material": "Non-Woven Spunbond 75 gsm + Tali Handle",
    "dimensions": "30 cm (L) x 40 cm (T)",
    "tali": "Tali Handle Spunbond Lipat Press (Panjang 50 cm)",
    "price": "Rp 5.500",
    "priceScale": "Skala 3.000+ pcs: Rp 3.500",
    "moq": "100 pcs",
    "tags": [
      "spunbond tali",
      "tote bag spunbond 30x40",
      "goodie bag seminar spunbond",
      "spunbond murah malang"
    ],
    "features": [
      "Dilengkapi sepasang tali handle jinjing di pundak atau tangan",
      "Ukuran 30x40 cm muat map sertifikat A4 & konsumsi ringan",
      "Teknologi heat-seal press menghasilkan sambungan kuat tanpa benang",
      "Dapat dilipat kecil dan digunakan berulang kali"
    ],
    "techniques": [
      "Sablon Manual Rubber",
      "Sablon DTF Transfer"
    ],
    "description": "Model tote bag spunbond tali jinjing paling populer di Indonesia. Menjadi pilihan utama panitia seminar kampus, goodie bag pameran properti/otomotif, dan acara syukuran dengan kapasitas muat map A4.",
    "usage": [
      "Seminar Kampus & Sekolah",
      "Pameran Dagang Properti & Otomotif",
      "Souvenir Hajatan & Syukuran",
      "Promosi Produk Baru"
    ],
    "imageUrl": "/media/tote-bag-spunbond-color.webp",
    "altText": "Tote Bag Spunbond Tali Handle Press Klasik 75 gsm praktis",
    "highlight": "Ukuran ideal dokumen A4 dengan tali jinjing yang praktis dan ekonomis.",
    "detailImages": [
      {
        "url": "/media/tote-bag-spunbond-color.webp",
        "caption": "Desain Klasik Tali Handle Spunbond Rapi",
        "alt": "Tali handle spunbond"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Kerapian Sambungan Press Ultrasonic",
        "alt": "Sambungan press"
      },
      {
        "url": "/media/foto-seminar.jpg",
        "caption": "Pemberian Goodie Bag pada Peserta Seminar",
        "alt": "Peserta seminar"
      },
      {
        "url": "/media/proses-cetak-dtf-heat-press.webp",
        "caption": "Sablon Logo Instansi Tajam Menempel Rata",
        "alt": "Sablon spunbond"
      }
    ],
    "specTable": {
      "material": "Spunbond Polypropylene 75 gsm",
      "gramasi": "75 gsm",
      "ukuranStandard": "30 x 40 cm (Flat Tali)",
      "pilihanTali": "Tali Handle Spunbond 2.5 cm (Panjang 50 cm)",
      "pilihanPenutup": "Terbuka / Kancing Snap Plastik",
      "opsiCetak": "Sablon Rubber 1 - 3 Warna",
      "rekomendasiQty": "100 - 10.000+ pcs",
      "estimasiPengerjaan": "4 - 8 hari kerja"
    }
  },
  {
    "id": "SPN-03",
    "slug": "tote-bag-spunbond-box-lipat-samping",
    "name": "Tote Bag Spunbond Box Lipat Samping & Bawah (30 x 40 x 8 cm)",
    "categorySlug": "tote-bag-spunbond",
    "categoryName": "Spunbond",
    "material": "Spunbond 75-80 gsm Box Gusset",
    "dimensions": "30 cm (L) x 40 cm (T) x 8 cm (Alas Box)",
    "tali": "Tali Handle Spunbond Lapis Ganda (Panjang 55 cm)",
    "price": "Rp 6.800",
    "priceScale": "Skala 3.000+ pcs: Rp 4.500",
    "moq": "100 pcs",
    "tags": [
      "spunbond box",
      "goodie bag sembako",
      "tas spunbond bervolume",
      "spunbond lipat samping"
    ],
    "features": [
      "Memiliki lipatan samping dan bawah (gusset) selebar 8 cm",
      "Muat kotak katering, bento box, dan botol minum besar",
      "Tas tidak menggelembung rusak saat diisi barang tebal",
      "Kekuatan beban hingga 5 kg"
    ],
    "techniques": [
      "Sablon Rubber Manual 1-3 Warna",
      "DTF Print"
    ],
    "description": "Tas spunbond berdimensi bervolume (semi gusset). Didesain agar sanggup menampung kotak konsumsi, parcel sembako, dan aneka perlengkapan seminar tanpa merusak kemasan isi di dalamnya.",
    "usage": [
      "Paket Katering & Hantaran",
      "Goodie Bag Sembako CSR BUMN",
      "Seminar Kit Tumbler & Snack",
      "Kemasan Hampers Toko"
    ],
    "imageUrl": "/media/tote-bag-spunbond-color.webp",
    "altText": "Tote Bag Spunbond Box Lipat Samping dan Bawah muat kotak konsumsi",
    "highlight": "Alas lebar 8 cm sanggup memuat kotak konsumsi katering dan bingkisan parcel.",
    "detailImages": [
      {
        "url": "/media/tote-bag-spunbond-color.webp",
        "caption": "Konstruksi Alas Bawah Boxy Muat Kotak Makanan",
        "alt": "Alas bawah boxy"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Jahitan Press Siku Kokoh Tidak Mudah Robek",
        "alt": "Jahitan press siku"
      },
      {
        "url": "/media/foto-spunbond.jpg",
        "caption": "Kapasitas Volume Lapang Menampung Perlengkapan Acara",
        "alt": "Kapasitas volume"
      },
      {
        "url": "/media/packing-kargo-tote-bag.webp",
        "caption": "Standar Pengepakan Karung Ekspedisi Terlindungi",
        "alt": "Pengepakan karung"
      }
    ],
    "specTable": {
      "material": "Spunbond Non-Woven 75 - 80 gsm",
      "gramasi": "75 - 80 gsm",
      "ukuranStandard": "30 x 40 x 8 cm (Box Gusset)",
      "pilihanTali": "Tali Spunbond 3 cm (Panjang 55 cm)",
      "pilihanPenutup": "Terbuka / Perekat Velcro",
      "opsiCetak": "Sablon Rubber Manual",
      "rekomendasiQty": "100 - 5.000+ pcs",
      "estimasiPengerjaan": "5 - 9 hari kerja"
    }
  },
  {
    "id": "SPN-04",
    "slug": "tote-bag-spunbond-jahit-box-100gsm",
    "name": "Tote Bag Spunbond Jahit Jarum Extra Kuat 100 gsm (35 x 42 x 10 cm)",
    "categorySlug": "tote-bag-spunbond",
    "categoryName": "Spunbond",
    "material": "Heavy Spunbond 100 gsm Jahitan Mesin Jarum Benang Nilon",
    "dimensions": "35 cm (L) x 42 cm (T) x 10 cm (Large Boxy)",
    "tali": "Tali Webbing Nilon 3 cm Jahit Bar-tack",
    "price": "Rp 8.500",
    "priceScale": "Skala 3.000+ pcs: Rp 5.800",
    "moq": "100 pcs",
    "tags": [
      "spunbond 100gsm",
      "spunbond jahit",
      "tas spunbond tebal",
      "goodie bag heavy duty"
    ],
    "features": [
      "Menggunakan kain spunbond gramasi tebal 100 gsm (tidak menerawang)",
      "Dijahit manual menggunakan mesin jahit benang nilon, bukan sekadar press lem",
      "Mampu menahan beban hingga 10 kg dengan aman",
      "Tali jahit tembus sampai ke bawah badan tas"
    ],
    "techniques": [
      "Sablon Rubber Presisi",
      "Bordir Nama/Logo Singkat",
      "DTF Digital"
    ],
    "description": "Kategori tertinggi tas spunbond yang dijahit manual dengan benang nilon, bukan mesin press panas. Menggunakan bahan ekstra tebal 100 gsm yang kaku dan kokoh, sanggup menahan beban belanjaan beras, minyak goreng, dan buku berat.",
    "usage": [
      "Paket Sembako Baksos BUMN",
      "Tas Belanja Minimarket & Supermarket",
      "Merchandise Pameran Alat Berat",
      "Souvenir Muktamar & Kongres"
    ],
    "imageUrl": "/media/foto-spunbond.jpg",
    "altText": "Tote Bag Spunbond Jahit Jarum Extra Kuat 100 gsm tahan beban berat",
    "highlight": "Dijahit jarum benang nilon pada kain tebal 100 gsm, sanggup menahan beban hingga 10 kg.",
    "detailImages": [
      {
        "url": "/media/foto-spunbond.jpg",
        "caption": "Detail Jahitan Jarum Benang Nilon Kuat & Tebal",
        "alt": "Jahitan benang nilon"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Kain 100 gsm Kaku & Tidak Menerawang",
        "alt": "Kain 100 gsm"
      },
      {
        "url": "/media/foto-macro.jpg",
        "caption": "Sambungan Tali Jahit Tembus ke Bawah Badan Tas",
        "alt": "Tali jahit tembus"
      },
      {
        "url": "/media/foto-unboxing.jpg",
        "caption": "Kerapian Hasil Akhir Siap Distribusi",
        "alt": "Hasil akhir jahit"
      }
    ],
    "specTable": {
      "material": "Heavy Duty Non-Woven Spunbond 100 gsm",
      "gramasi": "100 gsm (Paling Tebal)",
      "ukuranStandard": "35 x 42 x 10 cm (Jahit Boxy)",
      "pilihanTali": "Webbing Spunbond Jahit Silang (Panjang 60 cm)",
      "pilihanPenutup": "Perekat Velcro / Resleting / Terbuka",
      "opsiCetak": "Sablon Rubber Tahan Gesek",
      "rekomendasiQty": "100 - 5.000+ pcs",
      "estimasiPengerjaan": "7 - 12 hari kerja"
    }
  },
  {
    "id": "MIK-01",
    "slug": "tote-bag-mika-transparan-aesthetic",
    "name": "Tote Bag Mika Transparan Bening Flat 0.5 mm (30 x 40 cm)",
    "categorySlug": "tote-bag-mika",
    "categoryName": "Mika Transparan PVC",
    "material": "PVC Mika Transparan Bening 0.50 mm (Super Clear)",
    "dimensions": "30 cm (L) x 40 cm (T)",
    "tali": "Webbing Katun 3 cm Warna Natural / Hitam",
    "price": "Rp 18.000",
    "priceScale": "Skala 500+ pcs: Rp 14.000",
    "moq": "50 pcs",
    "tags": [
      "tote bag mika",
      "tas mika transparan",
      "tas pvc bening",
      "tas konser stadion",
      "merchandise skincare"
    ],
    "features": [
      "Ketebalan mika 0.50 mm (kaku, tegak, dan tidak mudah lecek/pecah)",
      "100% tahan air (waterproof) dan sangat mudah dibersihkan dilap kain",
      "Standar kepatuhan tas transparan untuk konser musik & stadion",
      "Kombinasi tali katun webbing memberikan kontras visual estetik"
    ],
    "techniques": [
      "Sablon Khusus Plastik PVC Anti-Gores",
      "UV Digital Flatbed Printing",
      "Foil Emas/Perak"
    ],
    "description": "Tas tote bag mika bening transparan berketebalan 0.50 mm yang estetik dan modern. Sangat diminati oleh industri kecantikan, brand kosmetik, merchandise festival musik, dan acara pameran yang membutuhkan visual isi tas terlihat jelas.",
    "usage": [
      "Festival Musik & Konser Stadion",
      "Merchandise Brand Skincare & Kosmetik",
      "Hampers Transparan Ritel",
      "Tas Pantai & Liburan"
    ],
    "imageUrl": "/media/tote-bag-mika.webp",
    "altText": "Tote Bag Mika Transparan Bening Flat 0.5 mm estetik modern",
    "highlight": "Mika super clear 0.5 mm kaku, tahan air 100%, estetik untuk kosmetik dan konser.",
    "detailImages": [
      {
        "url": "/media/tote-bag-mika.webp",
        "caption": "Kejernihan Kaca Film PVC Super Clear 0.50 mm",
        "alt": "Kejernihan film mika"
      },
      {
        "url": "/media/foto-macro.jpg",
        "caption": "Detail Sambungan Jahitan Tali Lis Webbing Katun",
        "alt": "Sambungan lis webbing"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Pemeriksaan Bebas Goresan & Lipatan Rapi",
        "alt": "Pemeriksaan bebas gores"
      },
      {
        "url": "/media/foto-unboxing.jpg",
        "caption": "Packaging Khusus Kertas Pelindung Antar Lapis",
        "alt": "Pelindung mika"
      }
    ],
    "specTable": {
      "material": "PVC Mika Bening Transparan Super Clear",
      "gramasi": "Tebal 0.50 mm (Kaku & Kokoh)",
      "ukuranStandard": "30 x 40 cm (Flat)",
      "pilihanTali": "Webbing Katun 3 cm / Tali Nilon Halus",
      "pilihanPenutup": "Kancing Snap Logam / Resleting Bening",
      "opsiCetak": "Sablon Khusus PVC, Foil Logam, UV Print",
      "rekomendasiQty": "50 - 2.000+ pcs",
      "estimasiPengerjaan": "7 - 12 hari kerja"
    }
  },
  {
    "id": "MIK-02",
    "slug": "tote-bag-mika-box-webbing",
    "name": "Tote Bag Mika Box Gusset Tali Katun Webbing (30 x 35 x 10 cm)",
    "categorySlug": "tote-bag-mika",
    "categoryName": "Mika Transparan PVC",
    "material": "PVC Mika Bening 0.5 mm + Alas Box 10 cm + Tali Webbing Katun",
    "dimensions": "30 cm (L) x 35 cm (T) x 10 cm (Boxy Stand-up)",
    "tali": "Webbing Katun 3.8 cm Menjalar Sampai Bawah Badan",
    "price": "Rp 24.000",
    "priceScale": "Skala 500+ pcs: Rp 18.500",
    "moq": "50 pcs",
    "tags": [
      "mika boxy",
      "tas mika hampers",
      "tas mika gusset",
      "packaging hampers transparan"
    ],
    "features": [
      "Alas bervolume 10 cm membuat tas dapat berdiri tegak sempurna",
      "Tali webbing katun menjalar melingkari badan tas menahan beban 8 kg",
      "Kancing penutup magnetik logam nikel anti karat",
      "Ideal untuk display kemasan hampers produk kecantikan & toples kue"
    ],
    "techniques": [
      "Sablon Khusus Plastik",
      "UV Print Full Color"
    ],
    "description": "Tote bag mika berbentuk kotak stand-up dengan lebar alas 10 cm. Tali webbing katun menjalar ke bawah memberikan kekuatan tumpuan optimal sekaligus aksen garis desain yang modern untuk hampers bingkisan premium.",
    "usage": [
      "Hampers Skincare & Perawatan Tubuh",
      "Bingkisan Hari Raya Perusahaan",
      "Tas Ritel Butik Kosmetik",
      "Goodie Bag VIP Event"
    ],
    "imageUrl": "/media/foto-mika.jpg",
    "altText": "Tote Bag Mika Box Gusset Tali Katun Webbing kokoh berdiri",
    "highlight": "Bentuk boxy berdiri mandiri, tali melingkar bawah menahan beban botol & toples.",
    "detailImages": [
      {
        "url": "/media/foto-mika.jpg",
        "caption": "Struktur Boxy Berdiri Tegak Sempurna untuk Display Hampers",
        "alt": "Struktur boxy mika"
      },
      {
        "url": "/media/foto-macro.jpg",
        "caption": "Tali Webbing Menjalar ke Bawah Menahan Beban Berat",
        "alt": "Tali webbing menjalar"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Kancing Snap Logam Nikel Menutup Presisi",
        "alt": "Kancing snap nikel"
      },
      {
        "url": "/media/foto-giftset.jpg",
        "caption": "Display Paket Hampers Cantik Siap Dibagikan",
        "alt": "Paket hampers mika"
      }
    ],
    "specTable": {
      "material": "PVC Mika Transparan Tebal 0.50 mm",
      "gramasi": "Tebal 0.50 mm (Rigid)",
      "ukuranStandard": "30 x 35 x 10 cm (Boxy)",
      "pilihanTali": "Webbing Katun 3.8 cm (Meligkari Badan)",
      "pilihanPenutup": "Kancing Magnetik Nikel / Ritsleting Logam",
      "opsiCetak": "Sablon Warna Solid, UV Flatbed Print",
      "rekomendasiQty": "50 - 1.500+ pcs",
      "estimasiPengerjaan": "8 - 14 hari kerja"
    }
  },
  {
    "id": "MIK-03",
    "slug": "tote-bag-mika-kombinasi-canvas",
    "name": "Tote Bag Mika Kombinasi Canvas 2-Tone (32 x 38 x 10 cm)",
    "categorySlug": "tote-bag-mika",
    "categoryName": "Mika Transparan PVC",
    "material": "Bodi PVC Transparan + Alas & Lis Bibir Canvas Twill Off-White",
    "dimensions": "32 cm (L) x 38 cm (T) x 10 cm (Hybrid 2-Tone)",
    "tali": "Tali Canvas Twill Lapis Jahit (Panjang 60 cm)",
    "price": "Rp 28.000",
    "priceScale": "Skala 500+ pcs: Rp 22.000",
    "moq": "50 pcs",
    "tags": [
      "mika canvas",
      "hybrid tote bag",
      "tas mika kombinasi",
      "tas transparan kanvas",
      "merchandise distro"
    ],
    "features": [
      "Perpaduan modern antara transparansi mika PVC dengan kehangatan kanvas",
      "Alas bawah berbahan kanvas melindungi barang pribadi agar tidak langsung terbentur",
      "Lis jahitan kanvas di bibir tas membuat bukaan tas lembut tidak kaku",
      "Tersedia saku kecil di dalam tas untuk menyimpan dompet/ponsel tertutup"
    ],
    "techniques": [
      "Sablon pada Panel Canvas",
      "Sablon pada Badan Mika PVC",
      "Bordir pada Panel Canvas"
    ],
    "description": "Koleksi tote bag kombinasi hybrid yang sangat diminati brand apparel dan pameran seni. Memadukan bodi mika transparan dengan alas bawah dan lis bukaan tas berbahan kain kanvas twill off-white, menghasilkan kontras estetika yang sangat fotogenik.",
    "usage": [
      "Merchandise Pameran Seni & Galeri",
      "Produk Kolaborasi Brand Apparel",
      "Tas Belanja Butik Terkemuka",
      "Souvenir Acara Eksklusif"
    ],
    "imageUrl": "/media/tote-bag-mika.webp",
    "altText": "Tote Bag Mika Kombinasi Canvas 2-Tone estetika hybrid fotogenik",
    "highlight": "Kombinasi unik bodi mika transparan dengan alas kanvas twill, sangat fotogenik.",
    "detailImages": [
      {
        "url": "/media/tote-bag-mika.webp",
        "caption": "Kombinasi Estetik Panel Kanvas Twill dengan Mika Bening",
        "alt": "Kombinasi mika kanvas"
      },
      {
        "url": "/media/foto-macro.jpg",
        "caption": "Jahitan Sambungan Lis Kanvas Kuat & Rapi",
        "alt": "Jahitan lis kanvas"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Alas Bawah Kanvas Melindungi Dasar Tas dari Gesekan",
        "alt": "Alas bawah kanvas"
      },
      {
        "url": "/media/foto-giftset.jpg",
        "caption": "Merchandise Unik yang Menonjolkan Logo Instansi",
        "alt": "Merchandise unik mika"
      }
    ],
    "specTable": {
      "material": "PVC Mika 0.5 mm + Canvas Twill 12 oz",
      "gramasi": "Hybrid PVC & Cotton Canvas",
      "ukuranStandard": "32 x 38 x 10 cm (2-Tone)",
      "pilihanTali": "Bahan Canvas Twill Senada 3.5 cm",
      "pilihanPenutup": "Kancing Snap Nikel / Resleting YKK",
      "opsiCetak": "Sablon Badan Mika atau Bordir Panel Kanvas",
      "rekomendasiQty": "50 - 1.000+ pcs",
      "estimasiPengerjaan": "8 - 14 hari kerja"
    }
  },
  {
    "id": "MIK-04",
    "slug": "holographic-iridescent-pvc-tote",
    "name": "Holographic Iridescent PVC Shopping Tote (35 x 40 x 8 cm)",
    "categorySlug": "tote-bag-mika",
    "categoryName": "Mika Transparan PVC",
    "material": "PVC Mika Pelangi Hologram Efek Kilau Warna 0.5 mm",
    "dimensions": "35 cm (L) x 40 cm (T) x 8 cm (Semi Gusset)",
    "tali": "Tali Webbing Poliester Metalik / Bening Halus",
    "price": "Rp 33.000",
    "priceScale": "Skala 500+ pcs: Rp 26.500",
    "moq": "50 pcs",
    "tags": [
      "mika hologram",
      "tas mika pelangi",
      "holographic tote bag",
      "tas merchandise festival",
      "tas kekinian"
    ],
    "features": [
      "Permukaan membiaskan spektrum warna pelangi saat terkena cahaya",
      "Efek kilau futuristik yang mencuri perhatian di media sosial",
      "Kain PVC tebal tidak mudah terlipat kusut",
      "Menampilkan logo brand dengan pantulan gradasi mewah"
    ],
    "techniques": [
      "Sablon Tinta Putih/Hitam Pekat",
      "Sablon Foil Emas",
      "UV Print Minimalis"
    ],
    "description": "Tas tote bag berbahan mika hologram pelangi (iridescent PVC) yang membiaskan aneka warna saat terpapar sinar lampu atau matahari. Menjadi primadona untuk peluncuran brand make-up, merchandise konser festival, dan packaging butik fashion anak muda.",
    "usage": [
      "Launching Brand Kosmetik & Skincare",
      "Konser Musik & Festival Seni",
      "Packaging Ritel Butik High-Fashion",
      "Tas Hadiah Influencer"
    ],
    "imageUrl": "/media/foto-mika.jpg",
    "altText": "Holographic Iridescent PVC Shopping Tote kilau pelangi futuristik",
    "highlight": "Efek kilau warna pelangi hologram yang memukau dan sangat viral di media sosial.",
    "detailImages": [
      {
        "url": "/media/foto-mika.jpg",
        "caption": "Kilauan Pantulan Spektrum Warna Pelangi Hologram",
        "alt": "Kilauan hologram"
      },
      {
        "url": "/media/foto-macro.jpg",
        "caption": "Sablon Tinta Putih Pekat Terlihat Kontras Elegan",
        "alt": "Sablon tinta putih"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Finishing Jahitan Rapi Bebas Sisa Plastik",
        "alt": "Finishing jahitan"
      },
      {
        "url": "/media/foto-unboxing.jpg",
        "caption": "Pilihan Favorit untuk Event Kecantikan & Fashion",
        "alt": "Event kecantikan"
      }
    ],
    "specTable": {
      "material": "Iridescent Hologram PVC 0.50 mm",
      "gramasi": "Tebal 0.50 mm (Holographic)",
      "ukuranStandard": "35 x 40 x 8 cm (Semi Gusset)",
      "pilihanTali": "Webbing Senada / Tali Bening Transparan",
      "pilihanPenutup": "Kancing Snap Logam Nikel",
      "opsiCetak": "Sablon Sablon Tinta Solid (Hitam/Putih/Gold)",
      "rekomendasiQty": "50 - 1.000+ pcs",
      "estimasiPengerjaan": "8 - 14 hari kerja"
    }
  },
  {
    "id": "DEN-01",
    "slug": "tote-bag-denim-raw-indigo",
    "name": "Tote Bag Denim Raw Indigo 12 oz Flat (35 x 40 cm)",
    "categorySlug": "tote-bag-denim",
    "categoryName": "Denim",
    "material": "Denim Twill Cotton 12 oz Raw Indigo",
    "dimensions": "35 cm (L) x 40 cm (T)",
    "tali": "Bahan Denim Lapis Jahit Ganda (Panjang 60 cm)",
    "price": "Rp 35.000",
    "priceScale": "Skala 500+ pcs: Rp 28.000",
    "moq": "50 pcs",
    "tags": [
      "tote bag denim",
      "tas denim raw indigo",
      "denim custom",
      "merchandise distro",
      "tas kasual jeans"
    ],
    "features": [
      "Kain denim twill katun 12 oz raw indigo autentik",
      "Jahitan kontras warna benang tembaga klasik khas celana jeans",
      "Tali bahan denim lapis ganda 3.8 cm kuat menahan beban 8 kg",
      "Karakter kain semakin bernilai dan berkarakter seiring waktu pakai"
    ],
    "techniques": [
      "Sablon Discharge (Cabut Warna)",
      "Sablon Plastisol Doff",
      "Emboss Patch Kulit"
    ],
    "description": "Tote bag denim kasual berkualitas tinggi menggunakan kain jeans indigo 12 oz. Dilengkapi aksen jahitan kontras warna tembaga klasik dan rivet logam penguat pada pangkal tali untuk daya tahan maksimal dan nuansa streetwear otentik.",
    "usage": [
      "Merchandise Brand Distro & Fashion",
      "Gathering Perusahaan Kasual",
      "Komunitas Motor & Hobi",
      "Tas Kuliah Trendi"
    ],
    "imageUrl": "/media/tote-bag-denim.webp",
    "altText": "Tote Bag Denim Raw Indigo 12 oz Flat dengan jahitan kontras tembaga",
    "highlight": "Karakter kasual streetwear yang kuat, tebal, dan semakin bernilai seiring waktu.",
    "detailImages": [
      {
        "url": "/media/foto-denim.jpg",
        "caption": "Kain Denim Jeans 12 oz Raw Indigo Autentik",
        "alt": "Denim raw indigo"
      },
      {
        "url": "/media/foto-macro.jpg",
        "caption": "Jahitan Kontras Benang Tembaga Khas Denim Garment",
        "alt": "Jahitan benang tembaga"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Kerapian Obras Dalam & Sambungan Tali Kuat",
        "alt": "Obras dalam rapi"
      },
      {
        "url": "/media/foto-seminar.jpg",
        "caption": "Aplikasi Merchandise Acara Kreatif & Komunitas",
        "alt": "Acara komunitas"
      }
    ],
    "specTable": {
      "material": "Denim Twill Cotton (12 oz)",
      "gramasi": "360 - 380 gsm",
      "ukuranStandard": "35 x 40 cm (Flat)",
      "pilihanTali": "Bahan Denim 3.8 cm / Webbing Katun",
      "pilihanPenutup": "Resleting YKK Logam / Kancing Magnet / Terbuka",
      "opsiCetak": "Sablon Discharge, Plastisol, Patch Kulit Emboss",
      "rekomendasiQty": "50 - 1.000+ pcs",
      "estimasiPengerjaan": "7 - 14 hari kerja"
    }
  },
  {
    "id": "DEN-02",
    "slug": "tote-bag-denim-saku-jeans-gusset",
    "name": "Tote Bag Denim Saku Depan Jeans + Gusset (36 x 40 x 8 cm)",
    "categorySlug": "tote-bag-denim",
    "categoryName": "Denim",
    "material": "Denim Jeans 12 oz + Gusset 8 cm + Saku Depan",
    "dimensions": "36 cm (L) x 40 cm (T) x 8 cm (Semi Gusset)",
    "tali": "Tali Denim Lapis Jahit (Panjang 60 cm)",
    "price": "Rp 42.000",
    "priceScale": "Skala 500+ pcs: Rp 34.000",
    "moq": "50 pcs",
    "tags": [
      "denim saku",
      "tas jeans saku depan",
      "tote bag denim gusset",
      "merchandise denim"
    ],
    "features": [
      "Saku tempel luar depan fungsional khas saku belakang celana jeans",
      "Penguat rivet kuningan anti-karat di pangkal tali",
      "Alas bervolume muat kotak bekal & tumbler botol",
      "Bisa kancing magnet snap nikel atau resleting YKK"
    ],
    "techniques": [
      "Sablon Discharge",
      "Plastisol Doff",
      "Bordir Komputer"
    ],
    "description": "Tote bag denim dengan saku luar fungsional bergaya celana jeans dan alas gusset 8 cm. Dilengkapi keling rivet logam kuningan antik yang membuat tas tahan banting membawa perlengkapan kuliah maupun kerja harian.",
    "usage": [
      "Merchandise Gathering Pegawai",
      "Souvenir Brand Apparel",
      "Tas Kerja Semi-Formal",
      "Hadiah Komunitas Hobi"
    ],
    "imageUrl": "/media/foto-denim.jpg",
    "altText": "Tote Bag Denim Saku Depan Jeans dan Gusset dengan rivet kuningan",
    "highlight": "Saku jeans fungsional, aksen rivet kuningan logam, dan alas bervolume.",
    "detailImages": [
      {
        "url": "/media/foto-denim.jpg",
        "caption": "Saku Luar Depan Bergaya Kantong Celana Jeans Autentik",
        "alt": "Saku jeans luar"
      },
      {
        "url": "/media/foto-macro.jpg",
        "caption": "Rivet Logam Kuningan Penguat Sambungan Tali",
        "alt": "Rivet logam kuningan"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Alas Bawah Gusset 8 cm Menambah Ruang Muat",
        "alt": "Gusset alas bawah"
      },
      {
        "url": "/media/foto-giftset.jpg",
        "caption": "Tampilan Keren untuk Paket Merchandise Acara Kasual",
        "alt": "Merchandise kasual"
      }
    ],
    "specTable": {
      "material": "Denim Twill Cotton 12 oz",
      "gramasi": "360 - 380 gsm",
      "ukuranStandard": "36 x 40 x 8 cm (Gusset)",
      "pilihanTali": "Bahan Denim Lapis Ganda 3.8 cm",
      "pilihanPenutup": "Kancing Magnet Nikel / Resleting YKK",
      "opsiCetak": "Sablon Discharge, Plastisol, Bordir",
      "rekomendasiQty": "50 - 1.000+ pcs",
      "estimasiPengerjaan": "8 - 14 hari kerja"
    }
  },
  {
    "id": "DEN-03",
    "slug": "tote-bag-black-washed-denim-patch",
    "name": "Tote Bag Black Washed Denim + Patch Kulit (38 x 42 x 10 cm)",
    "categorySlug": "tote-bag-denim",
    "categoryName": "Denim",
    "material": "Black Sulfur Denim 12 oz Stone-Washed + Patch Kulit",
    "dimensions": "38 cm (L) x 42 cm (T) x 10 cm (Large Capacity)",
    "tali": "Webbing Katun Hitam Tebal 4 cm + Resleting Logam",
    "price": "Rp 48.000",
    "priceScale": "Skala 500+ pcs: Rp 39.500",
    "moq": "50 pcs",
    "tags": [
      "black denim tote",
      "denim washed",
      "tas jeans hitam",
      "tote bag patch kulit"
    ],
    "features": [
      "Proses stone-wash menghasilkan tekstur abu-hitam vintage alami",
      "Aksen patch kulit sintetis embossed logo instansi / brand",
      "Penutup ritsleting logam YKK heavy-duty",
      "Dilengkapi furing katun halus dan saku resleting bagian dalam"
    ],
    "techniques": [
      "Emboss Hot Stamp Patch Kulit",
      "Sablon Discharge White",
      "Bordir Komputer"
    ],
    "description": "Tas tote bag berbahan kain denim hitam sulfur yang telah melalui proses cuci stone-wash sehingga menghasilkan nuansa vintage abu-abu gelap berkarakter. Ditambah aksen patch kulit sintetis timbul untuk prestise brand maksimal.",
    "usage": [
      "Merchandise Gathering Akhir Tahun",
      "Tas Souvenir Komunitas Musik & Seni",
      "Giftset Karyawan Muda",
      "Tas Jinjing Distro"
    ],
    "imageUrl": "/media/tote-bag-denim.webp",
    "altText": "Tote Bag Black Washed Denim Patch Kulit bernuansa vintage",
    "highlight": "Warna black wash vintage alami, patch kulit timbul, dan resleting logam YKK.",
    "detailImages": [
      {
        "url": "/media/foto-denim.jpg",
        "caption": "Efek Pudar Stone-Washing Menghasilkan Gradasi Abu-Hitam Otentik",
        "alt": "Stone washed denim"
      },
      {
        "url": "/media/foto-macro.jpg",
        "caption": "Aksen Patch Kulit Sintetis Deboss Logo Perusahaan",
        "alt": "Patch kulit deboss"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Resleting YKK Besi Kuat & Furing Katun Halus Dalam",
        "alt": "Resleting ykk besi"
      },
      {
        "url": "/media/foto-unboxing.jpg",
        "caption": "Kemasan Rapi Eksklusif untuk Souvenir Acara",
        "alt": "Kemasan eksklusif"
      }
    ],
    "specTable": {
      "material": "Black Sulfur Denim 12 oz Stone-Washed",
      "gramasi": "360 - 380 gsm",
      "ukuranStandard": "38 x 42 x 10 cm (Large)",
      "pilihanTali": "Webbing Katun 4 cm / Tali Denim Senada",
      "pilihanPenutup": "Resleting YKK Besi Logam",
      "opsiCetak": "Patch Kulit Deboss, Sablon Discharge, Bordir",
      "rekomendasiQty": "50 - 1.000+ pcs",
      "estimasiPengerjaan": "9 - 15 hari kerja"
    }
  },
  {
    "id": "DEN-04",
    "slug": "tote-bag-denim-hybrid-canvas-2tone",
    "name": "Tote Bag Denim Kombinasi Heavy Canvas 2-Tone (36 x 42 x 10 cm)",
    "categorySlug": "tote-bag-denim",
    "categoryName": "Denim",
    "material": "Denim Blue 12 oz + Bottom Heavy Canvas 14 oz",
    "dimensions": "36 cm (L) x 42 cm (T) x 10 cm (Boxy Stand-up)",
    "tali": "Tali Webbing Herringbone Katun 3.8 cm Tebal",
    "price": "Rp 52.000",
    "priceScale": "Skala 500+ pcs: Rp 43.000",
    "moq": "50 pcs",
    "tags": [
      "denim canvas",
      "hybrid tote bag",
      "tas 2 tone",
      "tote bag denim kanvas",
      "souvenir eksklusif"
    ],
    "features": [
      "Konstruksi 2-tone: bodi atas denim biru, alas kanvas 14 oz extra kokoh",
      "Tali webbing katun herringbone tebal 3.8 cm nyaman di bahu",
      "Dilengkapi slot karet penahan tumbler botol minum di dalam",
      "Finishing bar-tack X-box pada setiap titik tumpu beban"
    ],
    "techniques": [
      "Sablon Discharge Badan Denim",
      "Bordir Komputer",
      "Plastisol Doff"
    ],
    "description": "Tas tote bag hybrid yang menggabungkan keelokan visual denim jeans biru pada bodi atas dengan kekokohan heavy canvas 14 oz pada bagian alas bawah. Memberikan perlindungan ekstra dari debu lantai dan tampilan modern dua warna.",
    "usage": [
      "Merchandise Gathering Eksklusif",
      "Tas Kuliah & Kerja Komuter",
      "Souvenir Komunitas Kreatif",
      "Koleksi Brand Fashion"
    ],
    "imageUrl": "/media/foto-denim.jpg",
    "altText": "Tote Bag Denim Kombinasi Heavy Canvas 2-Tone desain kontras modern",
    "highlight": "Konstruksi 2-tone denim dan heavy canvas 14 oz, slot botol dalam, dan tali katun tebal.",
    "detailImages": [
      {
        "url": "/media/foto-denim.jpg",
        "caption": "Kombinasi Kontras Warna Denim Biru dan Kanvas Natural",
        "alt": "Kombinasi denim kanvas"
      },
      {
        "url": "/media/foto-macro.jpg",
        "caption": "Detail Tali Webbing Herringbone Lembut di Pundak",
        "alt": "Tali webbing herringbone"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Alas Heavy Canvas 14 oz Tangguh Melindungi Dasar Tas",
        "alt": "Alas kanvas tebal"
      },
      {
        "url": "/media/foto-giftset.jpg",
        "caption": "Souvenir Bernilai Tinggi untuk Partner Kerja Bisnis",
        "alt": "Souvenir partner bisnis"
      }
    ],
    "specTable": {
      "material": "Denim 12 oz + Heavy Canvas 14 oz",
      "gramasi": "360 gsm (Denim) + 420 gsm (Canvas)",
      "ukuranStandard": "36 x 42 x 10 cm (Boxy)",
      "pilihanTali": "Webbing Katun Herringbone 3.8 cm",
      "pilihanPenutup": "Kancing Magnet Nikel / Resleting YKK",
      "opsiCetak": "Sablon Discharge, Bordir Komputer",
      "rekomendasiQty": "50 - 1.000+ pcs",
      "estimasiPengerjaan": "9 - 15 hari kerja"
    }
  },
  {
    "id": "SAT-01",
    "slug": "tote-bag-satin-printing-full-sublimasi",
    "name": "Tote Bag Satin Bridal Full Sublimasi Flat (35 x 40 cm)",
    "categorySlug": "tote-bag-satin",
    "categoryName": "Satin Full Print",
    "material": "Kain Satin Bridal Halus dengan Furing Spunbond",
    "dimensions": "35 cm (L) x 40 cm (T)",
    "tali": "Tali Satin Lapis Jahit / Webbing Halus (Panjang 55 cm)",
    "price": "Rp 25.000",
    "priceScale": "Skala 500+ pcs: Rp 19.500",
    "moq": "50 pcs",
    "tags": [
      "tote bag satin",
      "tas sublimasi full print",
      "tas printing cmyk",
      "souvenir bridal",
      "hampers pernikahan"
    ],
    "features": [
      "Full print sublimasi tajam 360 derajat depan dan belakang",
      "Permukaan glossy halus mengkilap mewah khas satin bridal",
      "Lapis furing dalam rapi melindungi isi tas",
      "Warna cerah meresap ke serat poliester tidak akan luntur"
    ],
    "techniques": [
      "Digital Printing Sublimasi High Definition 300 DPI"
    ],
    "description": "Tote bag satin bridal dengan teknologi cetak sublimasi digital format lebar. Memungkinkan pengaplikasian ilustrasi foto, pola floral, dan desain seni visual tanpa batasan jumlah warna serta gradasi yang mulus sempurna.",
    "usage": [
      "Souvenir Wisata Seni Budaya",
      "Hampers Bridal & Wedding",
      "Merchandise Brand Kosmetik",
      "Tas Promosi Galeri Seni"
    ],
    "imageUrl": "/media/tote-bag-satin.webp",
    "altText": "Tote Bag Satin Full Print Sublimasi dengan ilustrasi seni botanical cerah",
    "highlight": "Hasil cetak full-color beresolusi tinggi tanpa batasan gradasi warna.",
    "detailImages": [
      {
        "url": "/media/tote-bag-satin.webp",
        "caption": "Ketajaman Spektrum Warna CMYK 300 DPI Bebas Gradasi",
        "alt": "Ketajaman sublimasi"
      },
      {
        "url": "/media/foto-satin.jpg",
        "caption": "Kilau Lembut Mewah Kain Satin Bridal Premium",
        "alt": "Kilau satin bridal"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Lapis Furing Dalam Rapi Menutup Sisa Jahitan Obras",
        "alt": "Furing dalam satin"
      },
      {
        "url": "/media/foto-unboxing.jpg",
        "caption": "Warna Tahan Cuci Berulang Kali Tanpa Memudar",
        "alt": "Tahan cuci satin"
      }
    ],
    "specTable": {
      "material": "Satin Bridal Premium + Furing Dalam",
      "gramasi": "220 - 250 gsm (dengan furing)",
      "ukuranStandard": "35 x 40 cm / 30 x 35 cm",
      "pilihanTali": "Tali Satin Senada / Webbing Poliester Halus",
      "pilihanPenutup": "Resleting YKK / Kancing Magnet Logam",
      "opsiCetak": "Full Sublimasi CMYK Depan-Belakang",
      "rekomendasiQty": "50 - 2.000+ pcs",
      "estimasiPengerjaan": "5 - 10 hari kerja"
    }
  },
  {
    "id": "SAT-02",
    "slug": "tote-bag-satin-bridal-gusset-resleting",
    "name": "Tote Bag Satin Bridal Gusset + Resleting YKK (35 x 40 x 8 cm)",
    "categorySlug": "tote-bag-satin",
    "categoryName": "Satin Full Print",
    "material": "Satin Bridal + Gusset Alas 8 cm + Resleting YKK",
    "dimensions": "35 cm (L) x 40 cm (T) x 8 cm (Semi Gusset)",
    "tali": "Webbing Poliester Halus 3 cm (Panjang 60 cm)",
    "price": "Rp 32.000",
    "priceScale": "Skala 500+ pcs: Rp 25.000",
    "moq": "50 pcs",
    "tags": [
      "satin resleting",
      "tas sublimasi gusset",
      "tas hampers satin",
      "souvenir pernikahan mewah"
    ],
    "features": [
      "Penutup resleting atas menjamin keamanan isi tas",
      "Alas bervolume muat hampers, kosmetik, atau souvenir",
      "Warna cetak meresap serat poliester tidak kaku",
      "Bisa kombinasi tali webbing katun herringbone atau satin"
    ],
    "techniques": [
      "Digital Printing Sublimasi 300 DPI"
    ],
    "description": "Tas satin sublimasi dengan penambahan alas gusset dan ritsleting penutup atas. Sangat disukai untuk packaging hampers pernikahan berkelas, bingkisan kosmetik premium, dan souvenir pameran seni rupa.",
    "usage": [
      "Hampers Pernikahan Eksklusif",
      "Merchandise Brand Kosmetik",
      "Pameran Fotografi & Seni",
      "Giftset Hari Ibu & Kartini"
    ],
    "imageUrl": "/media/foto-satin.jpg",
    "altText": "Tote Bag Satin Bridal Gusset Resleting YKK elegan berkilau",
    "highlight": "Resleting YKK atas, alas bervolume muat hampers, dan furing dalam rapi.",
    "detailImages": [
      {
        "url": "/media/foto-satin.jpg",
        "caption": "Alas Gusset Bervolume Memuat Kotak Suvenir Pernikahan",
        "alt": "Alas gusset satin"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Penutup Resleting YKK Halus Anti Macet",
        "alt": "Resleting ykk satin"
      },
      {
        "url": "/media/tote-bag-satin.webp",
        "caption": "Pola Grafis Floral Meresap Sempurna ke Seluruh Bidang Tas",
        "alt": "Pola floral sublimasi"
      },
      {
        "url": "/media/foto-giftset.jpg",
        "caption": "Souvenir Anggun untuk Undangan Kehormatan Acara",
        "alt": "Undangan kehormatan"
      }
    ],
    "specTable": {
      "material": "Satin Bridal + Furing Katun Halus",
      "gramasi": "240 - 260 gsm (Termasuk Furing)",
      "ukuranStandard": "35 x 40 x 8 cm (Semi Gusset)",
      "pilihanTali": "Webbing Katun Halus 3 cm / Satin Senada",
      "pilihanPenutup": "Resleting YKK Original / Kancing Magnet",
      "opsiCetak": "Full Digital Sublimasi CMYK",
      "rekomendasiQty": "50 - 2.000+ pcs",
      "estimasiPengerjaan": "6 - 12 hari kerja"
    }
  },
  {
    "id": "SAT-03",
    "slug": "tote-bag-satin-velvet-boxy-magnet",
    "name": "Tote Bag Satin Velvet Doff Boxy + Magnet (30 x 35 x 10 cm)",
    "categorySlug": "tote-bag-satin",
    "categoryName": "Satin Full Print",
    "material": "Satin Velvet Matte + Lapis Busa Hati Kokoh + Magnet",
    "dimensions": "30 cm (L) x 35 cm (T) x 10 cm (Boxy Stand-up)",
    "tali": "Tali Webbing Herringbone Premium 3.5 cm",
    "price": "Rp 38.000",
    "priceScale": "Skala 500+ pcs: Rp 30.500",
    "moq": "50 pcs",
    "tags": [
      "satin velvet",
      "tote bag velvet",
      "tas skincare mewah",
      "tas stand up satin",
      "souvenir vip"
    ],
    "features": [
      "Bahan satin velvet matte tidak silau dengan sentuhan lembut mewah",
      "Lapisan busa hati di bagian dalam membuat tas bisa berdiri tegak",
      "Kancing penutup magnetik snap nikel kuat",
      "Sangat cocok untuk paket launching produk skincare & kosmetik"
    ],
    "techniques": [
      "Digital Sublimasi Matte",
      "Hot Stamp Gold Foil"
    ],
    "description": "Tas tote bag satin velvet matte dengan struktur kaku yang sanggup berdiri sendiri berkat lapisan busa hati di dalamnya. Tekstur doff beludru yang mewah sangat ideal untuk paket peluncuran skincare klinik kecantikan dan cenderamata VIP.",
    "usage": [
      "Launching Brand Skincare & Klinik Kecantikan",
      "Souvenir VIP Undangan Terbatas",
      "Hampers Spesial Hari Raya",
      "Giftset Eksklusif Wanita"
    ],
    "imageUrl": "/media/tote-bag-satin.webp",
    "altText": "Tote Bag Satin Velvet Doff Boxy Magnet mewah berdiri tegak",
    "highlight": "Bahan velvet matte mewah, struktur kokoh berdiri sendiri berkat busa hati.",
    "detailImages": [
      {
        "url": "/media/tote-bag-satin.webp",
        "caption": "Tekstur Velvet Doff Mewah Tidak Menyilaukan Mata",
        "alt": "Tekstur velvet doff"
      },
      {
        "url": "/media/quality-control-inspection-checklist.webp",
        "caption": "Struktur Busa Hati Membuat Tas Tegak Sempurna",
        "alt": "Struktur busa hati"
      },
      {
        "url": "/media/foto-macro.jpg",
        "caption": "Kancing Magnetik Nikel Tersembunyi Berdaya Cengkeram Kuat",
        "alt": "Kancing magnetik nikel"
      },
      {
        "url": "/media/foto-giftset.jpg",
        "caption": "Pilihan Nomor Satu untuk Packaging Skincare Eksklusif",
        "alt": "Packaging skincare"
      }
    ],
    "specTable": {
      "material": "Satin Velvet Matte + Busa Hati Foam",
      "gramasi": "300 gsm (Rigid Stand-up)",
      "ukuranStandard": "30 x 35 x 10 cm (Boxy)",
      "pilihanTali": "Webbing Herringbone Katun Halus 3.5 cm",
      "pilihanPenutup": "Kancing Magnetik Snap Nikel Tersembunyi",
      "opsiCetak": "Sublimasi Matte Full Color, Foil Emas",
      "rekomendasiQty": "50 - 1.500+ pcs",
      "estimasiPengerjaan": "7 - 14 hari kerja"
    }
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    slug: 'seminar-nasional-teknologi-malang',
    title: 'Pengadaan 350 Pcs Tote Bag Blacu Seminar Nasional Teknologi',
    clientType: 'SMK Telkom Malang / Seminar & Workshop Teknologi',
    city: 'Malang, Jawa Timur',
    qty: '350 Pcs',
    material: 'Kain Blacu Hitam Tebal + Tali Katun Webbing Tan',
    technique: 'Direct-to-Film (DTF) Heat Press Presisi',
    dimensions: '30 × 40 cm Flat',
    brief: 'Penyelenggara seminar & workshop nasional teknologi di Malang membutuhkan 350 pcs tas seminar kit bernuansa teknologi modern dengan grafis arsitektur gedung yang tajam dan tali kontras tahan beban.',
    solution: 'Kami memproduksi tote bag bahan blacu hitam pekat dipadu aksen tali webbing katun premium cokelat tan. Cetak logo dan ilustrasi arsitektur menggunakan mesin heat press digital DTF bersuhu 165°C sehingga garis halus gedung merekat kuat dan tahan cuci.',
    date: 'Oktober 2026',
    imageUrl: '/media/portfolio-blacu-350pcs.webp',
    altText: 'Dokumentasi produksi heat press DTF pengadaan 350 pcs tote bag seminar nasional teknologi SMK Telkom Malang',
    keyTakeaway: 'Hasil cetak garis arsitektur presisi 100% tajam dan selesai tepat waktu untuk seluruh 350 peserta.'
  },
  {
    slug: 'onboarding-kit-startup-surabaya',
    title: 'Pembuatan 180 Pcs Tote Bag Canvas Twill Onboarding Kit Perusahaan',
    clientType: 'Perusahaan Teknologi / HR Department',
    city: 'Surabaya, Jawa Timur (Kirim dari Malang)',
    qty: '180 Pcs',
    material: 'Canvas Twill 12 oz Forest Green',
    technique: 'Direct-to-Film (DTF) Logo Gradasi + Saku Dalam Zipper',
    dimensions: '35 × 40 × 10 cm Gusset',
    brief: 'Perusahaan membutuhkan welcome kit bagi karyawan baru yang mencerminkan identitas brand modern. Tas harus memuat laptop 14 inch, buku catatan, dan pouch charger.',
    solution: 'Dipilih canvas twill berketebalan 12 oz warna hijau botol dengan furing dalam tahan air dan kompartemen saku beresleting untuk menyimpan kartu akses kantor. Pengiriman Malang ke Surabaya menggunakan travel kargo same-day.',
    date: 'September 2026',
    imageUrl: '/media/portfolio-canvas-twill-180pcs.webp',
    altText: 'Dokumentasi pembuatan 180 pcs tote bag canvas twill hijau untuk karyawan perusahaan',
    keyTakeaway: 'Kualitas warna DTF tajam dan konsisten di seluruh batch produksi.'
  },
  {
    slug: 'workshop-bumn-yogyakarta',
    title: 'Produksi 500 Pcs Tote Bag Canvas Greige Eco Workshop',
    clientType: 'Divisi CSR & Komunikasi Perusahaan BUMN',
    city: 'Yogyakarta (Pengiriman Ekspedisi Kargo)',
    qty: '500 Pcs',
    material: 'Canvas Greige Unbleached Natural',
    technique: 'Sablon Waterbased Ramah Lingkungan 1 Warna',
    dimensions: '32 × 38 cm',
    brief: 'Acara bertema keberlanjutan lingkungan mensyaratkan materi souvenir yang seminimal mungkin menggunakan bahan kimia pemutih dan tinta berbasis solvent.',
    solution: 'Kami menggunakan bahan canvas greige serat kapas murni dengan tinta sablon berbasis air (waterbased binder). Packaging per tas menggunakan tali rami tanpa plastik pembungkus sekali pakai.',
    date: 'Agustus 2026',
    imageUrl: '/media/portfolio-canvas-greige-500pcs.webp',
    altText: 'Dokumentasi produksi 500 pcs tote bag canvas greige natural workshop CSR Yogyakarta',
    keyTakeaway: 'Sesuai standar verifikasi tema keberlanjutan klien.'
  }
];

export const articles: Article[] = [
  {
    slug: 'canvas-vs-blacu-mana-yang-lebih-cocok',
    title: 'Canvas vs Blacu: Mana yang Lebih Cocok untuk Tote Bag Anda?',
    excerpt: 'Perbandingan objektif karakteristik kain, ketahanan beban, kompatibilitas teknik cetak, dan kesesuaian anggaran untuk pengadaan tas merchandise B2B.',
    directAnswer: 'Untuk pengadaan merchandise premium atau gift karyawan, Canvas Twill adalah pilihan terbaik karena kokoh dan tebal. Untuk seminar massal kampus/dinas beranggaran efisien, Blacu Super Grade A menawarkan nilai terbaik antara estetika dan harga.',
    publishedAt: '2026-10-15',
    updatedAt: '2026-10-25',
    readTime: '6 menit baca',
    authorId: 'm-maulana-ishaq',
    authorName: 'M. Maulana Ishaq',
    category: 'Panduan Material',
    imageUrl: '/media/tote-bag-canvas-ethnic-tenun.webp',
    altText: 'Perbandingan serat kain canvas tenun, blacu, dan spunbond untuk tote bag custom',
    tableOfContents: [
      { id: 'ringkasan-karakteristik', title: 'Tabel Ringkasan Karakteristik Bahan' },
      { id: 'detail-bahan-canvas', title: '1. Kain Canvas: Karakter & Rekomendasi' },
      { id: 'detail-bahan-blacu', title: '2. Kain Blacu: Estetika Alami & Kelebihan' },
      { id: 'cara-menentukan-pilihan', title: 'Checklist Menentukan Bahan Sesuai Kebutuhan' }
    ]
  },
  {
    slug: 'ukuran-tote-bag-standar-untuk-berbagai-kebutuhan',
    title: 'Ukuran Tote Bag Standar untuk Berbagai Kebutuhan Event & Bisnis',
    excerpt: 'Jangan sampai tas kekecilan untuk dokumen atau terlalu besar sehingga boros bahan. Simak ukuran proporsional beserta rumus menghitung alas gusset.',
    directAnswer: 'Ukuran standar tote bag seminar yang paling direkomendasikan adalah 30 × 40 cm (format vertikal) untuk memuat dokumen A4 dan stopmap folio. Jika membawa tumbler tebal atau box snack, tambahkan alas gusset 8–10 cm menjadi ukuran 35 × 40 × 10 cm.',
    publishedAt: '2026-10-18',
    updatedAt: '2026-10-26',
    readTime: '5 menit baca',
    authorId: 'm-maulana-ishaq',
    authorName: 'M. Maulana Ishaq',
    category: 'Teknis Produksi',
    imageUrl: '/media/tote-bag-canvas-aksara-kost.webp',
    altText: 'Foto produk nyata tote bag canvas seminar proporsi dokumen A4 dan laptop',
    tableOfContents: [
      { id: 'dimensi-standar', title: '3 Ukuran Standar Tote Bag di Industri Merchandise' },
      { id: 'pengaruh-gusset', title: 'Pentingnya Alas (Gusset) pada Daya Muat Tas' },
      { id: 'panjang-tali-ergonomis', title: 'Menentukan Panjang Tali yang Nyaman di Pundak' }
    ]
  },
  {
    slug: 'pilihan-teknik-sablon-tote-bag',
    title: 'Pilihan Teknik Sablon Tote Bag: Kelebihan dan Karakteristik',
    excerpt: 'Pahami perbedaan ketahanan, batas detail warna gradasi, dan efisiensi biaya cetak logo pada berbagai permukaan kain tote bag.',
    directAnswer: 'Untuk logo 1–3 warna solid dengan kuantiti di atas 100 pcs, sablon manual rubber paling hemat dan awet. Untuk logo penuh gradasi foto atau kuantiti di bawah 100 pcs, cetak Direct-to-Film (DTF) adalah solusi terbaik.',
    publishedAt: '2026-10-22',
    updatedAt: '2026-10-27',
    readTime: '7 menit baca',
    authorId: 'm-maulana-ishaq',
    authorName: 'M. Maulana Ishaq',
    category: 'Panduan Branding',
    imageUrl: '/media/proses-dtf-press-green-energy.webp',
    altText: 'Proses aplikasi cetak heat press DTF digital pada tote bag di workshop',
    tableOfContents: [
      { id: 'perbandingan-cetak', title: 'Matriks Perbandingan Teknik Cetak Logo' },
      { id: 'sablon-manual', title: 'Kelebihan & Batasan Sablon Manual Rubber' },
      { id: 'dtf-digital', title: 'Kelebihan Cetak Digital DTF (Direct to Film)' }
    ]
  }
];

export const authors: Record<string, Author> = {
  'm-maulana-ishaq': {
    id: 'm-maulana-ishaq',
    slug: 'm-maulana-ishaq',
    name: 'M. Maulana Ishaq',
    role: 'SEO Specialist & Web Developer | Senior Marketing',
    bio: 'SEO Specialist dan Web Developer yang saat ini memegang peranan sebagai Senior Marketing. Berfokus pada perancangan arsitektur katalog produk digital, riset kebutuhan pengadaan merchandise B2B, dan standardisasi kualitas tote bag custom.',
    expertise: ['SEO & Digital Growth Strategy', 'Web Development & UI/UX', 'Senior Marketing B2B', 'Spesifikasi & Standardisasi Pengadaan'],
    imageUrl: '/media/author-maulana.webp',
    socials: {
      instagram: 'https://instagram.com/maulanaishaq',
      x: 'https://x.com/maulanaishaq',
      linkedin: 'https://linkedin.com/in/maulanaishaq'
    }
  },
  'ahmad-fauzi': {
    id: 'm-maulana-ishaq',
    slug: 'm-maulana-ishaq',
    name: 'M. Maulana Ishaq',
    role: 'SEO Specialist & Web Developer | Senior Marketing',
    bio: 'SEO Specialist dan Web Developer yang saat ini memegang peranan sebagai Senior Marketing. Berfokus pada perancangan arsitektur katalog produk digital, riset kebutuhan pengadaan merchandise B2B, dan standardisasi kualitas tote bag custom.',
    expertise: ['SEO & Digital Growth Strategy', 'Web Development & UI/UX', 'Senior Marketing B2B', 'Spesifikasi & Standardisasi Pengadaan'],
    imageUrl: '/media/author-maulana.webp',
    socials: {
      instagram: 'https://instagram.com/maulanaishaq',
      x: 'https://x.com/maulanaishaq',
      linkedin: 'https://linkedin.com/in/maulanaishaq'
    }
  }
};

export const canvasFaqs: FAQItem[] = [
  {
    id: 'faq-canvas-definisi',
    question: 'Apa itu tote bag kanvas?',
    answer: 'Tote bag canvas adalah tas jinjing berbahan kain kanvas (seperti Canvas Twill 12 oz, Greige Natural, atau Marsoto) yang ditenun rapat dan memiliki ketahanan tinggi. Di workshop kami, tote bag canvas dijahit dengan standar benang rangkap untuk kebutuhan merchandise premium kantor, tas laptop, dan promosi korporat yang awet menopang beban 7–10 kg.',
    category: 'bahan'
  },
  {
    id: 'faq-canvas-harga',
    question: 'Berapa harga tote bag canvas?',
    answer: 'Harga tote bag canvas biasanya mengikuti kuantiti (qty) order, pilihan jenis kain canvas, ukuran tas, serta teknik sablon yang digunakan. Semakin banyak jumlah pesanan, harga satuan akan semakin terjangkau. Harga pesanan custom sangat fleksibel dan dapat disesuaikan dengan anggaran Anda. Silakan hubungi admin kami via WhatsApp untuk simulasi penawaran dan negosiasi harga terbaik.',
    category: 'pemesanan'
  },
  {
    id: 'faq-canvas-ukuran',
    question: 'Berapa ukuran tote bag canvas yang standar?',
    answer: 'Ukuran paling standar untuk tote bag canvas adalah 30 × 40 cm (format potret) yang ideal memuat map dokumen A4 dan buku. Kami juga menyediakan opsi ukuran 35 × 40 × 10 cm dengan alas (gusset) untuk membawa laptop 14 inci dan tumbler, atau ukuran custom khusus sesuai spesifikasi brand Anda.',
    category: 'bahan'
  },
  {
    id: 'faq-canvas-rekomendasi',
    question: 'Bahan tote bag canvas apa yang bagus dan tahan lama?',
    answer: 'Canvas Twill 12 oz dan Canvas Greige Natural adalah dua varian terbaik. Canvas Twill bertekstur serat diagonal halus sehingga hasil sablon logo sangat presisi dan tajam, sedangkan Greige menghadirkan kesan vintage alami. Keduanya diperkuat dengan jahitan double-stitch dan bartack pada pangkal tali pundak.',
    category: 'bahan'
  },
  {
    id: 'faq-canvas-offline',
    question: 'Tote bag beli dimana offline dan bagaimana cara pemesanannya?',
    answer: 'Anda dapat mengunjungi workshop dan kantor kami di Kedungkandang, Kota Malang untuk melihat katalog kain fisik, menguji kekuatan jahitan, dan mendiskusikan penempatan logo. Bagi pemesan dari luar kota di seluruh Indonesia, kami juga melayani konsultasi online dan pengiriman sampel fisik langsung ke alamat Anda.',
    category: 'umum'
  }
];

export const blacuFaqs: FAQItem[] = [
  {
    id: 'faq-blacu-beda-kanvas',
    question: 'Apa beda kanvas dan blacu?',
    answer: 'Perbedaan utama ada pada ketebalan, warna, dan harga. Kain kanvas lebih tebal, kaku, dan memiliki banyak varian warna untuk merchandise korporat. Sementara kain blacu (unbleached cotton) berbobot lebih ringan, berwarna krem gading alami (broken white) berbintik serat kapas asli, bernuansa vintage eco-friendly, dan harganya jauh lebih terjangkau untuk kuantiti massal.',
    category: 'bahan'
  },
  {
    id: 'faq-blacu-definisi',
    question: 'Apa itu tote bag blacu?',
    answer: 'Tote bag blacu adalah tas jinjing ramah lingkungan dari serat kapas murni tanpa proses pemutihan kimia (bleaching) berlebihan. Tas ini sangat populer untuk souvenir seminar kampus, workshop pelatihan instansi, hingga cinderamata pernikahan rustic karena ringan, fleksibel, dan bernilai guna tinggi.',
    category: 'bahan'
  },
  {
    id: 'faq-blacu-karakter',
    question: 'Kain blacu itu seperti apa?',
    answer: 'Kain blacu memiliki tekstur sedikit berpasir alami khas serat katun dengan warna dasar krem natural. Bahannya lembut, tidak panas, mudah dilipat, dan memiliki daya serap tinta yang tinggi sehingga sangat cocok untuk sablon manual rubber maupun teknik cetak transfer DTF.',
    category: 'bahan'
  },
  {
    id: 'faq-blacu-harga',
    question: 'Berapa harga tote bag blacu custom?',
    answer: 'Harga tote bag blacu merupakan salah satu yang paling ekonomis dan biasanya mengikuti kuantiti (qty) order. Kami memberikan penawaran harga khusus untuk kuantiti ratusan hingga ribuan pcs. Harga custom blacu selalu bisa disesuaikan dengan anggaran panitia acara. Anda bisa langsung menghubungi admin kami via WhatsApp untuk mendapatkan harga termurah.',
    category: 'pemesanan'
  },
  {
    id: 'faq-blacu-ukuran-seminar',
    question: 'Berapa ukuran umum tote bag blacu untuk seminar?',
    answer: 'Ukuran paling umum adalah 30 × 40 cm (cukup untuk sertifikat A4, binder, dan modul seminar) serta ukuran 25 × 35 cm untuk goodie bag souvenir. Kami juga melayani penambahan kancing magnet atau perekat velcro.',
    category: 'bahan'
  }
];

export const spunbondFaqs: FAQItem[] = [
  {
    id: 'faq-spunbond-definisi',
    question: 'Apa itu tote bag spunbond?',
    answer: 'Tote bag spunbond adalah tas promosi berbahan kain sintetis non-woven (polypropylene) berbobot ringan, higienis, dan ekonomis. Tas ini merupakan pilihan nomor satu untuk tas souvenir pameran dagang (expo), goodie bag event massal, kemasan produk belanja pengganti kantong plastik, dan kegiatan baksos.',
    category: 'bahan'
  },
  {
    id: 'faq-spunbond-karakter',
    question: 'Bahan spunbond itu seperti apa?',
    answer: 'Bahan spunbond memiliki permukaan berserat rapat dengan motif bintik press bertekstur. Tersedia pilihan ketebalan 50 GSM, 75 GSM (standar kuat paling laris), hingga 100 GSM (ekstra kokoh). Kain spunbond tahan terhadap percikan air dan tersedia dalam puluhan pilihan warna cerah.',
    category: 'bahan'
  },
  {
    id: 'faq-spunbond-harga',
    question: 'Berapa harga tas spunbond custom?',
    answer: 'Harga tas spunbond adalah yang paling murah dibanding bahan lainnya. Harga pesanan custom biasanya mengikuti kuantiti (qty) order dan gramatur bahan (GSM) yang dipilih. Untuk pemesanan dalam jumlah besar, harga per pcs akan jauh lebih murah dan bisa disesuaikan dengan alokasi budget Anda. Hubungi admin kami untuk penawaran instan via WhatsApp.',
    category: 'pemesanan'
  },
  {
    id: 'faq-spunbond-reusable',
    question: 'Apakah spunbond termasuk plastik?',
    answer: 'Spunbond terbuat dari serat polypropylene (PP) sintetis yang dipadatkan tanpa proses tenun (non-woven). Berbeda dengan plastik kresek sekali pakai, tas spunbond dapat dipakai berulang kali (reusable) dan dapat dicuci lembut sehingga efektif mengurangi limbah kantong kresek harian.',
    category: 'bahan'
  },
  {
    id: 'faq-spunbond-metode',
    question: 'Apa perbedaan spunbond jahit benang vs hot press ultrasonic?',
    answer: 'Metode hot press ultrasonic menggunakan pemanasan mesin tanpa benang, cocok untuk kuantiti ribuan unit dengan pengerjaan cepat dan harga termurah. Sedangkan metode jahit benang manual digunakan untuk model spunbond beralas kotak (box bag) 75–100 GSM yang membutuhkan kekuatan ekstra menahan beban berat snack dan sembako.',
    category: 'bahan'
  }
];

export const leatherFaqs: FAQItem[] = [
  {
    id: 'faq-leather-definisi',
    question: 'Apa itu tote bag kulit sintetis versi konveksi kami?',
    answer: 'Tote bag kulit sintetis versi kami adalah tas jinjing eksklusif berbahan PU Leather (Faux Leather Grade A) yang dirancang khusus untuk merchandise korporat formal, gift set eksekutif, apresiasi tamu VIP, dan souvenir akhir tahun perusahaan. Bahannya memiliki tekstur mewah menyerupai kulit sapi asli, tidak mudah mengelupas, tidak berbau menyengat, dan tahan air.',
    category: 'bahan'
  },
  {
    id: 'faq-leather-harga',
    question: 'Berapa harga tote bag kulit sintetis custom?',
    answer: 'Harga tote bag kulit sintetis custom biasanya mengikuti kuantiti (qty) order, pilihan jenis kulit, aksesoris furing satin bagian dalam, serta teknik branding logo. Harga custom sangat fleksibel dan bisa disesuaikan dengan pagu anggaran pengadaan kantor Anda. Untuk konsultasi spesifikasi dan mendapatkan harga terbaik, Anda bisa langsung menghubungi admin kami via WhatsApp.',
    category: 'pemesanan'
  },
  {
    id: 'faq-leather-kelebihan',
    question: 'Apa keunggulan tote bag kulit sintetis dibanding bahan kain?',
    answer: 'Tote bag kulit sintetis memberikan kesan mewah, eksklusif, dan profesional untuk level manajemen dan direksi. Permukaannya tahan air (water-resistant), sangat mudah dibersihkan hanya dengan lap lembap, dan memiliki kompartemen rapi dengan resleting yang aman untuk laptop serta berkas penting.',
    category: 'bahan'
  },
  {
    id: 'faq-leather-moq',
    question: 'Berapa minimal pemesanan (MOQ) untuk tote bag kulit sintetis?',
    answer: 'Untuk tote bag kulit sintetis, minimal pemesanan (MOQ) kami buat fleksibel mulai dari 30 hingga 50 pcs untuk agenda apresiasi VIP, hingga ratusan pcs untuk kebutuhan pengadaan tahunan perusahaan.',
    category: 'pemesanan'
  },
  {
    id: 'faq-leather-branding',
    question: 'Teknik branding logo apa yang paling cocok untuk tote bag kulit sintetis?',
    answer: 'Teknik terbaik adalah Deboss / Emboss panas (penekanan logo plat logam bertekstur cekung elegan) tanpa warna atau dengan sentuhan foil emas/silver yang mewah dan permanen seumur hidup. Kami juga melayani sablon khusus kulit dan pemasangan plat logam grafir.',
    category: 'desain'
  }
];

export const mikaFaqs: FAQItem[] = [
  {
    id: 'faq-mika-karakter',
    question: 'Berapa ketebalan bahan mika transparan yang digunakan?',
    answer: 'Kami menggunakan mika PVC transparan tebal 0.50 mm hingga 0.70 mm standar industri tas. Ketebalan ini menjamin tas memiliki struktur berdiri kokoh, jernih kristal, tidak lemas, dan tidak mudah robek atau berkerut saat membawa barang berat.',
    category: 'bahan'
  },
  {
    id: 'faq-mika-keunggulan',
    question: 'Apakah tote bag mika tahan air dan mudah dibersihkan?',
    answer: 'Ya, 100% kedap air. Jika terkena tumpahan cairan, debu, atau minyak, permukaan mika cukup dilap dengan kain bersih basah. Sangat higienis untuk membawa kosmetik, skincare, tumbler minuman, dan perlengkapan pantai.',
    category: 'bahan'
  },
  {
    id: 'faq-mika-sablon',
    question: 'Teknik cetak apa yang bisa diaplikasikan pada tote bag mika?',
    answer: 'Tote bag mika dapat dicetak menggunakan sablon manual dengan tinta khusus vinil/plastik yang mengikat kuat, sablon hot-stamping foil emas/perak metalik, hingga print digital UV full color beresolusi tinggi.',
    category: 'desain'
  },
  {
    id: 'faq-mika-harga',
    question: 'Berapa harga tote bag mika transparan custom?',
    answer: 'Harga tote bag mika custom mengikuti kuantiti order, dimensi ukuran, serta kombinasi aksesoris seperti variasi tali webbing dan kancing penutup. Harga bisa disesuaikan dengan anggaran Anda, silakan hubungi tim kami via WhatsApp.',
    category: 'pemesanan'
  }
];

export const denimFaqs: FAQItem[] = [
  {
    id: 'faq-denim-karakter',
    question: 'Kain denim jeans apa yang digunakan untuk tote bag custom?',
    answer: 'Kami menggunakan kain denim twill katun 10 oz hingga 12 oz dengan opsi warna raw indigo (biru dongker tua pekat), bio wash, dan hitam pekat. Karakter bahannya tebal, bertekstur kokoh, dan semakin bernuansa vintage seiring pemakaian.',
    category: 'bahan'
  },
  {
    id: 'faq-denim-keunggulan',
    question: 'Mengapa tote bag denim sangat cocok untuk merchandise distro & anak muda?',
    answer: 'Denim memiliki DNA streetwear yang kuat, berjiwa muda, dan timeless (tidak lekang oleh zaman). Dilengkapi aksen jahitan kontras benang tembaga (tobacco stitch) dan rivet logam menjadikannya merchandise yang dibanggakan pemakainya.',
    category: 'bahan'
  },
  {
    id: 'faq-denim-sablon',
    question: 'Sablon apa yang paling bagus untuk kain denim jeans?',
    answer: 'Pilihan terbaik adalah sablon discharge (cabut warna) yang menyatu halus tanpa rasa kaku di atas kain, sablon plastisol doff, bordir komputer tebal, serta penambahan patch kulit sintetis embossed untuk kesan premium.',
    category: 'desain'
  },
  {
    id: 'faq-denim-harga',
    question: 'Berapa harga tote bag denim custom?',
    answer: 'Harga tote bag denim dihitung berdasarkan jumlah pesanan (qty) dan aksesoris penutup seperti resleting YKK atau patch kulit. Hubungi admin kami untuk konsultasi sampel gratis dan penawaran harga terbaik.',
    category: 'pemesanan'
  }
];

export const satinFaqs: FAQItem[] = [
  {
    id: 'faq-satin-sublimasi',
    question: 'Apa keunggulan tote bag satin printing sublimasi full color?',
    answer: 'Keunggulan terbesarnya adalah kebebasan desain grafis: Anda dapat mencetak desain foto beresolusi tinggi, gradasi warna rumit, motif batik, hingga ilustrasi seni 360 derajat tanpa batasan jumlah warna dengan hasil warna yang menyala tajam dan mengkilap mewah.',
    category: 'desain'
  },
  {
    id: 'faq-satin-luntur',
    question: 'Apakah hasil cetak sublimasi pada kain satin bisa luntur atau mengelupas?',
    answer: 'Tidak sama sekali. Proses cetak sublimasi menggunakan tinta khusus yang dipanaskan dengan mesin heat-press bertekanan tinggi hingga zat warna meresap permanen ke dalam serat poliester satin. Tas aman dicuci berulang kali tanpa risiko mengelupas atau pudar.',
    category: 'bahan'
  },
  {
    id: 'faq-satin-furing',
    question: 'Apakah tote bag satin dilapisi furing di bagian dalam?',
    answer: 'Ya, seluruh tote bag satin kami dilapisi kain furing di bagian dalam (bisa menggunakan furing asahi atau furing spunbond tebal) agar tas memiliki struktur yang kokoh, tidak lemas, dan sambungan jahitan dalam tertutup rapi.',
    category: 'bahan'
  },
  {
    id: 'faq-satin-harga',
    question: 'Berapa minimal order dan harga tote bag satin sublimasi?',
    answer: 'Minimal order sangat fleksibel mulai dari 50 pcs. Harga disesuaikan dengan kuantiti pesanan dan ukuran tas. Konsultasikan konsep desain Anda dengan desainer kami via WhatsApp untuk mockup digital gratis.',
    category: 'pemesanan'
  }
];

export const corporateFaqs: FAQItem[] = [
  {
    id: 'faq-corp-tujuan',
    question: 'Mengapa perusahaan membutuhkan tote bag custom?',
    answer: 'Tote bag custom di niche pengadaan kami berfungsi sebagai merchandise onboarding kit karyawan baru, tas seminar & rapat kerja tahunan, souvenir pameran dagang (expo), serta corporate gift untuk memperkuat citra profesional brand di hadapan klien dan mitra strategis.',
    category: 'umum'
  },
  {
    id: 'faq-corp-bahan',
    question: 'Bahan tote bag apa yang paling direkomendasikan untuk perusahaan?',
    answer: 'Pilihan bahan disesuaikan dengan kebutuhan: Canvas Twill 12 oz untuk onboarding karyawan & gift elegan, Kulit Sintetis PU untuk apresiasi direksi/VIP, Blacu Super untuk pelatihan internal beranggaran terukur, dan Spunbond 75–100 GSM untuk goodie bag pameran akbar.',
    category: 'bahan'
  },
  {
    id: 'faq-corp-harga',
    question: 'Berapa harga tote bag perusahaan dan bagaimana penyesuaian anggarannya?',
    answer: 'Harga tote bag perusahaan dihitung bertingkat mengikuti kuantiti (qty) order, pilihan bahan, dan opsi cetak. Kami memahami bahwa setiap divisi HRD dan Procurement memiliki pagu anggaran tertentu, sehingga harga custom selalu bisa disesuaikan dengan alokasi budget pengadaan kantor Anda. Silakan hubungi admin kami via WhatsApp untuk mendapatkan Surat Penawaran Resmi (Quotation) lengkap.',
    category: 'pemesanan'
  },
  {
    id: 'faq-corp-legalitas',
    question: 'Apakah pengadaan perusahaan dilengkapi invoice dan dokumen resmi B2B?',
    answer: 'Ya, kami melayani transaksi pengadaan B2B resmi dengan kelengkapan invoice penagihan resmi, kuitansi bermaterai, dan dokumen pendukung tender pengadaan kantor.',
    category: 'pemesanan'
  },
  {
    id: 'faq-corp-sample',
    question: 'Apakah bisa membuat sampel fisik (sample proofing) sebelum produksi massal?',
    answer: 'Tentu bisa. Untuk memastikan kepuasan divisi Anda terhadap dimensi tas, kerapian jahitan, dan akurasi warna logo, kami menyediakan opsi pembuatan 1 pcs sampel fisik sebelum pengerjaan massal berjalan.',
    category: 'pemesanan'
  }
];

export const seminarFaqs: FAQItem[] = [
  {
    id: 'faq-seminar-contoh-paket',
    question: 'Apa saja contoh paket seminar kit yang umum dipesan?',
    answer: 'Paket seminar kit yang paling sering dipesan oleh panitia kampus, instansi dinas, dan korporat meliputi: (1) Tote bag custom (kain blacu, spunbond, atau canvas) berlogo acara sebagai wadah utama; (2) Buku catatan (blocknote seminar); (3) Pulpen promosi berlogo; (4) Tali lanyard & ID card panitia/peserta; serta (5) Botol tumbler minum atau flashdisk card materi seminar.',
    category: 'umum'
  },
  {
    id: 'faq-seminar-jenis-totebag',
    question: 'Apa saja jenis-jenis tote bag yang cocok untuk seminar?',
    answer: 'Ada 3 jenis utama: (1) Tote Bag Blacu: Favorit untuk seminar akademik karena bernuansa alami, vintage, ramah lingkungan, dan harganya ekonomis; (2) Tote Bag Spunbond: Pilihan paling hemat untuk seminar massal ribuan peserta; dan (3) Tote Bag Canvas Twill: Pilihan prestisius untuk seminar eksekutif dan konferensi VIP.',
    category: 'bahan'
  },
  {
    id: 'faq-seminar-perlengkapan-wajib',
    question: 'Perlengkapan untuk seminar apa saja yang wajib disiapkan panitia?',
    answer: 'Perlengkapan utama yang wajib disiapkan adalah: goodie bag / tote bag seminar berlogo agar peserta nyaman membawa berkas, ID card nametag, modul atau lembar materi catatan, sertifikat kelulusan seminar (ukuran A4 yang pas masuk ke tas kami), dan souvenir cinderamata pembicara/peserta.',
    category: 'umum'
  },
  {
    id: 'faq-seminar-harga-paket',
    question: 'Berapa harga paket tote bag seminar kit?',
    answer: 'Harga tote bag seminar di workshop kami biasanya mulai dari Rp5.000 – Rp12.000-an untuk bahan spunbond, Rp14.000 – Rp22.000-an untuk blacu super, dan mulai Rp30.000-an untuk canvas custom. Namun harga sangat mengikuti kuantiti (qty) order dan tergantung bahan yang digunakan juga. Semakin banyak jumlah pesanan, harga per unit akan semakin murah dan anggaran panitia bisa disesuaikan secara fleksibel langsung dengan menghubungi admin kami via WhatsApp.',
    category: 'pemesanan'
  },
  {
    id: 'faq-seminar-leadtime',
    question: 'Berapa lama estimasi pengerjaan tote bag seminar sebelum hari H acara?',
    answer: 'Waktu produksi standar adalah 7 hingga 10 hari kerja setelah approval mockup desain dan konfirmasi DP. Bagi panitia yang membutuhkan pesanan mendesak (rush order), kami memiliki jalur kilat 3–5 hari kerja tergantung ketersediaan antrean mesin jahit di workshop Malang.',
    category: 'pemesanan'
  }
];

export const pricingFaqs: FAQItem[] = [
  {
    id: 'faq-pricing-kisaran',
    question: 'Totebag harganya berapa di konveksi kami?',
    answer: 'Di konveksi Tote Bag Malang kami, harga tote bag biasanya mulai dari Rp30.000-an untuk bahan canvas standar berkualitas. Namun, harga sangat mengikuti kuantiti (qty) order dan tergantung bahan yang digunakan juga. Untuk bahan spunbond harga mulai Rp5.000-an, blacu mulai Rp14.000-an, canvas mulai Rp30.000-an, dan kulit sintetis mulai Rp45.000-an. Semua harga custom bisa disesuaikan dengan kebutuhan dan pagu anggaran Anda; silakan langsung hubungi admin kami untuk konsultasi cepat.',
    category: 'pemesanan'
  },
  {
    id: 'faq-pricing-vs-retail',
    question: 'Berapa harga tote bag custom di Tote Bag Malang dibanding toko ritel?',
    answer: 'Berbeda dengan toko ritel yang menjual tas jadi polos tanpa logo dengan ukuran dan stok terbatas, di Tote Bag Malang (konveksi langsung), Anda mendapatkan tote bag custom berlogo identitas brand/acara Anda dengan harga grosir produsen langsung. Harga di tempat kami mulai dari Rp30.000-an untuk canvas custom (bahkan di bawah Rp10.000 untuk spunbond), dengan harga satuan yang semakin murah seiring bertambahnya kuantiti pesanan Anda.',
    category: 'pemesanan'
  },
  {
    id: 'faq-pricing-vs-paperbag',
    question: 'Berapa harga cetak paper bag custom di workshop kami dibanding tote bag kain?',
    answer: 'Di workshop kami, paper bag yang kami produksi adalah versi premium (menggunakan kertas Art Carton tebal 210–260 GSM, laminasi doff/glossy eksklusif, tali kur/pita tebal, dan opsi hot print foil emas) dengan kisaran harga mulai Rp25.000-an. Kami tidak mengerjakan paper bag tipis murah Rp3.000 – Rp8.000 karena tidak sesuai dengan standar kualitas target market korporat & B2B kami. Sebagai alternatif berdaya tahan jangka panjang dengan kisaran harga setara (mulai Rp30.000-an), tote bag canvas custom sangat kami rekomendasikan karena dapat dicuci dan digunakan berulang kali selama bertahun-tahun.',
    category: 'pemesanan'
  },
  {
    id: 'faq-pricing-faktor-penentu',
    question: 'Faktor apa saja yang menentukan harga tote bag custom?',
    answer: 'Penentu harga utama meliputi: (1) Kuantiti (Qty) order: makin banyak makin murah; (2) Pilihan bahan kain: spunbond, blacu, canvas, atau kulit sintetis; (3) Dimensi tas dan penambahan alas (gusset); (4) Kerumitan teknik cetak: sablon manual 1-3 warna atau digital DTF full-color; dan (5) Fitur aksesoris seperti resleting, furing dalam, atau kancing magnet.',
    category: 'bahan'
  },
  {
    id: 'faq-pricing-quotation-b2b',
    question: 'Bagaimana cara meminta penawaran harga resmi (Quotation) untuk pengadaan kantor?',
    answer: 'Anda cukup mengirimkan rincian jumlah tas yang dibutuhkan, pilihan bahan, dan file logo kepada admin kami via WhatsApp. Tim kami akan segera menerbitkan Surat Penawaran Resmi (Quotation / RFQ) transparan lengkap dengan invoice dan opsi legalitas pengadaan kantor.',
    category: 'pemesanan'
  }
];

export const faqs: FAQItem[] = [
  ...canvasFaqs,
  ...blacuFaqs,
  ...spunbondFaqs,
  ...leatherFaqs,
  ...corporateFaqs,
  ...seminarFaqs,
  ...pricingFaqs,
  {
    id: 'faq-moq',
    question: 'Berapa jumlah minimal pemesanan (MOQ) untuk tote bag custom?',
    answer: 'Minimal pemesanan fleksibel disesuaikan dengan jenis bahan. Untuk Tote Bag Canvas dan Blacu, pesanan dimulai dari 50 pcs. Untuk Spunbond, MOQ mulai dari 100 pcs. Untuk Tote Bag Kulit Sintetis VIP, MOQ mulai dari 30 pcs. Kami juga melayani pesanan hingga ribuan unit untuk agenda konferensi dan event nasional.',
    category: 'pemesanan'
  },
  {
    id: 'faq-leadtime',
    question: 'Berapa lama estimasi waktu pengerjaan produksi tote bag?',
    answer: 'Rata-rata waktu pengerjaan berkisar antara 7 hingga 14 hari kerja setelah approval mock-up desain final dan konfirmasi DP. Untuk pesanan kilat (rush order) di bawah 7 hari, silakan konsultasikan jadwal operasional mesin jahit kami melalui WhatsApp.',
    category: 'pemesanan'
  },
  {
    id: 'faq-format-desain',
    question: 'Format file logo atau desain apa yang disarankan untuk dikirim?',
    answer: 'Format file berbasis vektor sangat disarankan, seperti Adobe Illustrator (.AI), CorelDraw (.CDR), atau PDF Vector dengan teks yang sudah di-create outline. Jika menggunakan file gambar raster (.PNG atau .PSD), pastikan resolusi minimal 300 DPI dengan latar belakang transparan.',
    category: 'desain'
  },
  {
    id: 'faq-pengiriman',
    question: 'Bagaimana pengiriman pesanan jika pemesan berada di luar Kota Malang?',
    answer: 'Workshop kami berbasis di Malang, Jawa Timur. Untuk pemesan luar kota (Surabaya, Jakarta, Bandung, Yogyakarta, Denpasar, Makassar, Medan, dsb.), kami bekerja sama dengan berbagai kargo darat, laut, dan udara terpercaya (seperti Baraka Sarana Tama, Dakota Cargo, J&T Cargo, KALOG, Indah Logistik) dengan ongkos kirim yang ekonomis untuk paket berat ratusan tas.',
    category: 'umum'
  }
];

export const cityServices: CityService[] = [
  {
    slug: 'malang',
    cityName: 'Malang',
    province: 'Jawa Timur',
    badge: 'Workshop & Basis Produksi',
    title: 'Layanan Pengadaan Tote Bag Custom Kota Malang & Sekitarnya',
    tagline: 'Kunjungan workshop langsung di Kedungkandang, kurir instan, dan penjemputan mandiri tanpa biaya kirim.',
    overview: 'Sebagai basis operasional dan workshop garmen kami di Kedungkandang Malang, klien di wilayah Malang Raya menikmati keunggulan komunikasi langsung dengan tim pola potong dan operator sablon. Tersedia opsi melihat sampel kain fisik, penjemputan barang mandiri (self pickup), atau pengiriman lokal sameday langsung ke kantor/kampus Anda.',
    districts: [
      'Klojen (Pusat Kota, Alun-Alun, Ijen)',
      'Blimbing (Arjosari, Pandanwangi, Polowijen)',
      'Kedungkandang (Buring, Wonokoyo, Sawojajar, Kota Lama)',
      'Lowokwaru (Dinoyo, Jatimulyo, Tlogomas, Kampus UB, UM, Polinema)',
      'Sukun (Bandungrejosari, Gadang, Tanjungrejo)',
      'Kota Batu (Batu, Bumiaji, Junrejo)',
      'Kabupaten Malang (Singosari, Lawang, Kepanjen, Pakis, Dau)'
    ],
    leadTimeDelivery: 'Sameday (1–3 Jam via Kurir Lokal) / Pickup Workshop',
    routeHighlight: 'Jalur Langsung Lokal Malang Raya',
    expeditions: [
      {
        name: 'Self Pickup Workshop',
        type: 'Kurir Instan',
        eta: 'Langsung diambil setelah QC selesai',
        description: 'Bebas ongkos kirim. Tim Anda dapat mengambil langsung pesanan di workshop Kedungkandang, Malang.'
      },
      {
        name: 'Kurir Internal / Lalamove / GrabExpress',
        type: 'Kurir Instan',
        eta: '1 - 3 Jam Tiba',
        description: 'Pengiriman door-to-door langsung ke alamat kantor, kampus, atau venue hotel di seluruh Malang Raya.'
      },
      {
        name: 'Pick-up Mobil Barang Lokal',
        type: 'Kurir Instan',
        eta: 'Sesuai kesepakatan jam drop-off',
        description: 'Untuk pesanan di atas 1.000 pcs, kami sediakan opsi armada roda 4 untuk drop langsung ke lokasi event Anda.'
      }
    ],
    shippingProcess: [
      {
        step: 1,
        title: 'QC & Perhitungan Unit',
        desc: 'Setiap tote bag diperiksa kerapian jahitannya dan dibundel kelipatan 10 atau 25 unit agar mudah dihitung.'
      },
      {
        step: 2,
        title: 'Inner Polybag & Karung Segel',
        desc: 'Dibungkus plastik tebal pelindung debu/air dan dimasukkan ke karung goni/dus bersegel lakban kuat.'
      },
      {
        step: 3,
        title: 'Konfirmasi Siap Ambil / Kirim',
        desc: 'Foto paket dan timbangan dikirimkan ke WhatsApp Anda sebelum diserahkan ke kurir atau diambil tim Anda.'
      }
    ],
    packingStandard: [
      'Plastik inner wrap kedap udara per 10-25 pcs',
      'Karung tebal luar / box karton double-wall',
      'Segel lakban security & label identitas PO resmi',
      'Slip delivery order (Surat Jalan) rangkap untuk verifikasi penerima'
    ],
    pickupAvailable: true,
    minOrderRecommendation: '50 Pcs'
  },
  {
    slug: 'surabaya',
    cityName: 'Surabaya',
    province: 'Jawa Timur',
    badge: 'Hub Korporat Jawa Timur',
    title: 'Pengadaan & Pengiriman Tote Bag Custom ke Surabaya & Sidoarjo',
    tagline: 'Pengiriman cepat via Tol Trans Jawa (1 hari sampai), ekspedisi kargo resmi, atau shuttle pool-to-door.',
    overview: 'Surabaya merupakan kota tujuan pengiriman rutin harian kami untuk instansi pemerintah Jawa Timur, perusahaan multinasional di kawasan Rungkut/SIER, serta kampus-kampus besar seperti ITS, Unair, dan Unesa. Berkat akses Jalan Tol Malang - Pandaan - Surabaya, pesanan dapat tiba dalam waktu 1 hari kerja setelah selesai produksi.',
    districts: [
      'Surabaya Pusat (Tegalsari, Genteng, Bubutan, Simokerto)',
      'Surabaya Timur (Gubeng, Sukolilo, Rungkut, Mulyorejo, Tenggilis Mejoyo)',
      'Surabaya Selatan (Wonokromo, Wonocolo, Gayungan, Jambangan, Sawahan, Karang Pilang)',
      'Surabaya Barat (Tandes, Sambikerep, Lakarsantri, Dukuh Pakis, Sukomanunggal)',
      'Surabaya Utara (Pabean Cantikan, Semampir, Cantian, Kenjeran)',
      'Area Penyangga: Sidoarjo (Waru, Sedati, Buduran, Candi, Gedangan) & Gresik'
    ],
    leadTimeDelivery: '1 Hari (Next Day / Same Day Kargo)',
    routeHighlight: 'Tol Trans Jawa (Malang - Surabaya 1.5 - 2 Jam Tempuh)',
    expeditions: [
      {
        name: 'KALOG (Kereta Api Logistik)',
        type: 'Kereta Api',
        eta: '1 Hari (Stasiun Gubeng / Pasar Turi)',
        description: 'Biaya sangat terjangkau untuk partai besar dengan pengambilan di pool stasiun atau diantar door-to-door.'
      },
      {
        name: 'Baraka Sarana Tama & Indah Logistik',
        type: 'Kargo Darat',
        eta: '1 Hari Kerja (Door to Door)',
        description: 'Kargo darat armada truk reguler harian dari Malang menuju kantor/gudang Anda di Surabaya.'
      },
      {
        name: 'Travel / Shuttle Bus Kilat',
        type: 'Travel / Shuttle',
        eta: 'Sameday (4 - 6 Jam Tiba)',
        description: 'Opsi darurat untuk seminar kit mendesak, diambil di pool shuttle Surabaya (misal: Arjuno, Diponegoro, Waru).'
      }
    ],
    shippingProcess: [
      {
        step: 1,
        title: 'QC & Packaging Kedap Air',
        desc: 'Tas dikelompokkan per ukuran dan warna, dibungkus plastik pelindung dan karung kargo berlapis.'
      },
      {
        step: 2,
        title: 'Drop ke Pool Kargo Malang',
        desc: 'Barang diserahkan ke agen ekspedisi sore hari untuk langsung berangkat malam melintasi Tol Trans Jawa.'
      },
      {
        step: 3,
        title: 'Penerbitan Resi & Tracking WhatsApp',
        desc: 'Nomor resi fisik / digital langsung kami teruskan ke PIC logistik Anda untuk pemantauan posisi paket.'
      },
      {
        step: 4,
        title: 'Drop Door-to-Door di Surabaya',
        desc: 'Kurir kargo mengantar langsung ke gedung kantor, resepsionis, atau venue acara Anda di Surabaya.'
      }
    ],
    packingStandard: [
      'Inner wrap polybag per bundel',
      'Karung kargo berlapis plastik tahan benturan dan cuaca',
      'Label resi kargo jelas mencantumkan PIC & No Telepon Surabaya',
      'Dilengkapi invoice & surat jalan resmi untuk tim finance / procurement'
    ],
    pickupAvailable: false,
    minOrderRecommendation: '50 - 100 Pcs'
  },
  {
    slug: 'jakarta',
    cityName: 'DKI Jakarta',
    province: 'DKI Jakarta',
    badge: 'Pusat Perusahaan & Event Nasional',
    title: 'Layanan Pengadaan Tote Bag Custom untuk Jakarta & Jabodetabek',
    tagline: 'Kargo darat terstruktur, ekspedisi kereta ekspres, atau kargo udara untuk event perusahaan ibu kota.',
    overview: 'Melayani pengadaan rutin merchandise seminar nasional, onboarding kit perusahaan unicorn di SCBD/Mega Kuningan, BUMN, hingga kementerian di DKI Jakarta. Meskipun produksi bertempat di Malang dengan keunggulan biaya garmen yang kompetitif, rantai logistik kargo darat dan kereta api menjamin pengiriman ke Jakarta berjalan aman, terprediksi, dan berbiaya hemat per unit.',
    districts: [
      'Jakarta Selatan (Kebayoran Baru, Cilandak, Setiabudi, Tebet, Pasar Minggu, Pancoran, Mampang)',
      'Jakarta Pusat (Gambir, Tanah Abang, Menteng, Senen, Kemayoran, Sawah Besar)',
      'Jakarta Barat (Grogol Petamburan, Palmerah, Kebon Jeruk, Kembangan, Kalideres)',
      'Jakarta Timur (Matraman, Jatinegara, Duren Sawit, Pulogadung, Cakung, Kramat Jati)',
      'Jakarta Utara (Kelapa Gading, Tanjung Priok, Penjaringan, Pademangan)',
      'Area Penyangga (BODETABEK): Tangerang Selatan (BSD, Bintaro), Bekasi, Depok, Bogor'
    ],
    leadTimeDelivery: '1–3 Hari Kerja (Tergantung Pilihan Moda Kargo)',
    routeHighlight: 'Jalur Kargo Trans Jawa & Jalur Rel Kereta Ekspedisi',
    expeditions: [
      {
        name: 'Kereta Kargo Ekspres (KALOG / Herona / KI8)',
        type: 'Kereta Api',
        eta: '1 - 2 Hari Tiba (Stasiun Jakarta Kota / Manggarai / Senen)',
        description: 'Jalur rel kereta tanpa risiko macet jalan raya, sangat presisi untuk event dengan tenggat ketat.'
      },
      {
        name: 'Baraka Sarana Tama & Dakota Cargo',
        type: 'Kargo Darat',
        eta: '2 - 3 Hari Kerja (Door to Door)',
        description: 'Pilihan paling hemat untuk pengiriman muatan 500 sampai puluhan ribu tas langsung ke kantor/gudang Jakarta.'
      },
      {
        name: 'Kargo Udara (Garuda / Lion Cargo / Port to Door)',
        type: 'Kargo Udara',
        eta: '1 Hari (Sameday / Nextday)',
        description: 'Untuk kebutuhan mendesak H-1 atau H-2 acara di Jakarta dengan prioritas penanganan kargo udara.'
      }
    ],
    shippingProcess: [
      {
        step: 1,
        title: 'QC Ketat Sebelum Packing',
        desc: 'Memastikan tidak ada cacat sablon atau sisa benang, tas dilipat presisi untuk menghemat volume timbangan kargo.'
      },
      {
        step: 2,
        title: 'Heavy-Duty Packaging',
        desc: 'Pembungkusan ganda (plastik dalam + karung tebal segel) untuk melindungi tas dari gesekan selama perjalanan lintas provinsi.'
      },
      {
        step: 3,
        title: 'Pengiriman Resi & Pemantauan',
        desc: 'Foto timbangan kargo, bukti serah terima ekspedisi, dan nomor AWB/resi dibagikan ke WhatsApp klien.'
      },
      {
        step: 4,
        title: 'Serah Terima di Alamat Jakarta',
        desc: 'Pengantaran langsung ke lobi kantor, gudang logistik, atau venue hotel di kawasan Jakarta.'
      }
    ],
    packingStandard: [
      'Plastik kedap udara pembungkus dalam',
      'Karung anyaman plastik tebal / karton tebal bersudut aman',
      'Penandaan Fragile / Handle With Care & Bebas Air',
      'Lampiran invoice faktur pajak resmi di dalam dan luar paket'
    ],
    pickupAvailable: false,
    minOrderRecommendation: '100 Pcs'
  },
  {
    slug: 'bandung',
    cityName: 'Bandung',
    province: 'Jawa Barat',
    badge: 'Kota Kreatif & Akademisi',
    title: 'Pengadaan Tote Bag Custom untuk Kampus & Komunitas Bandung',
    tagline: 'Solusi tote bag canvas, blacu, dan spunbond untuk pameran kreatif, seminar universitas, dan brand ritel.',
    overview: 'Bandung dikenal sebagai pusat industri kreatif dan perguruan tinggi terkemuka (ITB, Unpad, Telkom University, Parahyangan). Kami rutin menyuplai tas tote bag custom untuk himpunan mahasiswa, festival seni, serta brand clothing lokal yang memerlukan standar jahit rapi dan cetak DTF bergradasi halus.',
    districts: [
      'Bandung Kota (Coblong, Dago, Sukasari, Cidadap, Bandung Wetan)',
      'Bandung Pusat & Selatan (Sumur Bandung, Regol, Lengkong, Batununggal, Buahbatu)',
      'Bandung Timur (Kiaracondong, Antapani, Arcamanik, Cibiru)',
      'Bandung Barat & Cimahi (Cicendo, Andir, Sukajadi, Cimahi Utara/Tengah/Selatan)',
      'Area Kampus Jatinangor (Kabupaten Sumedang)'
    ],
    leadTimeDelivery: '2–3 Hari Kerja (Kargo Darat / Kereta Api)',
    routeHighlight: 'Jalur Kargo Jawa Barat via Kereta Api & Tol Trans Jawa',
    expeditions: [
      {
        name: 'Kargo Kereta Api (KALOG Stasiun Bandung)',
        type: 'Kereta Api',
        eta: '1 - 2 Hari Kerja',
        description: 'Tiba di Stasiun Hall Bandung atau Stasiun Kiaracondong, bisa diambil atau lanjut kurir lokal.'
      },
      {
        name: 'J&T Cargo / Indah Kargo Bandung',
        type: 'Kargo Darat',
        eta: '2 - 3 Hari Kerja (Door to Door)',
        description: 'Tarif bersahabat per kilogram dengan fasilitas pengantaran langsung ke sekretariat atau kantor.'
      }
    ],
    shippingProcess: [
      {
        step: 1,
        title: 'Pemeriksaan Hasil Cetak',
        desc: 'Uji visual sablon/DTF untuk memastikan warna akurat sesuai panduan brandbook kampus/perusahaan.'
      },
      {
        step: 2,
        title: 'Packing Khusus Kelembapan',
        desc: 'Dilindungi bungkus anti lembap agar kondisi kain tetap bersih dan tidak berbau saat tiba di Bandung.'
      },
      {
        step: 3,
        title: 'Notifikasi Ekspedisi',
        desc: 'Update berkala posisi kargo di jalur darat Jawa Tengah - Jawa Barat hingga tiba di alamat tujuan.'
      }
    ],
    packingStandard: [
      'Inner wrap polybag kedap air',
      'Karung lapis ganda / corrugated carton box',
      'Segel lakban full body & surat jalan resmi'
    ],
    pickupAvailable: false,
    minOrderRecommendation: '50 Pcs'
  },
  {
    slug: 'yogyakarta',
    cityName: 'Yogyakarta',
    province: 'D.I. Yogyakarta',
    badge: 'Pusat Kebudayaan & Konferensi',
    title: 'Pengadaan Tote Bag Seminar & Workshop Custom Yogyakarta',
    tagline: 'Koneksi jalur kereta logistik kilat (1 hari sampai) untuk event kampus UGM, UNY, UII, dan hotel MICE Jogja.',
    overview: 'Yogyakarta adalah salah satu destinasi MICE (Meeting, Incentive, Convention, and Exhibition) terbesar di Indonesia. Koneksi kereta api logistik antara Stasiun Malang Kota Baru dan Stasiun Lempuyangan/Tugu Yogyakarta menjadikan pengiriman tote bag seminar dari workshop kami sangat cepat, aman, dan hemat biaya.',
    districts: [
      'Kota Yogyakarta (Gondokusuman, Danurejan, Gedongtengen, Kraton, Mergangsan, Umbulharjo)',
      'Kabupaten Sleman (Depok, Kaliurang, Mlati, Gamping, Ngaglik - Area Kampus UGM, UNY, UPN, UII)',
      'Kabupaten Bantul (Kasihan, Banguntapan, Sewon - Area Kampus ISI, UMY)',
      'Area Kulon Progo & Gunungkidul'
    ],
    leadTimeDelivery: '1–2 Hari Kerja (Sangat Cepat via Kereta Api)',
    routeHighlight: 'Jalur Langsung Kereta Api Malang - Solo - Yogyakarta',
    expeditions: [
      {
        name: 'Kereta Logistik KALOG / Lintas Ekspedisi KA',
        type: 'Kereta Api',
        eta: '1 Hari Kerja (Stasiun Lempuyangan / Tugu)',
        description: 'Estimasi tercepat dengan biaya sangat ekonomis untuk paket puluhan hingga ratusan kilogram.'
      },
      {
        name: 'Baraka / Dakota / Indah Cargo Jogja',
        type: 'Kargo Darat',
        eta: '1 - 2 Hari Kerja (Door to Door)',
        description: 'Armada kargo mengantar langsung ke lobi hotel tempat konferensi atau kampus di Sleman/Bantul.'
      }
    ],
    shippingProcess: [
      {
        step: 1,
        title: 'Penghitungan & Labeling Batch',
        desc: 'Setiap paket dilabeli sesuai jumlah isi untuk memudahkan panitia seminar melakukan inventarisasi.'
      },
      {
        step: 2,
        title: 'Pengiriman Sore ke Stasiun',
        desc: 'Paket diberangkatkan menggunakan gerbong kereta kargo malam hari menuju Yogyakarta.'
      },
      {
        step: 3,
        title: 'Drop ke Hotel / Kampus',
        desc: 'Koordinasi dengan tim penerima di Jogja untuk memastikan paket sampai sebelum registrasi peserta dimulai.'
      }
    ],
    packingStandard: [
      'Plastik bungkus dalam per 25 pcs',
      'Karung kargo berlapis lakban erat anti-robek',
      'Pemberian tanda instruksi penyimpanan kering'
    ],
    pickupAvailable: false,
    minOrderRecommendation: '50 Pcs'
  },
  {
    slug: 'semarang',
    cityName: 'Semarang',
    province: 'Jawa Tengah',
    badge: 'Kawasan Industri & Pemerintahan Jateng',
    title: 'Layanan Pengadaan Tote Bag Custom untuk Semarang & Sekitarnya',
    tagline: 'Pengiriman via Tol Trans Jawa (1–2 hari kerja) untuk kantor instansi, kawasan industri, dan event MICE.',
    overview: 'Menyediakan pengadaan tas seminar dan souvenir instansi pemerintah provinsi Jawa Tengah serta perusahaan manufaktur di Semarang. Melalui jalur Tol Trans Jawa yang terhubung penuh dari Malang, pengiriman partai besar berjalan lancar dengan kepastian jadwal tiba.',
    districts: [
      'Semarang Tengah (Pandanaran, Simpang Lima, Pekunden, Sekayu)',
      'Semarang Barat (Krobokan, Tawangmas, Kawasan Industri Candi)',
      'Semarang Selatan & Gajahmungkur (Pusat Kantor Pemerintahan)',
      'Banyumanik & Tembalang (Area Kampus Undip & Polines)',
      'Semarang Timur, Pedurungan, Genuk (Kawasan Industri Terboyo)',
      'Area Penyangga: Ungaran, Demak, Kendal'
    ],
    leadTimeDelivery: '1–2 Hari Kerja',
    routeHighlight: 'Jalur Tol Trans Jawa (Malang - Solo - Semarang)',
    expeditions: [
      {
        name: 'Baraka Sarana Tama & J&T Cargo',
        type: 'Kargo Darat',
        eta: '1 - 2 Hari Kerja (Door to Door)',
        description: 'Kargo darat langsung menuju kantor atau pabrik di kawasan Semarang dan sekitarnya.'
      },
      {
        name: 'KALOG Kereta Api Logistik',
        type: 'Kereta Api',
        eta: '1 - 2 Hari (Stasiun Semarang Poncol / Tawang)',
        description: 'Solusi ekonomis untuk barang berat partai ratusan tas tanpa risiko hambatan jalan raya.'
      }
    ],
    shippingProcess: [
      {
        step: 1,
        title: 'Sortir Akhir & Pengepakan',
        desc: 'Pengecekan kesesuaian faktur PO dan packing bertingkat untuk perlindungan maksimal.'
      },
      {
        step: 2,
        title: 'Penimbangan & Cetak Resi',
        desc: 'Penimbangan transparan dan pengiriman resi pengiriman kargo ke kontak WA pengadaan Anda.'
      },
      {
        step: 3,
        title: 'Pengantaran ke Lokasi Anda',
        desc: 'Barang diantar oleh kurir kargo langsung ke titik drop penerimaan barang kantor Anda di Semarang.'
      }
    ],
    packingStandard: [
      'Plastik pelindung basah & debu',
      'Karung kargo tebal berkode manifest kargo',
      'Surat jalan resmi dalam kantung plastik terpisah'
    ],
    pickupAvailable: false,
    minOrderRecommendation: '50 Pcs'
  }
];

export function getWhatsAppUrl(context: {
  productName?: string;
  categoryName?: string;
  estimatedQty?: string | number;
  notes?: string;
  sourcePage?: string;
}) {
  const number = businessProfile.whatsappNumber;
  let text = `Halo tim ToteBag.web.id,\n`;

  if (context.productName) {
    text += `Saya ingin konsultasi spesifikasi dan meminta penawaran untuk produk: *${context.productName}*.\n`;
  } else if (context.categoryName) {
    text += `Saya ingin konsultasi pemesanan tote bag bahan: *${context.categoryName}*.\n`;
  } else {
    text += `Saya ingin meminta penawaran pemesanan tote bag custom untuk kebutuhan perusahaan / event.\n`;
  }

  if (context.estimatedQty) {
    text += `Estimasi kuantiti: ${context.estimatedQty} pcs\n`;
  }

  if (context.notes) {
    text += `Catatan tambahan: ${context.notes}\n`;
  }

  if (context.sourcePage) {
    text += `(Referensi halaman: ${context.sourcePage})\n`;
  }

  text += `Mohon info ketersediaan antrean jadwal produksi dan estimasi biayanya. Terima kasih.`;

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
