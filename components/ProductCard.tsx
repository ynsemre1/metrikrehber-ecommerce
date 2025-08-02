import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  title: string
  image: string
  successRate: string
  originalPrice: number
  discountedPrice: number
  installmentInfo: string
  advancePayment: string
  curriculum: {
    title: string
    items: string[]
  }
  features: {
    title: string
    items: string[]
  }
  additionalFeatures: {
    title: string
    items: Array<{
      name: string
      details: string[]
    }>
  }
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("tr-TR").format(price)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative">
        <img src={product.image || "/placeholder.svg"} alt={product.title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {product.successRate}
          </span>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2">{product.title}</h3>

        {/* Curriculum */}
        <div className="mb-4">
          <h4 className="text-green-600 font-semibold mb-2">{product.curriculum.title}</h4>
          <ul className="space-y-1">
            {product.curriculum.items.map((item, index) => (
              <li key={index} className="flex items-center text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div className="mb-4">
          <h4 className="text-green-600 font-semibold mb-2">{product.features.title}</h4>
          <ul className="space-y-1">
            {product.features.items.map((item, index) => (
              <li key={index} className="flex items-center text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Features */}
        <div className="mb-6">
          <h4 className="text-blue-600 font-semibold mb-2">{product.additionalFeatures.title}</h4>
          <ul className="space-y-2">
            {product.additionalFeatures.items.map((item, index) => (
              <li key={index} className="text-sm">
                <div className="font-medium text-gray-900">{item.name}</div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {item.details.map((detail, detailIndex) => (
                    <span key={detailIndex} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                      {detail}
                    </span>
                  ))}
                </div>
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

          <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">{product.installmentInfo}</span>
            <span>{product.advancePayment}</span>
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700">Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}
