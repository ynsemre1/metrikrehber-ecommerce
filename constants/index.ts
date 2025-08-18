export const SITE_CONFIG = {
  name: "Metrik Rehber",
  tagline: "Premium Tabletli Eğitim Kursları",
  description:
    "Sektör uzmanları tarafından tasarlanan kapsamlı online kurslarımızla öğrenme yolculuğunuzu dönüştürün. Kendi hızınızda öğrenin ve hedeflerinize ulaşın.",
  phone: "05074868484",
  email: "info@metrikrehber.com",
} as const;

export const NAVIGATION_ITEMS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Paketlerimiz", href: "/products" },
  { label: "Örnek Videolar", href: "#videos" },
  { label: "Yorumlar & Başarılarımız", href: "#reviews" },
  { label: "Yardım", href: "#help" },
  { label: "İletişim", href: "#contact" },
] as const;

export const HERO_CONTENT = {
  headline: "TÜRKİYE'DE İLK Dijital Araçlarla Başarıyı Garantiye Alın",
  description:
    "Metrik Rehber olarak sizlere, bilgi çağının tekniklerini etkin bir şekilde kullanarak hedef odaklı yenilikçi bir online eğitim platformu sunuyoruz. Dijital defter uygulaması sayesinde paketlere dahil grafik tabletler ile notlarınızı alabilecek, istediğiniz zaman bu notlarla çalışabileceksiniz. İnteraktif ödev etütleri sayesinde çalışmalarınıza eşlik ederek başarınızı garanti altına alıyoruz.",
  ctaText: "Tüm Kurslar",
  ctaSecondary: "Örnek Derse Katıl",
} as const;

export const PRODUCT_CATEGORIES = [
  { id: "yks-2026", label: "YKS 2026", active: true },
  { id: "yks-2027", label: "YKS 2027", active: false },
  { id: "lgs-2026", label: "LGS 2026", active: false },
  { id: "grade-9-11", label: "9, 10, 11. Sınıf", active: false },
  { id: "grade-5-7", label: "5, 6, 7. Sınıf", active: false },
  { id: "grade-1-4", label: "1, 2, 3, 4. Sınıf", active: false },
  { id: "kpss-pre", label: "KPSS Ön Lisans", active: false },
  { id: "kpss-license", label: "KPSS Lisans", active: false },
] as const;

