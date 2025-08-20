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

export function normalizeProduct(item: any): Product {
  const p = item.attributes ?? item;
  return {
    id: item.id,
    slug: p.slug,
    title: p.title || "Başlıksız Ürün",
    image: p.images?.data?.[0]?.attributes || { url: "" },
    discountedPrice: Number(String(p.price).replace(",", "")) || 0,
    originalPrice: Number(String(p.price).replace(",", "")) + 1000 || 1000,
    successRate: "98%",
    installmentInfo: "Taksitli Ödeme",
    advancePayment: "Peşinat Yok",
    curriculum: {
      title: "Müfredat Bilgisi Yok",
      items: ["İçerik bulunamadı"],
    },
    features: {
      title: "Özellik Yok",
      items: ["Hiçbir özellik belirtilmedi"],
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
