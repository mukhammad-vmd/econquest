import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function LearnPage() {
  const modules = await prisma.module.findMany({
    orderBy: { order: "asc" },
  });

  const categories: Record<string, { icon: string; color: string }> = {
    ECONOMIC_HISTORY: { icon: '📜', color: '#f59e0b' },
    ECONOMIC_THEORY: { icon: '🧠', color: '#3b82f6' },
    MACROECONOMICS: { icon: '🌍', color: '#10b981' },
    MICROECONOMICS: { icon: '🔬', color: '#a78bfa' },
  };

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 4 }}>📚 O'quv modullari</h1>
        <p style={{ color: '#b0b8c4' }}>4 ta asosiy yo'nalish bo'yicha bilimingizni mustahkamlang</p>
      </div>

      {modules.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: 60, 
          background: 'rgba(255,255,255,0.05)', 
          borderRadius: 14 
        }}>
          <p style={{ color: '#b0b8c4' }}>Hozircha modullar mavjud emas. Seed ma'lumotlarni qo'shing.</p>
        </div>
      ) : (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: 16 
        }}>
          {modules.map((mod) => {
            const cat = categories[mod.category] || { icon: '📖', color: '#6b7280' };
            return (
              <a
                key={mod.id}
                href={`/learn/${mod.id}`}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  padding: 24,
                  borderRadius: 14,
                  textDecoration: 'none',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{cat.icon}</span>
                  <h2 style={{ fontSize: 20, fontWeight: 600 }}>{mod.title}</h2>
                </div>
                <p style={{ color: '#b0b8c4', fontSize: 14, marginBottom: 12 }}>{mod.description}</p>
                <span style={{
                  background: cat.color + '20',
                  color: cat.color,
                  padding: '4px 12px',
                  borderRadius: 20,
                  fontSize: 12,
                  fontWeight: 600,
                }}>
                  {mod.category.replace('_', ' ')}
                </span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
<a
  href="/quiz/test"
  style={{
    display: 'inline-block',
    marginTop: 12,
    background: '#3b82f6',
    color: 'white',
    padding: '8px 20px',
    borderRadius: 20,
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 600,
  }}
>
  📝 Test demo
</a>