// lib/strapi.ts
import 'server-only';
import { cookies } from 'next/headers';

const STRAPI =
  process.env.STRAPI_URL ??
  process.env.NEXT_PUBLIC_API_URL ??
  'http://localhost:1337';

const AUTH_COOKIE = process.env.AUTH_COOKIE_NAME || 'mr.jwt';

type Json = Record<string, any>;

async function authHeaders(init?: RequestInit) {
  const jar = await cookies(); // Next 15
  const token = jar.get(AUTH_COOKIE)?.value;
  const headers = new Headers(init?.headers || {});
  headers.set('Content-Type', 'application/json');
  if (token) headers.set('Authorization', `Bearer ${token}`);
  return headers;
}

export async function strapiFetch<T extends Json = Json>(
  path: string,
  init: RequestInit = {}
): Promise<T> {
  if (!path.startsWith('/')) path = `/${path}`;
  const headers = await authHeaders(init);
  const res = await fetch(`${STRAPI}${path}`, { ...init, headers, cache: 'no-store' });
  if (!res.ok) {
    let details: any = null;
    try { details = await res.json(); } catch {}
    const msg = details?.error?.message || details?.message || `Strapi error ${res.status}`;
    throw new Error(msg);
  }
  if (res.status === 204) return {} as T;
  return res.json() as Promise<T>;
}

export async function getMe<T extends Json = Json>() {
  return strapiFetch<T>('/api/users/me?populate=*');
}