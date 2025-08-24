import { Product } from "@/types/product";
import { mediaUrl } from "@/lib/strapi/media";
import { Check, Sparkles, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("tr-TR").format(price);
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left - Product Image */}
        <div className="w-full">
          <img
            src={mediaUrl(product.image?.url) || "/placeholder.svg"}
            alt={product.title}
            className="rounded-2xl shadow-lg object-cover w-full"
          />
        </div>

        {/* Right - Product Content */}
        <div>
          <h1 className="text-4xl font-bold font-poppins text-gray-900 mb-6">
            {product.title}
          </h1>

          {/* Fiyatlar */}
          <div className="mb-6">
            <div className="flex items-center gap-4">
              <span className="text-lg text-gray-400 line-through font-medium">
                {formatPrice(product.originalPrice)} TL
              </span>
              <span className="text-3xl font-bold text-gradient font-poppins">
                {formatPrice(product.discountedPrice)} TL
              </span>
            </div>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-semibold">
                {product.installmentInfo}
              </span>
              <span className="font-medium">{product.advancePayment}</span>
            </div>
          </div>

          {/* Curriculum */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-green-600" />
              <h4 className="text-green-600 font-bold font-poppins">
                {product.curriculum.title}
              </h4>
            </div>
            <ul className="space-y-2">
              {product.curriculum.items.map((item, i) => (
                <li key={i} className="flex items-center text-sm text-gray-700">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-green-600" />
              <h4 className="text-green-600 font-bold font-poppins">
                {product.features.title}
              </h4>
            </div>
            <ul className="space-y-2">
              {product.features.items.map((item, i) => (
                <li key={i} className="flex items-center text-sm text-gray-700">
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
              {product.additionalFeatures.items.map((feature, i) => (
                <li key={i} className="text-sm">
                  <div className="font-semibold text-gray-900 mb-1">
                    {feature.name}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {feature.details.map((detail, j) => (
                      <span
                        key={j}
                        className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Sepet Butonu */}
          <Button className="w-full gradient-primary font-bold text-lg py-4 shadow-lg hover:scale-105 transition-all duration-300">
            Sepete Ekle
          </Button>
        </div>
      </div>
    </div>
  );
}