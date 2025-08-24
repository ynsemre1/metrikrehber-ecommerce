import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const { identifier, password } = await req.json();
  if (!identifier || !password) {
    return NextResponse.json({ error: 'Missing credentials' }, { status: 400 });
  }

  const r = await fetch(`${process.env.STRAPI_URL}/api/auth/local`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
    body: JSON.stringify({ identifier, password }),
  });
  const data = await r.json();

  if (!r.ok) {
    const msg =
      data?.error?.message ||
      data?.message ||
      'Invalid credentials';
    return NextResponse.json({ error: msg }, { status: r.status });
  }

  const jwt = data.jwt as string;
  const maxAge = Number(process.env.AUTH_COOKIE_MAX_AGE || 60 * 60 * 24 * 30);

  const res = NextResponse.json({ ok: true, user: data.user });
  res.cookies.set({
    name: process.env.AUTH_COOKIE_NAME || 'mr.jwt',
    value: jwt,
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge,
    // prod’da istersen: domain: '.metrikrehber.com'
  });
  return res;
}