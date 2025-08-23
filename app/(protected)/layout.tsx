export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL!; // https://metrik-api.onrender.com

async function getMe() {
  const token = (await cookies()).get("token")?.value; // httpOnly cookie'yi sadece server okur
  if (!token) return null;

  const r = await fetch(`${API}/api/users/me?populate=packages`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!r.ok) return null;
  return r.json();
}

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const me = await getMe();
  if (!me) redirect("/login"); // token yoksa veya geçersizse login'e
  return <>{children}</>;
}