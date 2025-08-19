export const dynamic = "force-dynamic";

import { fetchProducts, mediaUrl } from "@/lib/strapi";
import ProductDetail from "@/components/ProductDetail";

interface Product {
  id: number;
  title: string;
  slug: string;
  image: string;
  successRate: number;
  originalPrice: number;
  discountedPrice: number;
  installmentInfo: string;
  advancePayment: string;
  curriculum: {
    title: string;
    items: string[];
  };
  features: {
    title: string;
    items: string[];
  };
  additionalFeatures: {
    title: string;
    items: {
      name: string;
      details: string[];
    }[];
  };
}

async function getProductBySlug(slug: string): Promise<Product | null> {
  const { data } = await fetchProducts({
    "filters[slug][$eq]": slug,
    populate: "*",
  });

  const raw = data?.[0];
  if (!raw || !raw.attributes || !raw.attributes.title) return null;

  const p = raw.attributes;

  return {
    id: raw.id,
    title: p.title,
    slug: p.slug,
    image: mediaUrl(p.image?.url),
    successRate: Number(p.successRate) || 0,
    originalPrice: p.originalPrice,
    discountedPrice: p.discountedPrice,
    installmentInfo: p.installmentInfo,
    advancePayment: p.advancePayment,
    curriculum: {
      title: p.curriculumTitle,
      items: p.curriculumItems ?? [],
    },
    features: {
      title: p.featuresTitle,
      items: p.featuresItems ?? [],
    },
    additionalFeatures: {
      title: p.additionalFeaturesTitle,
      items: p.additionalFeatures ?? [],
    },
  };
}

export default async function Page({ params }: { params: any }) {
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
