export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { fetchProducts } from "@/lib/strapi";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

const categories = [
  { label: "Tüm Ürünler", slug: "" },
  { label: "YKS", slug: "yks" },
  { label: "LGS", slug: "lgs" },
  { label: "TEK DERS", slug: "tek-ders" },
];

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const categorySlug = searchParams?.category;

  const filters = categorySlug
    ? { category: { UID: { $eq: categorySlug } } }
    : {};

  const { data: products }: { data: Product[] } = await fetchProducts({
    populate: "*",
    filters,
    sort: ["id:desc"],
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl sm:text-5xl font-bold font-poppins text-center text-gray-900 mb-10">
        {categorySlug
          ? categories.find((c) => c.slug === categorySlug)?.label || "Ürünler"
          : "Tüm Ürünler"}
      </h1>

      {/* Filtre Butonları */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={cat.slug ? `/products?category=${cat.slug}` : `/products`}
            className={`px-4 py-2 rounded-full border text-sm font-semibold transition ${
              categorySlug === cat.slug
                ? "bg-purple-500 text-white border-purple-500"
                : "border-purple-200 text-purple-700 hover:bg-purple-100"
            }`}
          >
            {cat.label}
          </Link>
        ))}
      </div>

      {/* Ürünler */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}