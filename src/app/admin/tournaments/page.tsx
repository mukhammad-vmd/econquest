import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function AdminTournamentsPage() {
  const tournaments = await prisma.tournament.findMany({
    include: { quiz: true, entries: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700 }}>🏆 Turnirlar</h1>
        <button style={{
          background: '#10b981',
          color: 'white',
          padding: '10px 20px',
          borderRadius: 20,
          border: 'none',
          fontWeight: 600,
          cursor: 'pointer',
        }}>
          + Yangi turnir
        </button>
      </div>

      {tournaments.length === 0 ? (
        <div style={{ textAlign: 'center', padding: 40, color: '#7c8493' }}>
          Hozircha turnirlar mavjud emas
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {tournaments.map((t) => (
            <div
              key={t.id}
              style={{
                background: 'rgba(255,255,255,0.05)',
                padding: 20,
                borderRadius: 14,
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <h3 style={{ fontSize: 18, fontWeight: 600 }}>{t.title}</h3>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: 16,
                  fontSize: 12,
                  fontWeight: 600,
                  background: t.status === 'LIVE' ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.05)',
                  color: t.status === 'LIVE' ? '#10b981' : '#b0b8c4',
                }}>
                  {t.status}
                </span>
              </div>
              <p style={{ color: '#b0b8c4', fontSize: 14, marginBottom: 8 }}>{t.description}</p>
              <div style={{ display: 'flex', gap: 16, fontSize: 13, color: '#7c8493' }}>
                <span>🏆 Mukofot: {t.prizeCoins} coins + {t.prizeXP} XP</span>
                <span>👥 Qatnashuvchilar: {t.entries.length}</span>
                <span>📝 Test: {t.quiz?.title || 'Yo\'q'}</span>
              </div>
              <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                <button style={{
                  background: '#3b82f6',
                  color: 'white',
                  padding: '6px 16px',
                  borderRadius: 16,
                  border: 'none',
                  fontSize: 13,
                  cursor: 'pointer',
                }}>
                  Tahrirlash
                </button>
                <button style={{
                  background: '#ef4444',
                  color: 'white',
                  padding: '6px 16px',
                  borderRadius: 16,
                  border: 'none',
                  fontSize: 13,
                  cursor: 'pointer',
                }}>
                  O'chirish
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}