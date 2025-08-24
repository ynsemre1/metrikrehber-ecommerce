// app/page.tsx
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductPreview from "@/components/ProductPreview";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

import { fetchProducts } from "@/lib/strapi/product";
import { toProducts } from "@/lib/strapi/adapter";
import type { Product } from "@/types/product";

export default async function HomePage() {
  // Strapi'den ham listeyi çek
  const { data } = await fetchProducts<any>({ populate: "*" });

  // Ham veriyi UI'nin beklediği Product tipine normalize et
  const products: Product[] = toProducts(data);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductPreview products={products} />
        <VideoSection />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}