// app/dashboard/page.tsx
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { redirect } from "next/navigation";

async function getMe() {
  // RELATIVE URL -> her zaman mevcut host (apex ya da www) + cookie aynı origin
  const r = await fetch("/api/auth/me", { cache: "no-store" });
  if (!r.ok) return null;
  const data = await r.json();
  return data?.ok ? data.user : null;
}

export default async function DashboardPage() {
  const user = await getMe();
  if (!user) redirect("/login");

  return <div className="p-8">Merhaba, {user.username} 👋</div>;
}