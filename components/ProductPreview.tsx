import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { PRODUCTS } from "@/constants"
import Link from "next/link"

export default function ProductPreview() {
  const featuredProducts = PRODUCTS.slice(0, 3)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("tr-TR").format(price)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Öne Çıkan Kurs Paketleri</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Akademik başarınıza ulaşmanıza yardımcı olmak için tasarlanmış en popüler kurs paketlerimizi keşfedin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {product.successRate}
                  </span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2">{product.title}</h3>

                {/* Key Features */}
                <div className="mb-4">
                  <ul className="space-y-2">
                    {product.curriculum.items.slice(0, 2).map((item, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                    {product.features.items.slice(0, 1).map((item, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg text-gray-500 line-through">{formatPrice(product.originalPrice)} TL</span>
                    <span className="text-2xl font-bold text-blue-600">{formatPrice(product.discountedPrice)} TL</span>
                  </div>

                  <div className="text-center mb-4">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                      {product.installmentInfo}
                    </span>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Detayları Görüntüle</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All Products Button */}
        <div className="text-center">
          <Link href="/products">
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
              Tüm Ürünleri Gör
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
