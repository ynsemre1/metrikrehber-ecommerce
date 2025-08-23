// app/api/auth/login/route.ts
import { NextResponse } from "next/server";

const API = process.env.NEXT_PUBLIC_API_URL; // https://metrik-api.onrender.com

export async function POST(req: Request) {
  const body = await req.json();

  const r = await fetch(`${API}/api/auth/local`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await r.json();
  if (!r.ok) {
    return NextResponse.json({ error: data?.error || { message: "Login failed" } }, { status: r.status });
  }

  const res = NextResponse.json({ user: data.user });

  const url = new URL(req.url);
  const host = url.hostname; // örn: www.metrikrehber.com veya metrikrehber-ecommerce-xxx.vercel.app
  const isProd = process.env.NODE_ENV === "production";

  // Sadece prod ana domain’de cookie domain’i ayarla
  const cookieDomain =
    isProd && (host === "metrikrehber.com" || host.endsWith(".metrikrehber.com"))
      ? ".metrikrehber.com"
      : undefined;

  res.cookies.set("token", data.jwt, {
    httpOnly: true,
    secure: isProd,
    sameSite: "lax",
    path: "/",
    ...(cookieDomain ? { domain: cookieDomain } : {}),
    maxAge: 60 * 60 * 24 * 7, // 7 gün
  });

  return res;
}