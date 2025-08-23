// app/api/auth/login/route.ts
export const runtime = "nodejs";          // Edge'e gitmesin
export const dynamic = "force-dynamic";   // cache vs. karışmasın

import { NextResponse } from "next/server";

const API = process.env.NEXT_PUBLIC_API_URL!; // https://metrik-api.onrender.com

export async function POST(req: Request) {
  const body = await req.json();

  const r = await fetch(`${API}/api/auth/local`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    // server-to-server, credentials'a gerek yok
  });

  const data = await r.json();

  if (!r.ok) {
    return NextResponse.json({ error: data?.error || { message: "Login failed" } }, { status: r.status });
  }

  // JWT'yi httpOnly cookie olarak YAZ
  const res = NextResponse.json({ user: data.user });
  // !!! DOMAIN BELİRTME → çağrılan host'a yazılsın (preview, www, vs.)
  res.cookies.set("token", data.jwt, {
    httpOnly: true,
    secure: true,      // vercel.app ve www https
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return res;
}