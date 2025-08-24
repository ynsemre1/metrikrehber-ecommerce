// lib/strapi/product.ts
import { strapiFetch } from '@/lib/strapi';

type AnyRecord = Record<string, any>;

export type FetchProductsParams = {
  populate?: string;              // "*" vb.
  filters?: AnyRecord;            // nested: { category: { UID: { $eq: "yks" } } }
  page?: number;                  // pagination[page]
  pageSize?: number;              // pagination[pageSize]
  sort?: string | string[];       // ["id:desc"] gibi
};

export type StrapiListResponse<T> = {
  data: T[];
  meta: AnyRecord;
};

// nested objeyi "a[b][c]=x" şeklinde ekler
function appendNested(sp: URLSearchParams, prefix: string, value: any) {
  if (value === null || typeof value !== 'object') {
    sp.append(prefix, String(value));
    return;
  }
  if (Array.isArray(value)) {
    // Strapi filters'ta dizi kullanımı için gerekirse indexli eklenebilir
    value.forEach((v, i) => appendNested(sp, `${prefix}[${i}]`, v));
    return;
  }
  for (const key of Object.keys(value)) {
    appendNested(sp, `${prefix}[${key}]`, value[key]);
  }
}

function buildQuery(p?: FetchProductsParams) {
  const sp = new URLSearchParams();
  if (!p) return '';

  if (p.populate) sp.set('populate', p.populate);

  if (p.filters && typeof p.filters === 'object') {
    appendNested(sp, 'filters', p.filters);
  }

  if (p.page) sp.set('pagination[page]', String(p.page));
  if (p.pageSize) sp.set('pagination[pageSize]', String(p.pageSize));

  if (p.sort) {
    const sorts = Array.isArray(p.sort) ? p.sort : [p.sort];
    sorts.forEach((s) => sp.append('sort', s));
  }

  const qs = sp.toString();
  return qs ? `?${qs}` : '';
}

// GENERIC: çağırırken <Product> ver, { data: Product[] } döner
export async function fetchProducts<T = any>(
  params?: FetchProductsParams
): Promise<StrapiListResponse<T>> {
  const qs = buildQuery(params);
  return strapiFetch<StrapiListResponse<T>>(`/api/products${qs}`);
}

// Tek ürün için kolaylık (slug eşitleme)
export async function fetchProductBySlug<T = any>(
  slug: string,
  populate: string = '*'
): Promise<{ data: T | null; raw: StrapiListResponse<T> }> {
  const qs = buildQuery({ populate, filters: { slug: { $eq: slug } } });
  const res = await strapiFetch<StrapiListResponse<T>>(`/api/products${qs}`);
  const arr = Array.isArray(res?.data) ? res.data : [];
  return { data: arr[0] ?? null, raw: res };
}