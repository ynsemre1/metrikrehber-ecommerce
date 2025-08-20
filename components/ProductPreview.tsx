import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";

interface ProductPreviewProps {
  products: Product[];
}

export default function ProductPreview({ products }: ProductPreviewProps) {
  const featuredProducts = products.slice(0, 3);

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

        {/* 🔥 ProductCard ile gösterim */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
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