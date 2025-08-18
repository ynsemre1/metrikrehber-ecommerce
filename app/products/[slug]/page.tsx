// app/products/[slug]/page.tsx
export const dynamic = "force-dynamic";
export const revalidate = 0;

import Image from "next/image";
import { fetchProducts, mediaUrl } from "@/lib/strapi";

async function getProductBySlug(slug: string) {
  const { data } = await fetchProducts({ "filters[slug][$eq]": slug });
  return data?.[0] ?? null; 
}

// Next 14.2+/15: params bir Promise → await et
export default async function ProductDetail(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const p = await getProductBySlug(slug);

  if (!p) {
    return (
      <main className="p-6">
        Ürün bulunamadı. (slug: <code>{slug}</code>)
      </main>
    );
  }

  const imgs: any[] = p.images || [];

  return (
    <main className="mx-auto max-w-5xl p-6 grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        {imgs.map((a) => {
          const src = mediaUrl(a?.url);
          return (
            <div key={a.documentId ?? src} className="relative aspect-square rounded-xl overflow-hidden">
              <Image src={src} alt={p.title} fill className="object-cover" />
            </div>
          );
        })}
      </div>

      <div>
        <h1 className="text-3xl font-semibold">{p.title}</h1>
        <div className="mt-2 opacity-80">{p.category?.title}</div>
        <div className="mt-4 text-2xl font-bold">
          {Intl.NumberFormat("tr-TR").format(p.price)}₺
        </div>
        <p className="mt-4 leading-7 whitespace-pre-line">{p.description}</p>
      </div>
    </main>
  );
}