import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function AdminChallengesPage() {
  const challenges = await prisma.challenge.findMany({
    include: { submissions: { include: { user: true } }, winner: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700 }}>💼 Keyslar</h1>
        <button style={{
          background: '#10b981',
          color: 'white',
          padding: '10px 20px',
          borderRadius: 20,
          border: 'none',
          fontWeight: 600,
          cursor: 'pointer',
        }}>
          + Yangi keys
        </button>
      </div>

      {challenges.length === 0 ? (
        <div style={{ textAlign: 'center', padding: 40, color: '#7c8493' }}>
          Hozircha keyslar mavjud emas
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {challenges.map((c) => (
            <div
              key={c.id}
              style={{
                background: 'rgba(255,255,255,0.05)',
                padding: 20,
                borderRadius: 14,
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <h3 style={{ fontSize: 18, fontWeight: 600 }}>{c.title}</h3>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: 16,
                  fontSize: 12,
                  fontWeight: 600,
                  background: c.status === 'ACTIVE' ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.05)',
                  color: c.status === 'ACTIVE' ? '#10b981' : '#b0b8c4',
                }}>
                  {c.status}
                </span>
              </div>
              <p style={{ color: '#b0b8c4', fontSize: 14, marginBottom: 8 }}>{c.scenario.substring(0, 100)}...</p>
              <div style={{ display: 'flex', gap: 16, fontSize: 13, color: '#7c8493', marginBottom: 12 }}>
                <span>💰 Mukofot: {c.prize}</span>
                <span>📥 Yechimlar: {c.submissions.length} ta</span>
                <span>🏆 G'olib: {c.winner?.name || 'Tanlanmagan'}</span>
              </div>

              {/* Submissions */}
              {c.submissions.length > 0 && (
                <div style={{ marginTop: 12 }}>
                  <p style={{ fontSize: 13, color: '#7c8493', marginBottom: 8 }}>Yechimlar:</p>
                  {c.submissions.map((s) => (
                    <div
                      key={s.id}
                      style={{
                        background: 'rgba(0,0,0,0.3)',
                        padding: 12,
                        borderRadius: 8,
                        marginBottom: 8,
                        border: '1px solid rgba(255,255,255,0.05)',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                        <span style={{ fontWeight: 600, fontSize: 14 }}>{s.user.name || 'Nomsiz'}</span>
                        <span style={{ fontSize: 12, color: '#7c8493' }}>⭐ {s.votes} ovoz</span>
                      </div>
                      <p style={{ fontSize: 13, color: '#b0b8c4' }}>{s.content.substring(0, 100)}...</p>
                      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                        <button style={{
                          background: '#10b981',
                          color: 'white',
                          padding: '4px 12px',
                          borderRadius: 12,
                          border: 'none',
                          fontSize: 12,
                          cursor: 'pointer',
                        }}>
                          G'olib tanlash
                        </button>
                        <button style={{
                          background: '#3b82f6',
                          color: 'white',
                          padding: '4px 12px',
                          borderRadius: 12,
                          border: 'none',
                          fontSize: 12,
                          cursor: 'pointer',
                        }}>
                          Ko'rish
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

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