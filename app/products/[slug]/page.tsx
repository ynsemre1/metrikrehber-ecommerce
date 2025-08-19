export const dynamic = "force-dynamic";

import { fetchProducts, mediaUrl } from "@/lib/strapi";
import ProductDetail from "@/components/ProductDetail";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { data } = await fetchProducts({
    "filters[slug][$eq]": params.slug,
    populate: "*",
  });

  const raw = data?.[0];
  if (!raw) {
    return (
      <main className="p-6">
        Ürün bulunamadı. (slug: <code>{params.slug}</code>)
      </main>
    );
  }

  const p = raw;

  const product = {
    id: p.id,
    title: p.title,
    slug: p.slug,
    category: {
      title: p.category?.title || "Kategori Yok",
    },
    description: p.description,
    price: p.price,
    images: p.images?.map((img: any) => ({
      url: img.url,
    })) || [],
  };

  return (
    <div className="bg-background min-h-screen">
      <ProductDetail product={product} />
    </div>
  );
}