export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { fetchProductBySlug } from "@/lib/strapi";
import ProductDetail from "@/components/ProductDetail";
import { Product } from "@/types/product";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
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