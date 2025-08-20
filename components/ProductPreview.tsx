import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star, Zap } from "lucide-react";
import Link from "next/link";
import { mediaUrl } from "@/lib/strapi";
import { Product } from "@/types/product";

interface ProductPreviewProps {
  products: Product[];
}

export default function ProductPreview({ products }: ProductPreviewProps) {
  const featuredProducts = products.slice(0, 3);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("tr-TR").format(price);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white via-purple-50/30 to-green-50/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-green-100 px-4 py-2 rounded-full border border-purple-200 mb-6">
            <Star className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">
              En Popüler Seçimler
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-6">
            <span className="text-gradient">Öne Çıkan</span>{" "}
            <span className="text-gray-800">Kurs Paketleri</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Akademik başarınıza ulaşmanıza yardımcı olmak için tasarlanmış en
            popüler kurs paketlerimizi keşfedin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl shadow-xl border border-purple-100 overflow-hidden hover-lift transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={mediaUrl(product.image?.url)}
                  alt={product.title}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {product.successRate}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center animate-pulse">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold font-poppins text-gray-900 mb-6 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
                  {product.title}
                </h3>

                <div className="mb-6">
                  <ul className="space-y-3">
                    {product.curriculum.items.slice(0, 2).map((item, i) => (
                      <li
                        key={i}
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

                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg text-gray-400 line-through font-medium">
                      {formatPrice(product.originalPrice)} TL
                    </span>
                    <span className="text-3xl font-bold text-gradient font-poppins">
                      {formatPrice(product.discountedPrice)} TL
                    </span>
                  </div>

                  <div className="text-center mb-6">
                    <span className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Taksitli Ödeme
                    </span>
                  </div>

                  <Button className="w-full gradient-primary hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25 font-bold py-3 rounded-xl">
                    Detayları Görüntüle
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/products">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-4 border-2 border-purple-200 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 font-bold rounded-xl group bg-transparent"
            >
              Tüm Ürünleri Gör
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}