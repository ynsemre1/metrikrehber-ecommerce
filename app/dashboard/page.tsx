// app/dashboard/page.tsx
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function getMe() {
  const c = await cookies(); // Next 15: async
  const token = c.get("token")?.value;
  if (!token) return null;

  const r = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/me?populate=packages`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!r.ok) return null;
  return r.json();
}

export default async function DashboardPage() {
  const user = await getMe();
  if (!user) redirect("/login");
  return <div className="p-8">Merhaba, {user.username} 👋</div>;
}