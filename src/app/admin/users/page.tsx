import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function AdminUsersPage() {
  const users = await prisma.user.findMany({
    orderBy: { xp: "desc" },
    take: 20,
  });

  return (
    <div>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>👥 Foydalanuvchilar</h1>
      
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: 14,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          padding: '12px 20px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          color: '#7c8493',
          fontSize: 13,
          fontWeight: 600,
        }}>
          <span>Ism</span>
          <span>XP</span>
          <span>Daraja</span>
          <span>Rol</span>
        </div>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
              padding: '12px 20px',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <span>{user.name || 'Nomsiz'}</span>
            <span style={{ color: '#f0d078' }}>{user.xp}</span>
            <span style={{ color: '#3b82f6' }}>{user.level}</span>
            <span style={{
              color: user.role === 'ADMIN' ? '#f0d078' : '#b0b8c4',
              fontWeight: user.role === 'ADMIN' ? 600 : 400,
            }}>
              {user.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}