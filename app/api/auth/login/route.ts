export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

const API = process.env.NEXT_PUBLIC_API_URL!; // https://metrik-api.onrender.com

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const sr = await fetch(`${API}/api/auth/local`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const raw = await sr.json();
    if (!sr.ok) {
      const msg =
        raw?.error?.message ||
        raw?.message ||
        (Array.isArray(raw?.error?.details?.errors) && raw.error.details.errors[0]?.message) ||
        "Login failed";
      return NextResponse.json({ ok: false, error: msg, raw }, { status: sr.status });
    }

    // Strapi v4/v5 destekle
    const token =
      raw?.jwt ??
      raw?.token ??
      raw?.data?.jwt ??
      raw?.data?.token;

    const user = raw?.user ?? raw?.data?.user ?? null;
    if (!token) {
      return NextResponse.json({ ok: false, error: "Token missing from Strapi response", raw }, { status: 500 });
    }

    // ⬇️ Ortama göre Secure flag
    const url = new URL(req.url);
    const isHttps = url.protocol === "https:";             // prod/preview
    const isLocalhost = url.hostname === "localhost";      // dev
    const secure = isHttps && !isLocalhost;                // http://localhost ise false

    const res = NextResponse.json({ ok: true, user });

    res.cookies.set("token", token, {
      httpOnly: true,
      secure,                // 🔴 kritik satır
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return res;
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Unhandled error" }, { status: 500 });
  }
}