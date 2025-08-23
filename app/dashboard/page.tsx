// app/dashboard/page.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function getMe() {
  const token = (await cookies()).get("token")?.value;
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

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Merhaba, {user.username} 👋</h1>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Aldığın Paketler</h2>
        {user.packages?.length ? (
          <ul className="list-disc ml-5 space-y-1">
            {user.packages.map((p: any) => (
              <li key={p.id}>{p.title}</li>
            ))}
          </ul>
        ) : (
          <p>Hiçbir paket alınmamış.</p>
        )}
      </div>
    </div>
  );
}