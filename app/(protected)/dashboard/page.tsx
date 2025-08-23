export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const API = process.env.NEXT_PUBLIC_API_URL!;

export default async function DashboardPage() {
  // Layout zaten guard ediyor; istersen kullanıcıyı tekrar çekelim:
  const r = await fetch(`${API}/api/users/me?populate=packages`, { cache: "no-store" });
  const user = await r.json();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Merhaba, {user.username} 👋</h1>
      <h2 className="text-xl font-semibold mb-2">Aldığın Paketler</h2>
      {user.packages?.length ? (
        <ul className="list-disc ml-5 space-y-1">
          {user.packages.map((p: any) => <li key={p.id}>{p.title}</li>)}
        </ul>
      ) : (
        <p>Hiçbir paket alınmamış.</p>
      )}
    </div>
  );
}