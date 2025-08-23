export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { headers } from "next/headers";
import { redirect } from "next/navigation";

async function getBaseUrl() {
  const h = await headers();
  const proto = h.get("x-forwarded-proto") ?? "https";
  const host = h.get("host") ?? "";
  return `${proto}://${host}`;
}

async function getMeDiag() {
  const base = await getBaseUrl();
  const r = await fetch(`${base}/api/auth/me`, { cache: "no-store" });
  const text = await r.text(); // her ihtimale karşı “non-json” hatayı da yakalayalım
  try {
    const json = JSON.parse(text);
    return { status: r.status, json, text, base };
  } catch {
    return { status: r.status, json: null, text, base };
  }
}

export default async function DashboardPage() {
  const diag = await getMeDiag();

  if (diag.status !== 200 || !diag.json?.ok) {
    // Ekrana tanı mesajı bırak (geçici)
    return (
      <div className="p-6 space-y-4">
        <h1 className="text-xl font-semibold">Dashboard Giriş Sorunu – Tanı</h1>
        <pre className="text-sm bg-gray-100 p-3 rounded overflow-auto">
{JSON.stringify(diag, null, 2)}
        </pre>
        <p className="text-sm text-gray-600">
          Lütfen bu çıktıyı bana aynen gönder.
        </p>
      </div>
    );
  }

  const user = diag.json.user;
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