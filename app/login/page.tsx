'use client';
import { useState } from 'react';

export default function LoginPage() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      const r = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password }),
      });
      if (!r.ok) {
        const jj = await r.json().catch(() => ({}));
        throw new Error(jj?.error || 'Login failed');
      }
      window.location.href = '/dashboard';
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-sm mx-auto py-20">
      <h1 className="text-2xl font-semibold mb-6">Giriş Yap</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input className="w-full rounded border px-3 py-2"
               type="email" placeholder="Email"
               value={identifier} onChange={e=>setIdentifier(e.target.value)} required />
        <input className="w-full rounded border px-3 py-2"
               type="password" placeholder="Şifre"
               value={password} onChange={e=>setPassword(e.target.value)} required />
        {err && <p className="text-red-600 text-sm">{err}</p>}
        <button disabled={loading} className="w-full rounded bg-black text-white py-2 disabled:opacity-50">
          {loading ? 'Giriş yapılıyor…' : 'Giriş yap'}
        </button>
      </form>
    </div>
  );
}