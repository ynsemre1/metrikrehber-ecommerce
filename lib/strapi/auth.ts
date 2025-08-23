// lib/strapi/auth.ts

// lib/strapi/auth.ts
// lib/strapi/auth.ts
export async function loginUser(identifier: string, password: string) {
  const r = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // 🔴 ŞART
    body: JSON.stringify({ identifier, password }),
  });
  return r.json();
}

export async function logoutUser() {
  await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
}

export async function getUserWithPackages(token: string) {
  const res = await fetch("https://metrik-api.onrender.com/api/users/me?populate=packages", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Kullanıcı bilgileri alınamadı");

  return res.json();
}