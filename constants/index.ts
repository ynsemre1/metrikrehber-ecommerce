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
