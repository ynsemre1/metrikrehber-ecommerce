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

  const products = data.map((item: any) => {
    return {
      id: item.id,
      title: item.title || "Başlıksız Ürün",
      image: item.images?.[0] || { url: "" },
      originalPrice: item.originalPrice ?? item.price + 10000,
      discountedPrice: item.price ?? 0,
      successRate: item.successRate ?? "98%",
      curriculum: {
        title: item.curriculum?.title ?? "Müfredat Bilgisi Yok",
        items: item.curriculum?.items ?? ["İçerik bulunamadı"],
      },
      features: {
        title: item.features?.title ?? "Özellik Yok",
        items: item.features?.items ?? ["Hiçbir özellik belirtilmedi"],
      },
      additionalFeatures: {
        title: item.additionalFeatures?.title ?? "Ek Özellik Yok",
        items: item.additionalFeatures?.items ?? [
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
