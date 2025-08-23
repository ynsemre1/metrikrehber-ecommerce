// app/api/debug/cookies/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const c = await cookies();
  const token = c.get("token");

  return NextResponse.json({
    hasToken: Boolean(token),
    tokenPreview: token?.value?.slice(0, 12) ?? null,
    cookie: {
      name: token?.name,
      valueLength: token?.value?.length ?? 0,
    },
  });
}