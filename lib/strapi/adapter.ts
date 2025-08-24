// lib/strapi/adapter.ts
import type { Product } from "@/types/product";
import { mediaUrl } from "@/lib/strapi/media";

export function toProduct(apiItem: any): Product {
  // Strapi v5: { id, attributes: {...} } formu olabilir
  const a = apiItem?.attributes ?? apiItem;

  const imageUrl =
    a?.image?.url ??
    a?.image?.data?.attributes?.url ??
    a?.images?.[0]?.url ??
    a?.images?.data?.[0]?.attributes?.url ??
    "";

  return {
    id: apiItem?.id ?? a?.id ?? 0,
    slug: a?.slug ?? "",
    title: a?.title ?? a?.name ?? "Ürün",
    successRate: a?.successRate ?? "⭐️",
    originalPrice: a?.originalPrice ?? a?.price ?? 0,
    discountedPrice: a?.discountedPrice ?? a?.price ?? 0,
    installmentInfo: a?.installmentInfo ?? "Taksit imkanı",
    advancePayment: a?.advancePayment ?? "Peşinat sorunuz",
    image: { url: mediaUrl(imageUrl) },

    // Backend’de yoksa güvenli fallback’ler:
    curriculum: {
      title: a?.curriculum?.title ?? "Müfredat",
      items: Array.isArray(a?.curriculum?.items) ? a.curriculum.items : ["Konu anlatımı", "Soru çözümü"],
    },
    features: {
      title: a?.features?.title ?? "Öne Çıkanlar",
      items: Array.isArray(a?.features?.items) ? a.features.items : ["Güncel içerik", "Erişim garantisi"],
    },
    additionalFeatures: {
      title: a?.additionalFeatures?.title ?? "Ek Özellikler",
      items: Array.isArray(a?.additionalFeatures?.items)
        ? a.additionalFeatures.items
        : [
            { name: "Destek", details: ["7/24 WhatsApp", "E-posta"] },
            { name: "Erişim", details: ["Mobil", "Web"] },
          ],
    },
    // İhtiyacın varsa description, category vb. alanları da burada map et
  };
}

export function toProducts(list: any[]): Product[] {
  return Array.isArray(list) ? list.map(toProduct) : [];
}