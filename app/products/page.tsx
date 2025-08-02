import AnnouncementBar from "@/components/AnnouncementBar"
import Header from "@/components/Header"
import ProductFilters from "@/components/ProductFilters"
import ProductGrid from "@/components/ProductGrid"
import Footer from "@/components/Footer"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBar />
      <Header />
      <main>
        <ProductFilters />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  )
}
