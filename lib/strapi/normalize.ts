import { Product } from "@/types/product";

function parsePrice(input: any): number {
  if (!input) return 0;
  if (typeof input === "number") return input;
  return Number(String(input).replace(/[^\d.-]/g, "")) || 0;
}

export function normalizeProduct(item: any): Product {
  const p = item;

  const descriptionLines = (p.description || "").split("\n").filter(Boolean);
  const curriculumItems = descriptionLines.slice(0, 5);
  const featureItems = descriptionLines.slice(5);

  return {
    id: p.id,
    slug: p.slug,
    title: p.title || "Başlıksız Ürün",
    image: p.images?.[0] || { url: "" },
    discountedPrice: parsePrice(p.price),
    originalPrice: parsePrice(p.originalPrice) || parsePrice(p.price) + 1000,
    successRate: "98%",
    installmentInfo: "Taksitli Ödeme",
    advancePayment: "Peşinat Yok",
    curriculum: {
      title: "Bu Pakette Neler Var?",
      items: curriculumItems.length ? curriculumItems : ["İçerik bulunamadı"],
    },
    features: {
      title: "Öne Çıkan Özellikler",
      items: featureItems.length ? featureItems : ["Hiçbir özellik belirtilmedi"],
    },
    additionalFeatures: {
      title: "Ek Özellik Yok",
      items: [
        {
          name: "Belirtilmemiş",
          details: ["Detay yok"],
        },
      ],
    },
  };
}