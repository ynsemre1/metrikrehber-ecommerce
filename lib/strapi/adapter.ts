// lib/strapi/adapter.ts
import type { Product } from "@/types/product";
import { mediaUrl } from "@/lib/strapi/media";

type AnyRec = Record<string, any>;

function pickFirstImageUrl(a: AnyRec) {
  // tekil image
  const single = a?.image?.url || a?.image?.data?.attributes?.url;
  if (single) return single;

  // çoklu images
  const arr1 = a?.images;
  if (Array.isArray(arr1) && arr1[0]?.url) return arr1[0].url;

  const arr2 = a?.images?.data;
  if (Array.isArray(arr2) && arr2[0]?.attributes?.url) return arr2[0].attributes.url;

  return "";
}

export function toProduct(apiItem: AnyRec): Product {
  const a = apiItem?.attributes ?? apiItem;

  // fiyat tek alandaysa UI alanlarına kopyala
  const price = Number(a?.price ?? 0);

  // description satırlarını (varsa) curriculum fallback'i olarak kullan
  const descText =
    typeof a?.description === "string"
      ? a.description
      : a?.description?.toString?.() ?? "";
  const descLines = descText
    .split("\n")
    .map((s: string) => s.trim())
    .filter(Boolean);

  const imageUrl = pickFirstImageUrl(a);

  const product: Product = {
    id: apiItem?.id ?? a?.id ?? 0,
    slug: a?.slug ?? "",
    title: a?.title ?? a?.name ?? "Ürün",

    image: { url: mediaUrl(imageUrl || "") },

    successRate: a?.successRate ?? "⭐️",
    originalPrice: Number(a?.originalPrice ?? price),
    discountedPrice: Number(a?.discountedPrice ?? price),
    installmentInfo: a?.installmentInfo ?? "Taksit imkanı",
    advancePayment: a?.advancePayment ?? "Peşinat bilgisi",

    curriculum: {
      title: a?.curriculum?.title ?? "Müfredat",
      items:
        Array.isArray(a?.curriculum?.items) && a.curriculum.items.length
          ? a.curriculum.items
          : descLines.length
          ? descLines
          : ["Konu anlatımı", "Soru çözümü"],
    },

    features: {
      title: a?.features?.title ?? "Öne Çıkanlar",
      items:
        Array.isArray(a?.features?.items) && a.features.items.length
          ? a.features.items
          : ["Güncel içerik", "Sınırsız erişim"],
    },

    additionalFeatures: {
      title: a?.additionalFeatures?.title ?? "Ek Özellikler",
      items:
        Array.isArray(a?.additionalFeatures?.items) && a.additionalFeatures.items.length
          ? a.additionalFeatures.items
          : [
              { name: "Destek", details: ["WhatsApp", "E‑posta"] },
              { name: "Erişim", details: ["Web", "Mobil"] },
            ],
    },
  };

  return product;
}

export function toProducts(list: AnyRec[]): Product[] {
  return Array.isArray(list) ? list.map(toProduct) : [];
}