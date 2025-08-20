import qs from "qs";
import { Product } from "@/types/product";
import { normalizeProduct } from "./normalize";

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

  return data[0];
}