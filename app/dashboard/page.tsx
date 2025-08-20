"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUserWithPackages } from "@/lib/strapi/auth";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    getUserWithPackages(token)
      .then(setUser)
      .catch(() => {
        localStorage.removeItem("token");
        router.push("/login");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-8">Yükleniyor...</div>;

  if (!user) return null;

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