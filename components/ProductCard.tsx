import { Check, Star, Zap, Target, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mediaUrl } from "@/lib/strapi";
import { Product } from "@/types/product";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("tr-TR").format(price);
  };

  return (
    <div className="group bg-white rounded-3xl shadow-xl border border-purple-100 overflow-hidden hover-lift transition-all duration-500">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={mediaUrl(product.image?.url) || "/placeholder.svg"}
          alt={product.title}
          className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-purple-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
            <Star className="w-4 h-4" />
            {product.successRate}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center animate-pulse">
            <Zap className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-8">
        <h3 className="text-xl font-bold font-poppins text-gray-900 mb-6 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
          {product.title}
        </h3>

        {/* Curriculum */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-4 h-4 text-green-600" />
            <h4 className="text-green-600 font-bold font-poppins">
              {product.curriculum.title}
            </h4>
          </div>
          <ul className="space-y-2">
            {product.curriculum.items.map((item, index) => (
              <li
                key={index}
                className="flex items-center text-sm text-gray-700 font-medium"
              >
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-green-600" />
            <h4 className="text-green-600 font-bold font-poppins">
              {product.features.title}
            </h4>
          </div>
          <ul className="space-y-2">
            {product.features.items.map((item, index) => (
              <li
                key={index}
                className="flex items-center text-sm text-gray-700 font-medium"
              >
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Features */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-purple-600" />
            <h4 className="text-purple-600 font-bold font-poppins">
              {product.additionalFeatures.title}
            </h4>
          </div>
          <ul className="space-y-3">
            {product.additionalFeatures.items.map((item, index) => (
              <li key={index} className="text-sm">
                <div className="font-semibold text-gray-900 mb-1">
                  {item.name}
                </div>
                <div className="flex flex-wrap gap-1">
                  {item.details.map((detail, detailIndex) => (
                    <span
                      key={detailIndex}
                      className="text-xs bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 px-2 py-1 rounded-full font-medium"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing */}
        <div className="border-t border-gray-100 pt-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-lg text-gray-400 line-through font-medium">
              {formatPrice(product.originalPrice)} TL
            </span>
            <span className="text-3xl font-bold text-gradient font-poppins">
              {formatPrice(product.discountedPrice)} TL
            </span>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
            <span className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-3 py-1 rounded-full font-semibold">
              {product.installmentInfo}
            </span>
            <span className="font-medium">{product.advancePayment}</span>
          </div>

          <Link href={`/products/${product.slug}`}>
            <Button className="w-full gradient-primary hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25 font-bold py-3 rounded-xl">
              Detayları Gör
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}