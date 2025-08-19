// app/page.tsx

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductPreview from "@/components/ProductPreview";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { fetchProducts } from "@/lib/strapi";

export default async function HomePage() {
  const { data } = await fetchProducts({ populate: "*" });

  const products = data.map((item: { id: number; attributes: any }) => ({
    id: item.id,
    ...item.attributes,
  }));

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
