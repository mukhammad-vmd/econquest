import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function AdminQuestionsPage() {
  const questions = await prisma.quizQuestion.findMany({
    include: { quiz: true },
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  return (
    <div>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>❓ Savollar</h1>
      
      <button style={{
        background: '#10b981',
        color: 'white',
        padding: '10px 20px',
        borderRadius: 20,
        border: 'none',
        fontWeight: 600,
        cursor: 'pointer',
        marginBottom: 24,
      }}>
        + Yangi savol qo'shish
      </button>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {questions.map((q) => (
          <div
            key={q.id}
            style={{
              background: 'rgba(255,255,255,0.05)',
              padding: 16,
              borderRadius: 12,
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <p style={{ fontWeight: 600, marginBottom: 8 }}>{q.question}</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span style={{
                background: 'rgba(59,130,246,0.15)',
                color: '#3b82f6',
                padding: '4px 10px',
                borderRadius: 16,
                fontSize: 12,
              }}>
                {q.type}
              </span>
              <span style={{
                background: 'rgba(255,255,255,0.05)',
                color: '#b0b8c4',
                padding: '4px 10px',
                borderRadius: 16,
                fontSize: 12,
              }}>
                {q.quiz?.title || 'Test yo\'q'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}