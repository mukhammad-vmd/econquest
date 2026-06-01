import Link from "next/link";

const adminLinks = [
  { href: "/admin", label: "Dashboard", icon: "📊" },
  { href: "/admin/questions", label: "Savollar", icon: "❓" },
  { href: "/admin/tournaments", label: "Turnirlar", icon: "🏆" },
  { href: "/admin/challenges", label: "Keyslar", icon: "💼" },
  { href: "/admin/users", label: "Foydalanuvchilar", icon: "👥" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{
        width: 240,
        background: 'rgba(0,0,0,0.4)',
        borderRight: '1px solid rgba(255,255,255,0.05)',
        padding: '20px 12px',
      }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, padding: '8px 12px', marginBottom: 16, color: '#f0d078' }}>
          ⚙️ Admin Panel
        </h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {adminLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 14px',
                borderRadius: 10,
                color: '#b0b8c4',
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              <span>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main style={{ flex: 1, padding: 32 }}>
        {children}
      </main>
    </div>
  );
}