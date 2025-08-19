export const dynamic = "force-dynamic";

import { fetchProducts, mediaUrl } from "@/lib/strapi";
import ProductDetail from "@/components/ProductDetail";

interface Product {
  id: number;
  title: string;
  slug: string;
  image: string;
  categoryTitle: string;
  description: string;
  price: number;
  images: string[];
}

async function getProductBySlug(slug: string): Promise<Product | null> {
  const { data } = await fetchProducts({
    "filters[slug][$eq]": slug,
    populate: "*",
  });

  const raw = data?.[0];
  if (!raw) return null;

  const p = raw;

  return {
    id: p.id,
    title: p.title,
    slug: p.slug,
    categoryTitle: p.category?.title || "Kategori Yok",
    description: p.description || "",
    price: p.price,
    image: mediaUrl(p.images?.[0]?.url),
    images: p.images?.map((img: any) => mediaUrl(img?.url)) || [],
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return (
      <main className="p-6">
        Ürün bulunamadı. (slug: <code>{params.slug}</code>)
      </main>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <ProductDetail product={product} />
    </div>
  );
}