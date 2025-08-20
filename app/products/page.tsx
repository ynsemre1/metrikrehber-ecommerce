export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { fetchProducts } from "@/lib/strapi";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";

export default async function ProductsPage() {
  const { data: products }: { data: Product[] } = await fetchProducts({
    populate: "*",
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl sm:text-5xl font-bold font-poppins text-center text-gray-900 mb-16">
        Tüm Ürünler
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}