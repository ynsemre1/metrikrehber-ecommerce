// app/api/auth/login/route.ts
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
const API = process.env.NEXT_PUBLIC_API_URL!; // https://metrik-api.onrender.com

export async function POST(req: Request) {
  const body = await req.json();

  const s = await fetch(`${API}/api/auth/local`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await s.json();

  if (!s.ok) {
    return NextResponse.json({ error: data?.error?.message || "Login failed" }, { status: s.status });
  }

  const token = data?.jwt ?? data?.token ?? data?.data?.jwt ?? data?.data?.token;
  const user  = data?.user ?? data?.data?.user;
  if (!token) return NextResponse.json({ error: "Token missing" }, { status: 500 });

  const url = new URL(req.url);
  const isHttps   = url.protocol === "https:";
  const isLocal   = url.hostname === "localhost";
  const secure    = isHttps && !isLocal;

  // 🔴 Prod’da kök domain ver: .metrikrehber.com
  const cookieDomain =
    url.hostname.endsWith("metrikrehber.com") ? ".metrikrehber.com" : undefined;

  const res = NextResponse.json({ ok: true, user });

  res.cookies.set("token", token, {
    httpOnly: true,
    secure,
    sameSite: "lax",
    path: "/",
    ...(cookieDomain ? { domain: cookieDomain } : {}),
    maxAge: 60 * 60 * 24 * 7,
  });

  return res;
}