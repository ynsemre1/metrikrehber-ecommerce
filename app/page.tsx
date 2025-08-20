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

  const products = data.map((item: { id: number; attributes: any }) => {
    const p = item.attributes || {};

    return {
      id: item.id,
      title: p.title || "Başlıksız Ürün",
      image: p.images?.[0] || { url: "" },
      originalPrice: p.originalPrice ?? 39999,
      discountedPrice: p.price ?? 24999,
      successRate: p.successRate ?? "98%",
      curriculum: {
        title: p.curriculum?.title ?? "Müfredat Bilgisi Yok",
        items: p.curriculum?.items ?? ["İçerik bulunamadı"],
      },
      features: {
        title: p.features?.title ?? "Özellik Yok",
        items: p.features?.items ?? ["Hiçbir özellik belirtilmedi"],
      },
      additionalFeatures: {
        title: p.additionalFeatures?.title ?? "Ek Özellik Yok",
        items: p.additionalFeatures?.items ?? [
          {
            name: "Belirtilmemiş",
            details: ["Detay yok"],
          },
        ],
      },
    };
  });

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
