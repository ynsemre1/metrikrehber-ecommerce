import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ProductPreview from "@/components/ProductPreview"
import VideoSection from "@/components/VideoSection"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductPreview />
        <VideoSection />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
