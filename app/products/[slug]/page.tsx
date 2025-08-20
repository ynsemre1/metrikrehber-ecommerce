export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { fetchProductBySlug } from "@/lib/strapi";
import ProductDetail from "@/components/ProductDetail";
import { Product } from "@/types/product";

export default async function Page(props: {
  params: {
    slug: string;
  };
}) {
  const slug = props.params.slug;

  const product: Product | undefined = await fetchProductBySlug(slug);

  if (!product) {
    return (
      <main className="p-6">
        Ürün bulunamadı. (slug: <code>{slug}</code>)
      </main>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <ProductDetail product={product} />
    </div>
  );
}

export async function generateStaticParams() {
  return [];
}