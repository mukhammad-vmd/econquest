import { currentUser } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    return (
      <div style={{ textAlign: 'center', padding: 60 }}>
        <h2 style={{ fontSize: 28, marginBottom: 16 }}>🔒 Tizimga kirish kerak</h2>
        <a href="/sign-in" style={{ 
          background: '#f0d078', color: '#000', padding: '12px 32px', 
          borderRadius: 24, textDecoration: 'none', fontWeight: 600 
        }}>
          Kirish
        </a>
      </div>
    );
  }

  const dbUser = await prisma.user.upsert({
    where: { clerkId: user.id },
    update: {},
    create: {
      clerkId: user.id,
      email: user.emailAddresses[0]?.emailAddress ?? "",
      name: user.fullName ?? "Student",
    },
  });

  const stats = [
    { label: 'XP ball', value: dbUser.xp, color: '#f0d078', icon: '⭐' },
    { label: 'Daraja', value: dbUser.level, color: '#3b82f6', icon: '📊' },
    { label: 'Coins', value: dbUser.coins, color: '#10b981', icon: '🪙' },
    { label: 'Testlar', value: '0', color: '#a78bfa', icon: '📝' },
  ];

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 4 }}>
          👋 Salom, {dbUser.name}!
        </h1>
        <p style={{ color: '#b0b8c4' }}>O'rganishda davom eting. Bugun yangi bilimlar kuni!</p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: 16, 
        marginBottom: 32 
      }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ 
            background: 'rgba(255,255,255,0.05)', 
            padding: 20, 
            borderRadius: 14, 
            textAlign: 'center',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            <div style={{ fontSize: 28, marginBottom: 4 }}>{stat.icon}</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: stat.color }}>{stat.value}</div>
            <div style={{ color: '#7c8493', fontSize: 13, marginTop: 4 }}>{stat.label}</div>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 16 }}>📌 Tezkor havolalar</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <a href="/learn" style={{
          background: 'rgba(255,255,255,0.05)', padding: 20, borderRadius: 14,
          textDecoration: 'none', color: 'white', border: '1px solid rgba(255,255,255,0.08)',
          transition: 'all 0.2s'
        }}>
          <div style={{ fontSize: 20, marginBottom: 8 }}>📚</div>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>Kutubxona</h3>
          <p style={{ color: '#b0b8c4', fontSize: 14 }}>Iqtisodiyot modullarini o'rganing</p>
        </a>
        <a href="/tournament" style={{
          background: 'rgba(255,255,255,0.05)', padding: 20, borderRadius: 14,
          textDecoration: 'none', color: 'white', border: '1px solid rgba(255,255,255,0.08)',
          transition: 'all 0.2s'
        }}>
          <div style={{ fontSize: 20, marginBottom: 8 }}>🏆</div>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>Haftalik Turnir</h3>
          <p style={{ color: '#b0b8c4', fontSize: 14 }}>30 ta savol • Reyting ochkolari</p>
        </a>
      </div>
    </div>
  );
}