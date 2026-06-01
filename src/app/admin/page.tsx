import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function AdminPage() {
  const usersCount = await prisma.user.count();
  const quizzesCount = await prisma.quiz.count();
  const modulesCount = await prisma.module.count();
  const questionsCount = await prisma.quizQuestion.count();

  const stats = [
    { label: 'Foydalanuvchilar', value: usersCount, icon: '👥', color: '#3b82f6' },
    { label: 'Testlar', value: quizzesCount, icon: '📝', color: '#10b981' },
    { label: 'Modullar', value: modulesCount, icon: '📚', color: '#f0d078' },
    { label: 'Savollar', value: questionsCount, icon: '❓', color: '#a78bfa' },
  ];

  return (
    <div>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>Admin Dashboard</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 }}>
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(255,255,255,0.05)',
              padding: 20,
              borderRadius: 14,
              border: '1px solid rgba(255,255,255,0.08)',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 8 }}>{stat.icon}</div>
            <div style={{ fontSize: 32, fontWeight: 700, color: stat.color }}>{stat.value}</div>
            <div style={{ color: '#7c8493', fontSize: 13, marginTop: 4 }}>{stat.label}</div>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>⚡ Tezkor amallar</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        <a href="/admin/questions" style={{
          background: 'rgba(255,255,255,0.05)',
          padding: 20, borderRadius: 14, textDecoration: 'none', color: 'white',
          border: '1px solid rgba(255,255,255,0.08)',
        }}>
          <div style={{ fontSize: 24, marginBottom: 8 }}>❓</div>
          <h3 style={{ fontSize: 16, fontWeight: 600 }}>Savollar</h3>
          <p style={{ color: '#7c8493', fontSize: 13 }}>Yangi savol qo'shish</p>
        </a>
        <a href="/admin/tournaments" style={{
          background: 'rgba(255,255,255,0.05)',
          padding: 20, borderRadius: 14, textDecoration: 'none', color: 'white',
          border: '1px solid rgba(255,255,255,0.08)',
        }}>
          <div style={{ fontSize: 24, marginBottom: 8 }}>🏆</div>
          <h3 style={{ fontSize: 16, fontWeight: 600 }}>Turnirlar</h3>
          <p style={{ color: '#7c8493', fontSize: 13 }}>Turnir yaratish</p>
        </a>
        <a href="/admin/users" style={{
          background: 'rgba(255,255,255,0.05)',
          padding: 20, borderRadius: 14, textDecoration: 'none', color: 'white',
          border: '1px solid rgba(255,255,255,0.08)',
        }}>
          <div style={{ fontSize: 24, marginBottom: 8 }}>👥</div>
          <h3 style={{ fontSize: 16, fontWeight: 600 }}>Foydalanuvchilar</h3>
          <p style={{ color: '#7c8493', fontSize: 13 }}>Ro'yxatni ko'rish</p>
        </a>
      </div>
    </div>
  );
}