// app/products/[slug]/page.tsx
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { fetchProductBySlug } from "@/lib/strapi/product";
import { toProduct } from "@/lib/strapi/adapter";
import ProductDetail from "@/components/ProductDetail";
import type { Product } from "@/types/product";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  // Strapi'den tek ürünü ham veri olarak çek
  const { data: raw } = await fetchProductBySlug<any>(slug, "*");

  // Bulunamadıysa 404 içerik
  if (!raw) {
    return (
      <main className="p-6">
        Ürün bulunamadı. (slug: <code>{slug}</code>)
      </main>
    );
  }

  // Ham veriyi UI'nin beklediği Product tipine dönüştür
  const product: Product = toProduct(raw);

  return (
    <div className="bg-background min-h-screen">
      <ProductDetail product={product} />
    </div>
  );
}

export async function generateStaticParams() {
  return [];
}