export const PRODUCTS = [
  {
    id: 1,
    title: "LGS 2026 Tam Paket",
    image: "/placeholder.svg?height=300&width=400&text=Kurs+Paketi+2",
    successRate: "%95 Başarı Oranı",
    originalPrice: 47999,
    discountedPrice: 36999,
    installmentInfo: "%26 Taksitli",
    advancePayment: "Peşin Fiyatına 2.083 TL Taksitle",
    curriculum: {
      title: "Müfredat",
      items: ["980 Canlı Sınıf Dersi + Tekrar Videoları", "20.000+ Soruluk İnteraktif Soru Bankaları"],
    },
    features: {
      title: "Özellikler",
      items: [
        "15 TYT + AYT Canlı Dijital Deneme Sınavı",
        "Ödev Takibi ve Etkin Rehberlik",
        "Uzman Eğitimleri",
      ],
    },
    additionalFeatures: {
      title: "Ek Özellikler",
      items: [
        {
          name: "Soru Sorma Hakkı",
          details: ["1ci Yıl", "2nci Yıl", "Ekstra Paket"],
        },
        {
          name: "Randevulu Küçük Grup Görüşmeleri",
          details: ["2nci Yıl", "Ekstra Paket"],
        },
        { name: "Özel Dersler", details: ["2nci Yıl", "Ekstra Paket"] },
        {
          name: "Randevulu 40 Dakikalık Özel Dersler",
          details: ["Ekstra Paket"],
        },
      ],
    },
  },
  {
    id: 2,
    title: "LGS 2026 Tam Paket",
    image: "/placeholder.svg?height=300&width=400&text=Kurs+Paketi+2",
    successRate: "%95 Başarı Oranı",
    originalPrice: 33599,
    discountedPrice: 24999,
    installmentInfo: "%26 Taksitli",
    advancePayment: "Peşin Fiyatına 2.083 TL Taksitle",
    curriculum: {
      title: "Müfredat",
      items: ["6.131 Ders Videosu", "37.505 Video Çözümlü Soru"],
    },
    features: {
      title: "Özellikler",
      items: [
        "Deneme Sınavları & Soru Bankası",
        "Gelişmiş Kişisel Gelişim Sistemi",
        "Uzman Eğitimleri",
      ],
    },
    additionalFeatures: {
      title: "Ek Özellikler",
      items: [
        {
          name: "Soru Sorma Hakkı",
          details: ["1ci Yıl", "2nci Yıl", "Ekstra Paket"],
        },
        {
          name: "Randevulu Küçük Grup Görüşmeleri",
          details: ["2nci Yıl", "Ekstra Paket"],
        },
        { name: "Özel Dersler", details: ["2nci Yıl", "Ekstra Paket"] },
        {
          name: "Randevulu 40 Dakikalık Özel Dersler",
          details: ["Ekstra Paket"],
        },
      ],
    },
  },
  {
    id: 3,
    title: "TYT Tüm Dersler + AYT Sözel 2026",
    image: "/placeholder.svg?height=300&width=400&text=Kurs+Paketi+3",
    successRate: "%95 Başarı Oranı",
    originalPrice: 33599,
    discountedPrice: 24999,
    installmentInfo: "%26 Taksitli",
    advancePayment: "Peşin Fiyatına 2.083 TL Taksitle",
    curriculum: {
      title: "Müfredat",
      items: ["5.705 Ders Videosu", "36.333 Video Çözümlü Soru"],
    },
    features: {
      title: "Özellikler",
      items: [
        "Deneme Sınavları & Soru Bankası",
        "Gelişmiş Kişisel Gelişim Sistemi",
        "Uzman Eğitimleri",
      ],
    },
    additionalFeatures: {
      title: "Ek Özellikler",
      items: [
        {
          name: "Soru Sorma Hakkı",
          details: ["1ci Yıl", "2nci Yıl", "Ekstra Paket"],
        },
        {
          name: "Randevulu Küçük Grup Görüşmeleri",
          details: ["2nci Yıl", "Ekstra Paket"],
        },
        { name: "Özel Dersler", details: ["2nci Yıl", "Ekstra Paket"] },
        {
          name: "Randevulu 40 Dakikalık Özel Dersler",
          details: ["Ekstra Paket"],
        },
      ],
    },
  },
  {
    id: 4,
    title: "Premium Kurs Paketi + Fen Bilimleri Odaklı 2026",
    image: "/placeholder.svg?height=300&width=400&text=Kurs+Paketi+4",
    successRate: "%98 Başarı Oranı",
    originalPrice: 45999,
    discountedPrice: 34999,
    installmentInfo: "%36 Taksitli",
    advancePayment: "Peşin Fiyatına 2.500 TL Taksitle",
    curriculum: {
      title: "Müfredat",
      items: ["8.500 Ders Videosu", "45.000 Video Çözümlü Soru"],
    },
    features: {
      title: "Özellikler",
      items: [
        "Deneme Sınavları & Soru Bankası",
        "Gelişmiş Kişisel Gelişim Sistemi",
        "Uzman Eğitimleri",
        "Bire Bir Mentorluk",
      ],
    },
    additionalFeatures: {
      title: "Ek Özellikler",
      items: [
        {
          name: "Soru Sorma Hakkı",
          details: ["1ci Yıl", "2nci Yıl", "Ekstra Paket"],
        },
        {
          name: "Randevulu Küçük Grup Görüşmeleri",
          details: ["2nci Yıl", "Ekstra Paket"],
        },
        { name: "Özel Dersler", details: ["2nci Yıl", "Ekstra Paket"] },
        {
          name: "Randevulu 40 Dakikalık Özel Dersler",
          details: ["Ekstra Paket"],
        },
      ],
    },
  },
  {
    id: 5,
    title: "Standart Kurs Paketi + Matematik Odaklı 2026",
    image: "/placeholder.svg?height=300&width=400&text=Kurs+Paketi+5",
    successRate: "%92 Başarı Oranı",
    originalPrice: 28999,
    discountedPrice: 19999,
    installmentInfo: "%24 Taksitli",
    advancePayment: "Peşin Fiyatına 1.500 TL Taksitle",
    curriculum: {
      title: "Müfredat",
      items: ["4.200 Ders Videosu", "28.500 Video Çözümlü Soru"],
    },
    features: {
      title: "Özellikler",
      items: [
        "Deneme Sınavları & Soru Bankası",
        "Kişisel Gelişim Sistemi",
        "Uzman Eğitimleri",
      ],
    },
    additionalFeatures: {
      title: "Ek Özellikler",
      items: [
        { name: "Soru Sorma Hakkı", details: ["1ci Yıl", "2nci Yıl"] },
        { name: "Randevulu Küçük Grup Görüşmeleri", details: ["2nci Yıl"] },
        { name: "Özel Dersler", details: ["Ekstra Paket"] },
      ],
    },
  },
  {
    id: 6,
    title: "Elite Kurs Paketi + Edebiyat Odaklı 2026",
    image: "/placeholder.svg?height=300&width=400&text=Kurs+Paketi+6",
    successRate: "%96 Başarı Oranı",
    originalPrice: 38999,
    discountedPrice: 29999,
    installmentInfo: "%30 Taksitli",
    advancePayment: "Peşin Fiyatına 2.200 TL Taksitle",
    curriculum: {
      title: "Müfredat",
      items: ["6.800 Ders Videosu", "42.000 Video Çözümlü Soru"],
    },
    features: {
      title: "Özellikler",
      items: [
        "Deneme Sınavları & Soru Bankası",
        "Gelişmiş Kişisel Gelişim Sistemi",
        "Uzman Eğitimleri",
        "Yazma Atölyesi",
      ],
    },
    additionalFeatures: {
      title: "Ek Özellikler",
      items: [
        {
          name: "Soru Sorma Hakkı",
          details: ["1ci Yıl", "2nci Yıl", "Ekstra Paket"],
        },
        {
          name: "Randevulu Küçük Grup Görüşmeleri",
          details: ["2nci Yıl", "Ekstra Paket"],
        },
        { name: "Özel Dersler", details: ["2nci Yıl", "Ekstra Paket"] },
        {
          name: "Randevulu 40 Dakikalık Özel Dersler",
          details: ["Ekstra Paket"],
        },
      ],
    },
  },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ayşe Kaya",
    role: "YKS Öğrencisi",
    content:
      "Metrik Rehber sınav hazırlığımı tamamen dönüştürdü. Yapılandırılmış kurslar ve uzman rehberliği hedef puanıma ulaşmama yardımcı oldu.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    id: 2,
    name: "Mehmet Demir",
    role: "LGS Öğrencisi",
    content:
      "Video çözümler ve deneme sınavları inanılmaz derecede faydalıydı. LGS sınavım için kendimi güvenli ve hazır hissettim.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    id: 3,
    name: "Fatma Yılmaz",
    role: "KPSS Adayı",
    content:
      "Metrik Rehber'in kapsamlı materyalleri ve uzman eğitmenleri sayesinde KPSS sınavımı ilk denemede başarıyla geçtim.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
] as const;

