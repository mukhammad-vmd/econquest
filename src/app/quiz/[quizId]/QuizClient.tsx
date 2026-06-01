"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function QuizClient({ quiz }: { quiz: any }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [finished, setFinished] = useState(false);
  const router = useRouter();

  const questions = quiz.questions;
  const q = questions[current];
  
  let opts: string[] = [];
  try {
    opts = typeof q.options === 'string' ? JSON.parse(q.options) : q.options;
  } catch {
    opts = [];
  }

  const handleAnswer = (index: number) => {
    setAnswers((prev) => ({ ...prev, [current]: index }));
  };

  const next = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent((c) => c - 1);
    }
  };

  const finish = () => {
    setFinished(true);
  };

  if (finished) {
    let score = 0;
    questions.forEach((q: any, i: number) => {
      const correct = JSON.parse(typeof q.correct === 'string' ? q.correct : JSON.stringify(q.correct))[0];
      if (answers[i] === correct) score++;
    });

    return (
      <div style={{ textAlign: 'center', padding: 60 }}>
        <div style={{ fontSize: 64, fontWeight: 800, color: '#f0d078', marginBottom: 8 }}>
          {score}/{questions.length}
        </div>
        <p style={{ color: '#b0b8c4', fontSize: 18, marginBottom: 24 }}>
          {score >= questions.length * 0.7 ? "🎉 Ajoyib natija!" : score >= questions.length * 0.5 ? "👍 Yaxshi!" : "📚 Ko'proq o'rganing"}
        </p>
        <button
          onClick={() => router.push("/learn")}
          style={{
            background: '#f0d078',
            color: '#1a0533',
            padding: '12px 28px',
            borderRadius: 24,
            border: 'none',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Kutubxonaga qaytish
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 700, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24, color: '#b0b8c4', fontSize: 14 }}>
        <span>{current + 1} / {questions.length}</span>
        <span>⏱ {Math.floor(quiz.timeLimit / 60)}:00</span>
      </div>

      <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 24, lineHeight: 1.5 }}>
        {q.question}
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
        {opts.map((opt: string, i: number) => (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            style={{
              width: '100%',
              textAlign: 'left',
              padding: '14px 18px',
              background: answers[current] === i ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.05)',
              border: answers[current] === i ? '1.5px solid #3b82f6' : '1.5px solid rgba(255,255,255,0.1)',
              borderRadius: 12,
              color: 'white',
              fontSize: 15,
              cursor: 'pointer',
            }}
          >
            {String.fromCharCode(65 + i)}) {opt}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={prev} disabled={current === 0} style={{
          padding: '10px 24px', borderRadius: 24,
          border: '1px solid rgba(255,255,255,0.2)', background: 'transparent',
          color: 'white', fontWeight: 600,
          cursor: current === 0 ? 'not-allowed' : 'pointer',
          opacity: current === 0 ? 0.4 : 1,
        }}>
          ← Oldingi
        </button>
        {current < questions.length - 1 ? (
          <button onClick={next} style={{
            padding: '10px 24px', borderRadius: 24,
            border: 'none', background: '#3b82f6',
            color: 'white', fontWeight: 600, cursor: 'pointer',
          }}>
            Keyingi →
          </button>
        ) : (
          <button onClick={finish} style={{
            padding: '10px 24px', borderRadius: 24,
            border: 'none', background: '#10b981',
            color: 'white', fontWeight: 600, cursor: 'pointer',
          }}>
            Yakunlash ✓
          </button>
        )}
      </div>
    </div>
  );
}