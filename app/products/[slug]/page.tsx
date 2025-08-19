// app/products/[slug]/page.tsx

export const dynamic = "force-dynamic";
export const revalidate = 0;

import { fetchProducts } from "@/lib/strapi";
import ProductDetail from "@/components/ProductDetail";
import { mediaUrl } from "@/lib/strapi";

async function getProductBySlug(slug: string) {
  const { data } = await fetchProducts({ "filters[slug][$eq]": slug, populate: "*" });
  const raw = data?.[0];
  if (!raw) return null;

  const p = raw.attributes;

  return {
    id: raw.id,
    title: p.title,
    slug: p.slug,
    image: mediaUrl(p.image?.url),
    successRate: parseInt(p.successRate) || 0,
    originalPrice: p.originalPrice,
    discountedPrice: p.discountedPrice,
    installmentInfo: p.installmentInfo,
    advancePayment: p.advancePayment,
    curriculum: {
      title: p.curriculumTitle,
      items: p.curriculumItems || [],
    },
    features: {
      title: p.featuresTitle,
      items: p.featuresItems || [],
    },
    additionalFeatures: {
      title: p.additionalFeaturesTitle,
      items: p.additionalFeatures || [],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
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