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
    imageUrl: '/media/canvas-hero.svg'
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
    imageUrl: '/media/fabric-dinir-cordura.svg'
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
    imageUrl: '/media/blacu-hero.svg'
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
    imageUrl: '/media/spunbond-hero.svg'
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
    imageUrl: '/media/foto-mika.jpg'
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
    imageUrl: '/media/foto-denim.jpg'
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
    imageUrl: '/media/foto-satin.jpg'
  }
];

export const products: Product[] = [
  {
    id: 'sku-canvas-01',
    slug: 'tote-bag-canvas-premium-twill',
    name: 'Tote Bag Canvas Twill Premium',
    categorySlug: 'tote-bag-canvas',
    categoryName: 'Canvas',
    material: 'Canvas Twill 12 oz Tebal',
    dimensions: '35 cm (L) × 40 cm (T) × 10 cm (Alas/Gusset)',
    tali: 'Webbing Katun Tebal 3.8 cm (Panjang 60 cm)',
    features: ['Alas bawah 10 cm', 'Kompartemen utama luas', 'Jahitan double-stitch kuat', 'Opsi resleting YKK / Magnet lock'],
    techniques: ['Sablon Manual Rubber', 'Cetak DTF Full Color', 'Bordir Komputer Presisi'],
    description: 'Tote bag canvas berstandar korporat dengan kain canvas twill 12 oz pilihan. Ketebalan kain menjamin tas berdiri kokoh saat ditaruh di meja serta sanggup membawa laptop 14 inci beserta map dokumen tebal tanpa kendur.',
    usage: ['Merchandise Onboarding Karyawan', 'Konferensi Bisnis', 'Souvenir Premium'],
    imageUrl: '/media/product-canvas-twill.svg',
    altText: 'Tote Bag Canvas Twill Premium warna forest green dengan tali katun tebal',
    highlight: 'Paling diminati untuk corporate gift dan seminar eksekutif.',
    specTable: {
      material: 'Canvas Twill 100% Cotton (12 oz)',
      gramasi: '±340 - 360 gsm',
      ukuranStandard: '35 × 40 × 10 cm (Custom ukuran tersedia)',
      pilihanTali: 'Webbing Katun 3.8 cm / Bahan Senada',
      pilihanPenutup: 'Resleting YKK / Kancing Magnet / Terbuka',
      opsiCetak: 'Sablon Plastisol, DTF Full Color, Bordir Komputer',
      rekomendasiQty: '50 - 1.000+ pcs',
      estimasiPengerjaan: '7 - 14 hari kerja (disesuaikan kuantiti & antrean)'
    }
  },
  {
    id: 'sku-canvas-02',
    slug: 'tote-bag-canvas-greige-natural',
    name: 'Tote Bag Canvas Greige Natural',
    categorySlug: 'tote-bag-canvas',
    categoryName: 'Canvas',
    material: 'Canvas Greige Natural 10 oz',
    dimensions: '30 cm (L) × 38 cm (T)',
    tali: 'Tali Katun Salur 3 cm (Panjang 55 cm)',
    features: ['Warna natural broken white', 'Serat kain padat', 'Ringan dan awet', 'Saku gantung dalam opsional'],
    techniques: ['Sablon Rubber 1-4 Warna', 'Cetak DTF Full Color'],
    description: 'Model flat tote bag klasik dengan warna kain alami tanpa zat pewarna buatan. Memberikan nuansa ramah lingkungan yang modern dan sangat cocok dipadukan dengan desain grafis minimalis bergaya arsitektural maupun tipografi.',
    usage: ['Event Komunitas Kreatif', 'Merchandise Kampus', 'Packaging Butik'],
    imageUrl: '/media/product-canvas-greige.svg',
    altText: 'Tote Bag Canvas Greige Natural warna broken white dengan sablon minimalis',
    highlight: 'Nuansa estetika natural organik dengan biaya efisien.',
    specTable: {
      material: 'Canvas Greige Unbleached (10 oz)',
      gramasi: '±280 - 300 gsm',
      ukuranStandard: '30 × 38 cm (Flat tanpa alas)',
      pilihanTali: 'Webbing Katun Natural 3 cm',
      pilihanPenutup: 'Kancing Magnet / Perekat Velcro / Polos',
      opsiCetak: 'Sablon Waterbased Eco, Sablon Rubber, DTF',
      rekomendasiQty: '50 - 2.000+ pcs',
      estimasiPengerjaan: '7 - 12 hari kerja'
    }
  },
  {
    id: 'sku-blacu-01',
    slug: 'tote-bag-blacu-standard-seminar',
    name: 'Tote Bag Blacu Standard Seminar',
    categorySlug: 'tote-bag-blacu',
    categoryName: 'Blacu',
    material: 'Kain Blacu Super Grade A',
    dimensions: '30 cm (L) × 40 cm (T)',
    tali: 'Bahan Blacu Lapis Jahit (Panjang 55 cm)',
    features: ['Ukuran pas dokumen folio/A4', 'Kain bersih tidak berbulu kasar', 'Jahitan obras dalam rapi'],
    techniques: ['Sablon Manual Rubber (1 - 3 Warna)'],
    description: 'Solusi tote bag paling populer untuk seminar nasional, workshop dinas/kampus, dan pelatihan. Dimensi 30x40 cm dirancang tepat untuk memuat ordner map, tumbler minuman, modul materi pelatihan, dan pulpen seminar.',
    usage: ['Seminar Nasional & Workshop', 'Pelatihan SDM', 'Event Dinas Pemerintahan'],
    imageUrl: '/media/product-blacu-standard.svg',
    altText: 'Tote Bag Blacu Standard Seminar warna broken white dengan sablon logo acara',
    highlight: 'Pilihan paling ekonomis untuk kebutuhan seminar di atas 100 pcs.',
    specTable: {
      material: 'Blacu Super Grade A Cotton Blend',
      gramasi: '±140 - 160 gsm',
      ukuranStandard: '30 × 40 cm',
      pilihanTali: 'Tali Blacu Lipat Jahit / Webbing Katun Tipis',
      pilihanPenutup: 'Terbuka / Perekat Velcro',
      opsiCetak: 'Sablon Manual Rubber Presisi',
      rekomendasiQty: '100 - 5.000+ pcs',
      estimasiPengerjaan: '5 - 10 hari kerja'
    }
  },
  {
    id: 'sku-blacu-02',
    slug: 'tote-bag-blacu-kombinasi-saku',
    name: 'Tote Bag Blacu Kombinasi Saku Depan',
    categorySlug: 'tote-bag-blacu',
    categoryName: 'Blacu',
    material: 'Blacu Super Grade A + Saku Depan',
    dimensions: '33 cm (L) × 38 cm (T) × 6 cm (Alas)',
    tali: 'Webbing Katun 3 cm (Panjang 60 cm)',
    features: ['Saku luar multifungsi untuk smartphone/notebook', 'Alas bawah 6 cm', 'Tali kontras warna'],
    techniques: ['Sablon Manual', 'DTF Print Full Color pada Saku'],
    description: 'Modifikasi fungsional dari tas blacu konvensional. Tambahan saku depan memudahkan peserta event mengambil handphone atau nametag tanpa harus membongkar seluruh isi tas.',
    usage: ['Workshop Praktik', 'Merchandise Komunitas', 'Festival Musik & Seni'],
    imageUrl: '/media/product-blacu-pocket.svg',
    altText: 'Tote Bag Blacu Kombinasi Saku Depan dengan detail tali jahit kontras',
    highlight: 'Fungsional dengan saku akses cepat yang praktis.',
    specTable: {
      material: 'Blacu Super + Pocket Layer',
      gramasi: '±160 gsm',
      ukuranStandard: '33 × 38 × 6 cm',
      pilihanTali: 'Webbing Katun Warna Pilihan (Hitam/Navy/Natural)',
      pilihanPenutup: 'Kancing Magnet / Velcro',
      opsiCetak: 'Sablon Saku & Sablon Badan Tas',
      rekomendasiQty: '50 - 1.000 pcs',
      estimasiPengerjaan: '7 - 12 hari kerja'
    }
  },
  {
    id: 'sku-spunbond-01',
    slug: 'tote-bag-spunbond-press-event',
    name: 'Tote Bag Spunbond Press Event 75 gsm',
    categorySlug: 'tote-bag-spunbond',
    categoryName: 'Spunbond',
    material: 'Spunbond Non-Woven Polypropylene 75 gsm',
    dimensions: '25 cm (L) × 35 cm (T) × 8 cm (Lipat Samping/Alas)',
    tali: 'Handle Pon / Tali Tanam Ultrasonic Press',
    features: ['Ultrasonic heat press rapi', 'Tahan percikan air', 'Bobot sangat ringan', 'Tersedia 15+ warna kain'],
    techniques: ['Sablon Manual 1 Warna', 'Flexo Printing'],
    description: 'Tas goodie bag spunbond berbiaya rendah dengan pengerjaan cepat. Sangat efektif untuk acara pameran publik, promosi produk massal, doorprize jalan sehat, dan kampanye sosial.',
    usage: ['Expo Pameran Dagang', 'Doorprize Event Publik', 'Tas Souvenir Retail'],
    imageUrl: '/media/product-spunbond-press.svg',
    altText: 'Tote Bag Spunbond Press Event warna biru navy dengan sablon logo putih',
    highlight: 'Budget-friendly untuk kuantiti besar hingga ribuan unit.',
    specTable: {
      material: 'Non-woven Spunbond Eco Fabric (75 gsm)',
      gramasi: '75 gsm',
      ukuranStandard: '25 × 35 × 8 cm / 30 × 40 × 10 cm',
      pilihanTali: 'Tali Spunbond Tanam / Handle Plong (D-Cut)',
      pilihanPenutup: 'Terbuka / Kancing Plastik Klip',
      opsiCetak: 'Sablon 1-2 Warna Tajam',
      rekomendasiQty: '200 - 10.000+ pcs',
      estimasiPengerjaan: '3 - 7 hari kerja'
    }
  },
  {
    id: 'sku-spunbond-02',
    slug: 'tote-bag-spunbond-jahit-box-100gsm',
    name: 'Tote Bag Spunbond Box Jahit 100 gsm',
    categorySlug: 'tote-bag-spunbond',
    categoryName: 'Spunbond',
    material: 'Spunbond Tebal 100 gsm Metode Jahit',
    dimensions: '30 cm (L) × 40 cm (T) × 10 cm (Full Gusset)',
    tali: 'Tali Spunbond Lipat Jahit Silang (Panjang 55 cm)',
    features: ['Jahit benang bukan sekadar press', 'Bentuk box bervolume besar', 'Mampu menahan beban hingga 5 kg'],
    techniques: ['Sablon Rubber', 'Screen Printing Multi-Warna'],
    description: 'Spunbond tebal 100 gsm yang diproses dengan jahit benang manual pada setiap sambungan sudutnya. Hasilnya tas memiliki bentuk kotak stabil dan daya angkut jauh lebih tangguh dibanding tas spunbond press biasa.',
    usage: ['Paket Sembako Baksos', 'Goodie Bag Konferensi Bisnis', 'Packaging Box Souvenir'],
    imageUrl: '/media/product-spunbond-box.svg',
    altText: 'Tote Bag Spunbond Box Jahit 100 gsm warna hitam kokoh bervolume',
    highlight: 'Konstruksi box jahit kokoh menampung souvenir tebal.',
    specTable: {
      material: 'Spunbond Premium High Density (100 gsm)',
      gramasi: '100 gsm',
      ukuranStandard: '30 × 40 × 10 cm',
      pilihanTali: 'Tali Spunbond Jahit Silang Double Stitch',
      pilihanPenutup: 'Perekat Velcro / Resleting Tipis',
      opsiCetak: 'Sablon Rubber Manual Presisi',
      rekomendasiQty: '100 - 5.000 pcs',
      estimasiPengerjaan: '5 - 10 hari kerja'
    }
  },
  {
    id: 'sku-cordura-01',
    slug: 'tote-bag-cordura-tactical-heavy-duty',
    name: 'Tote Bag Cordura Heavy Duty Tactical',
    categorySlug: 'tote-bag-dinir-cordura',
    categoryName: 'Dinir & Cordura',
    material: 'Kain Cordura 1000D Coating PVC Waterproof',
    dimensions: '36 cm (L) × 42 cm (T) × 10 cm (Alas)',
    tali: 'Webbing Nilon Tebal 3.8 cm (Panjang 60 cm)',
    features: ['Bahan anti air (waterproof coating)', 'Kompartemen laptop 14 inch', 'Resleting YKK anti macet', 'Saku depan bersekat'],
    techniques: ['Bordir Komputer Presisi', 'Sablon Rubber High-Density', 'Cetak DTF Full Color'],
    description: 'Tote bag berdaya tahan ekstra tinggi berbahan kain cordura nilon 1000D berlapis coating kedap air. Sangat ideal untuk pengadaan merchandise industri pertambangan, kontraktor, event outdoor, dan onboarding kit karyawan tangguh.',
    usage: ['Site Safety Campaign', 'Gathering Karyawan Lapangan', 'Merchandise Outdoor & Komunitas'],
    imageUrl: '/media/fabric-dinir-cordura.svg',
    altText: 'Tote bag cordura tactical tahan air warna hitam dengan tali nilon tebal',
    highlight: 'Ketahanan ekstrem terhadap gesekan dan percikan air untuk pemakaian jangka panjang.',
    specTable: {
      material: 'Nylon Cordura 1000D (Waterproof Coating)',
      gramasi: '±380 - 420 gsm',
      ukuranStandard: '36 × 42 × 10 cm (Format Vertikal Laptop)',
      pilihanTali: 'Webbing Nilon Super 3.8 cm',
      pilihanPenutup: 'Zipper YKK / Magnet / Stopper',
      opsiCetak: 'Bordir Komputer, Sablon Plastisol, DTF',
      rekomendasiQty: '50 - 2.000+ pcs',
      estimasiPengerjaan: '7 - 14 hari kerja'
    }
  },
  {
    id: 'sku-mika-01',
    slug: 'tote-bag-mika-transparan-aesthetic',
    name: 'Tote Bag Mika Transparan PVC 0.5 mm',
    categorySlug: 'tote-bag-mika',
    categoryName: 'Mika Transparan',
    material: 'Plastik Mika PVC Transparan Bening Tebal 0.5 mm',
    dimensions: '30 cm (L) × 35 cm (T) × 8 cm (Gusset Bawah)',
    tali: 'Webbing Katun / Nilon Forest Green 3 cm (Panjang 55 cm)',
    features: ['100% kedap air dan minyak', 'Bahan jernih tembus pandang', 'Jahitan keliling dengan bisban rapi', 'Kancing snap kuningan'],
    techniques: ['Sablon Manual Khusus Mika', 'Sablon Foil Emas / Perak', 'Print DTF UV Presisi'],
    description: 'Tote bag mika PVC transparan dengan konstruksi jahitan rapi beraksen tali webbing warna hijau botol khas workshop. Sangat diminati sebagai goodie bag konser musik, paket hampers kecantikan skincare, dan tas pameran seni kontemporer.',
    usage: ['Hampers Kosmetik & Skincare', 'Konser & Festival Musik', 'Exhibition Pameran Seni'],
    imageUrl: '/media/foto-mika.jpg',
    altText: 'Tote Bag Mika Transparan PVC dengan handle hijau dan botol tumbler estetis',
    highlight: 'Estetika modern tembus pandang yang 100% tahan air dan mudah dibersihkan.',
    specTable: {
      material: 'PVC Mika Bening Transparan (Tebal 0.5 mm)',
      gramasi: 'Tebal 0.50 mm (Kaku & Kokoh)',
      ukuranStandard: '30 × 35 × 8 cm / 35 × 40 × 10 cm',
      pilihanTali: 'Webbing Katun / Tali Nilon / Mika Senada',
      pilihanPenutup: 'Kancing Snap Logam / Resleting / Terbuka',
      opsiCetak: 'Sablon Khusus Plastik, Foil Emas, UV Print',
      rekomendasiQty: '50 - 1.000+ pcs',
      estimasiPengerjaan: '7 - 12 hari kerja'
    }
  },
  {
    id: 'sku-denim-01',
    slug: 'tote-bag-denim-raw-indigo',
    name: 'Tote Bag Denim Raw Indigo 12 oz',
    categorySlug: 'tote-bag-denim',
    categoryName: 'Denim',
    material: 'Kain Denim Jeans 12 oz Raw Indigo',
    dimensions: '36 cm (L) × 40 cm (T) × 10 cm (Alas)',
    tali: 'Bahan Denim Lapis Jahit Ganda (Panjang 60 cm)',
    features: ['Jahitan kontras benang tembaga (tobacco stitch)', 'Rivet kuningan di sudut sambungan tali', 'Saku luar depan', 'Patch kulit sintetis embossed'],
    techniques: ['Sablon Discharge (Cabut Warna)', 'Sablon Plastisol Doff', 'Emboss Patch Kulit'],
    description: 'Tote bag denim kasual berkualitas tinggi menggunakan kain jeans indigo 12 oz. Dilengkapi aksen jahitan kontras warna tembaga klasik dan rivet logam penguat pada pangkal tali untuk daya tahan maksimal dan nuansa streetwear otentik.',
    usage: ['Merchandise Brand Distro & Fashion', 'Gathering Perusahaan Kasual', 'Komunitas Motor & Hobi'],
    imageUrl: '/media/foto-denim.jpg',
    altText: 'Tote Bag Denim Raw Indigo dengan jahitan kontras dan patch kulit sintetis',
    highlight: 'Karakter kasual streetwear yang kuat, tebal, dan semakin bernilai seiring waktu.',
    specTable: {
      material: 'Denim Twill Cotton (12 oz)',
      gramasi: '±360 - 380 gsm',
      ukuranStandard: '36 × 40 × 10 cm',
      pilihanTali: 'Bahan Denim 3.8 cm / Webbing Katun',
      pilihanPenutup: 'Resleting YKK Logam / Kancing Magnet / Terbuka',
      opsiCetak: 'Sablon Discharge, Plastisol, Patch Kulit Emboss',
      rekomendasiQty: '50 - 1.000+ pcs',
      estimasiPengerjaan: '7 - 14 hari kerja'
    }
  },
  {
    id: 'sku-satin-01',
    slug: 'tote-bag-satin-printing-full-sublimasi',
    name: 'Tote Bag Satin Full Print Sublimasi CMYK',
    categorySlug: 'tote-bag-satin',
    categoryName: 'Satin Full Print',
    material: 'Kain Satin Bridal Halus dengan Furing Spunbond',
    dimensions: '35 cm (L) × 40 cm (T)',
    tali: 'Tali Satin Lapis Jahit / Webbing Halus (Panjang 55 cm)',
    features: ['Full print sublimasi tajam 360 derajat', 'Permukaan glossy halus mengkilap', 'Lapis furing dalam rapi', 'Warna tahan cuci tidak pudar'],
    techniques: ['Digital Printing Sublimasi High Definition'],
    description: 'Tote bag satin bridal dengan teknologi cetak sublimasi digital format lebar. Memungkinkan pengaplikasian ilustrasi foto, pola floral, dan desain seni visual tanpa batasan jumlah warna serta gradasi yang mulus sempurna.',
    usage: ['Souvenir Wisata Seni Budaya', 'Hampers Bridal & Wedding', 'Merchandise Brand Kosmetik'],
    imageUrl: '/media/foto-satin.jpg',
    altText: 'Tote Bag Satin Full Print Sublimasi dengan ilustrasi seni tajam beresolusi tinggi',
    highlight: 'Hasil cetak full-color beresolusi tinggi tanpa batasan gradasi warna.',
    specTable: {
      material: 'Satin Bridal Premium + Furing Dalam',
      gramasi: '±220 - 250 gsm (dengan furing)',
      ukuranStandard: '35 × 40 cm / 30 × 35 cm',
      pilihanTali: 'Tali Satin Senada / Webbing Poliester Halus',
      pilihanPenutup: 'Resleting YKK / Kancing Magnet Logam',
      opsiCetak: 'Full Sublimasi CMYK Depan-Belakang',
      rekomendasiQty: '50 - 2.000+ pcs',
      estimasiPengerjaan: '5 - 10 hari kerja'
    }
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    slug: 'seminar-nasional-teknologi-malang',
    title: 'Pengadaan 350 Pcs Tote Bag Blacu Seminar Nasional Teknologi',
    clientType: 'Panitia Konferensi Akademik Perguruan Tinggi',
    city: 'Malang, Jawa Timur',
    qty: '350 Pcs',
    material: 'Kain Blacu Super Grade A',
    technique: 'Sablon Manual 2 Sisi (Warna Navy & Pine)',
    dimensions: '30 × 40 cm Flat',
    brief: 'Panitia memerlukan tas yang cukup untuk memasukkan prosiding buku seminar tebal, tumbler stainless, dan sertifikat tanpa risiko jebol, dengan anggaran akademik yang terkontrol dan waktu pengerjaan 8 hari kerja.',
    solution: 'Kami merekomendasikan kain blacu super grade A dengan jahitan obras ganda pada sambungan dan penguatan silang pada pangkal tali. Hasil cetak sablon presisi dan lolos uji beban 4 kg per tas.',
    date: 'Oktober 2026',
    imageUrl: '/media/portfolio-seminar-malang.svg',
    altText: 'Dokumentasi pesanan tote bag blacu seminar akademik Malang',
    keyTakeaway: 'Tepat waktu 2 hari sebelum acara dengan zero defect jahit.'
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
    imageUrl: '/media/portfolio-corporate-surabaya.svg',
    altText: 'Dokumentasi tote bag canvas twill hijau untuk karyawan perusahaan',
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
    imageUrl: '/media/portfolio-eco-bumn.svg',
    altText: 'Dokumentasi tote bag canvas greige natural workshop CSR Yogyakarta',
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
    imageUrl: '/media/blog-material-guide.svg',
    altText: 'Perbandingan serat kain canvas, blacu, dan spunbond untuk tote bag custom',
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
    imageUrl: '/media/blog-sizing-guide.svg',
    altText: 'Ilustrasi panduan ukuran tote bag seminar proporsi dokumen A4 dan laptop',
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
    imageUrl: '/media/blog-printing-guide.svg',
    altText: 'Perbandingan hasil cetak sablon manual, transfer DTF, dan bordir tote bag',
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
    imageUrl: '/media/author-fauzi.svg',
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
    imageUrl: '/media/author-fauzi.svg',
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
