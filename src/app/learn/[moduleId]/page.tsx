import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

export default async function ModulePage({
  params,
}: {
  params: { moduleId: string };
}) {
  const module = await prisma.module.findUnique({
    where: { id: params.moduleId },
    include: { facts: { orderBy: { order: "asc" } } },
  });

  if (!module) {
    return (
      <div style={{ textAlign: 'center', padding: 60 }}>
        <h2>Modul topilmadi</h2>
        <Link href="/learn" style={{ color: '#3b82f6' }}>← Modullarga qaytish</Link>
      </div>
    );
  }

  return (
    <div>
      <Link href="/learn" style={{ color: '#3b82f6', marginBottom: 16, display: 'inline-block' }}>
        ← Modullarga qaytish
      </Link>
      
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>{module.title}</h1>
      <p style={{ color: '#b0b8c4', marginBottom: 32 }}>{module.description}</p>

      <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 16 }}>
        📖 Faktlar ({module.facts.length} ta)
      </h2>

      {module.facts.length === 0 ? (
        <p style={{ color: '#b0b8c4' }}>Hozircha faktlar qo'shilmagan.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {module.facts.map((fact, i) => (
            <div
              key={fact.id}
              style={{
                background: 'rgba(255,255,255,0.05)',
                padding: 20,
                borderRadius: 12,
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
              }}
            >
              <span style={{
                background: '#3b82f6',
                color: 'white',
                width: 28,
                height: 28,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 13,
                fontWeight: 700,
                flexShrink: 0,
              }}>
                {i + 1}
              </span>
              <p style={{ lineHeight: 1.6 }}>{fact.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}