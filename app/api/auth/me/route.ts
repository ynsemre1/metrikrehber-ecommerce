// app/api/auth/me/route.ts
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const API = process.env.NEXT_PUBLIC_API_URL!;

export async function GET() {
  const c = await cookies();
  const token = c.get("token")?.value;
  if (!token) {
    return NextResponse.json({ ok: false, error: "No token cookie" }, { status: 401 });
  }

  const r = await fetch(`${API}/api/users/me?populate=packages`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  const body = await r.json().catch(() => ({}));

  if (!r.ok) {
    return NextResponse.json(
      { ok: false, status: r.status, body },
      { status: r.status }
    );
  }

  return NextResponse.json({ ok: true, user: body }, { status: 200 });
}