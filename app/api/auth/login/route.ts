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

  // JWT'yi httpOnly cookie'ye yaz
  const res = NextResponse.json({ user: data.user }); // JWT'yi body'ye göndermiyoruz
  const isProd = process.env.NODE_ENV === "production";

  res.cookies.set("token", data.jwt, {
    httpOnly: true,
    secure: isProd,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 gün
  });

  return res;
}