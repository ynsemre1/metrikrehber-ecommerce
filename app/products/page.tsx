// app/products/page.tsx
export const dynamic = "force-dynamic";
export const revalidate = 0;

import Image from "next/image";
import Link from "next/link";
import { fetchProducts, mediaUrl } from "@/lib/strapi";

export default async function ProductsPage() {
  const { data } = await fetchProducts();

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold mb-6">Ürünler</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data?.map((p: any) => {
          const firstImg = p.images?.[0];
          const src = firstImg?.url ? mediaUrl(firstImg.url) : "/placeholder.png";

          return (
            <Link
              key={p.id ?? p.documentId ?? p.slug}
              href={`/products/${p.slug}`}
              className="rounded-2xl p-4 shadow hover:shadow-lg transition bg-white"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image src={src} alt={p.title} fill className="object-cover" />
              </div>
              <div className="mt-3">
                <div className="font-medium">{p.title}</div>
                <div className="text-sm opacity-70">{p.category?.title}</div>
                <div className="mt-1 font-semibold">
                  {Intl.NumberFormat("tr-TR").format(p.price)}₺
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}