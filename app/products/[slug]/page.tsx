export const dynamic = "force-dynamic";

import { fetchProducts, mediaUrl } from "@/lib/strapi";
import ProductDetail from "@/components/ProductDetail";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: { params: any }) {
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

  const product = {
    id: raw.id,
    title: raw.title,
    slug: raw.slug,
    category: {
      title: raw.category?.title || "Kategori Yok",
    },
    description: raw.description,
    price: raw.price,
    images: raw.images?.map((img: any) => ({ url: img.url })) || [],
  };

  return (
    <div className="bg-background min-h-screen">
      <ProductDetail product={product} />
    </div>
  );
}