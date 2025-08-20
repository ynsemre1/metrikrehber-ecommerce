// lib/strapi.ts

import qs from "qs";
import { Product } from "@/types/product"; // Yeni oluşturacağımız type dosyasından gelecek

export function mediaUrl(url?: string) {
  return url?.startsWith("/") ? `https://metrik-api.onrender.com${url}` : url;
}

export async function fetchProducts(params?: Record<string, any>) {
  const query = qs.stringify(params || {}, { encodeValuesOnly: true });
  const res = await fetch(`https://metrik-api.onrender.com/api/products?${query}`);
  const json = await res.json();

  return {
    data: json.data.map(normalizeProduct),
  };
}

export async function fetchProductBySlug(slug: string) {
  const { data } = await fetchProducts({
    filters: {
      slug: { $eq: slug },
    },
    populate: "*",
  });

  return data[0]; // normalize edilmiş halde gelir
}

function parsePrice(input: any): number {
  if (!input) return 0;
  if (typeof input === "number") return input;
  return Number(String(input).replace(/[^\d.-]/g, "")) || 0;
}

export function normalizeProduct(item: any): Product {
  const p = item;

  // 📌 description satır satır parçalanır
  const descriptionLines = (p.description || "").split("\n").filter(Boolean);

  const curriculumItems = descriptionLines.slice(0, 5); // ilk 5 satır
  const featureItems = descriptionLines.slice(5); // kalanlar

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

    // 📘 Artık description'dan türetiliyor:
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
