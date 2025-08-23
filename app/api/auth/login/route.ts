// app/api/auth/login/route.ts
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

const API = process.env.NEXT_PUBLIC_API_URL!; // https://metrik-api.onrender.com

export async function POST(req: Request) {
  const body = await req.json();

  const r = await fetch(`${API}/api/auth/local`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await r.json();

  if (!r.ok) {
    const msg =
      data?.error?.message ||
      data?.message ||
      (Array.isArray(data?.error?.details?.errors) && data.error.details.errors[0]?.message) ||
      "Login failed";
    return NextResponse.json({ error: msg }, { status: r.status });
  }

  // Strapi v4: { jwt, user }
  // Strapi v5: { token, user } veya { data: { token, user } }
  const token =
    data?.jwt ??
    data?.token ??
    data?.data?.jwt ??
    data?.data?.token;

  if (!token) {
    // Token gelmediyse açıkça hata ver (şu ana kadar yaşadığın durum)
    return NextResponse.json({ error: "Token missing from Strapi response" }, { status: 500 });
  }

  const res = NextResponse.json({ user: data.user ?? data?.data?.user });

  res.cookies.set("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 gün
  });

  return res;
}