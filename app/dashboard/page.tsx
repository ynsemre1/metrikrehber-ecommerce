import { getMe } from '@/lib/strapi';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  try {
    const me = await getMe<any>();
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold">Merhaba, {me.username || me.email}</h1>
        <form action="/api/auth/logout" method="post" className="mt-4">
          <button className="rounded border px-3 py-2">Çıkış Yap</button>
        </form>
      </div>
    );
  } catch {
    redirect('/login');
  }
}