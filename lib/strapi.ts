// src/lib/strapi.ts

export const API =
  (process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337").replace(/\/$/, "");

export async function fetchProducts(params: Record<string, string> = {}) {
  const url = new URL(`${API}/api/products`);
  url.searchParams.set("populate", "*");
  url.searchParams.set("sort", "createdAt:desc");

  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, v);
  }

  const res = await fetch(url.toString(), { cache: "no-store" });
  if (!res.ok) throw new Error(`Products fetch failed: ${res.status}`);
  return res.json(); // { data, meta }
}

export function mediaUrl(path?: string) {
  if (!path) return "";
  return path.startsWith("http") ? path : `${API}${path}`;
}