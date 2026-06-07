import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: "🏠" },
  { href: "/learn", label: "Kutubxona", icon: "📚" },
  { href: "/tournament", label: "Turnir", icon: "🏆" },
  { href: "/challenges", label: "Keyslar", icon: "💼" },
  { href: "/certification", label: "Mock imtihon", icon: "📝" },
  { href: "/mentor", label: "Mentor", icon: "💬" },
  { href: "/leaderboard", label: "Reyting", icon: "📊" },
];

export default function Sidebar() {
  return (
    <aside style={{
      width: 240,
      background: 'rgba(0,0,0,0.3)',
      borderRight: '1px solid rgba(255,255,255,0.05)',
      padding: '20px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      minHeight: '100vh',
      position: 'sticky',
      top: 0,
    }}>
      <div style={{ padding: '8px 12px', marginBottom: 16 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700 }}>📈 EconQuest</h2>
        <p style={{ color: '#f0d078', fontSize: 12 }}>Pro</p>
      </div>
      {links.map((link) => (
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
            transition: 'all 0.15s',
          }}
        >
          <span>{link.icon}</span>
          {link.label}
        </Link>
      ))}
    </aside>
  );
}