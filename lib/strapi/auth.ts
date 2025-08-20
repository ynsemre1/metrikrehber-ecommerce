// lib/strapi/auth.ts

export async function loginUser(identifier: string, password: string) {
  const res = await fetch("https://metrik-api.onrender.com/api/auth/local", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ identifier, password }),
  });

  const data = await res.json();
  return data;
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