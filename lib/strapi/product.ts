import { strapiFetch } from '@/lib/strapi';

export async function fetchProducts(query = '?populate=*') {
  const data = await strapiFetch(`/api/products${query}`);
  return data;
}