export const FAQ_ITEMS = [
  {
    id: 1,
    question: "Kurslara nasıl başlayabilirim?",
    answer:
      "Sadece bir hesap oluşturun, kurs kataloğumuza göz atın ve ilginizi çeken kurslara kayıt olun. Kayıt olduktan hemen sonra öğrenmeye başlayabilirsiniz.",
  },
  {
    id: 2,
    question: "Kurslar kendi hızımda mı yoksa programlı mı?",
    answer:
      "Kurslarımız kendi hızınızda öğrenmenize olanak sağlayacak şekilde tasarlanmıştır. Ancak bazı kurslarda isteğe bağlı canlı oturumlar ve ödev teslim tarihleri olabilir.",
  },
  {
    id: 3,
    question: "Tamamladığımda sertifika alır mıyım?",
    answer:
      "Evet, başarıyla tamamladığınız her kurs için doğrulanmış bir tamamlama sertifikası alacaksınız. Bu sertifikaları profesyonel profillerinizde paylaşabilirsiniz.",
  },
  {
    id: 4,
    question: "Bir kurstan memnun kalmazsam ne olur?",
    answer:
      "Tüm kurslarımız için 30 günlük para iade garantisi sunuyoruz. Memnun kalmazsanız, kayıt olduktan sonraki ilk 30 gün içinde tam para iadesi talep edebilirsiniz.",
  },
  {
    id: 5,
    question: "Kurslara mobil cihazlardan erişebilir miyim?",
    answer:
      "Platformumuz tamamen duyarlı tasarıma sahip ve mobil cihazlar için optimize edilmiştir. Akıllı telefonunuz veya tabletinizi kullanarak her yerde, her zaman öğrenebilirsiniz.",
  },
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: "Hakkımızda", href: "#about" },
    { label: "Kariyer", href: "#careers" },
    { label: "Basın", href: "#press" },
    { label: "Blog", href: "#blog" },
  ],
  support: [
    { label: "Yardım Merkezi", href: "#help" },
    { label: "Bize Ulaşın", href: "#contact" },
    { label: "Sistem Durumu", href: "#status" },
    { label: "Topluluk", href: "#community" },
  ],
  legal: [
    { label: "Gizlilik Politikası", href: "#privacy" },
    { label: "Hizmet Şartları", href: "#terms" },
    { label: "Çerez Politikası", href: "#cookies" },
    { label: "Erişilebilirlik", href: "#accessibility" },
  ],
} as const;
