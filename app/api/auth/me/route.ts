export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const API = process.env.NEXT_PUBLIC_API_URL!;

export async function GET() {
  try {
    const c = await cookies();
    const token = c.get("token")?.value;
    const dbg = c.get("dbg_token")?.value ?? null;

    console.log("[ME] has token cookie:", Boolean(token), "dbg_token:", dbg);

    if (!token) {
      return NextResponse.json({ ok: false, error: "No token cookie" }, { status: 401 });
    }

    const r = await fetch(`${API}/api/users/me?populate=packages`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });

    const body = await r.json().catch(() => ({}));
    console.log("[ME] strapi status:", r.status, "keys:", Object.keys(body || {}));

    if (!r.ok) {
      return NextResponse.json({ ok: false, status: r.status, body }, { status: r.status });
    }

    const res = NextResponse.json({ ok: true, user: body });
    res.headers.set("x-debug-me", "ok");
    return res;
  } catch (e: any) {
    console.error("[ME] UNHANDLED:", e?.message);
    return NextResponse.json({ ok: false, error: e?.message || "Unhandled" }, { status: 500 });
  }
}