"use client";

import { useState } from "react";

export default function ChallengesPage() {
  const [showForm, setShowForm] = useState(false);
  const [solution, setSolution] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (solution.trim().length < 20) {
      alert("Iltimos, yechimni batafsilroq yozing (kamida 20 ta belgi).");
      return;
    }
    // Bu yerda haqiqiy API chaqiruvi bo‘ladi
    setSubmitted(true);
    setShowForm(false);
  };

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 4 }}>💼 Real Biznes Keyslar</h1>
        <p style={{ color: '#b0b8c4' }}>Haqiqiy biznes muammolariga yechim toping va mukofot qo'lga kiriting</p>
      </div>

      <div style={{
        background: 'rgba(255,255,255,0.05)',
        padding: 28,
        borderRadius: 14,
        border: '1px solid rgba(255,255,255,0.08)',
        borderLeft: '4px solid #f0d078',
        marginBottom: 24,
      }}>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>🏭 "TexnoPlast" kompaniyasi</h2>
        <p style={{ color: '#b0b8c4', marginBottom: 8, lineHeight: 1.6 }}>
          <strong>Vaziyat:</strong> Plastmassa mahsulotlar ishlab chiqaruvchi "TexnoPlast" so'nggi 2 yilda daromadi 40% ga tushib ketdi. 
          Xomashyo narxlari oshgan, raqobatchilar arzon import bilan bozorni egallagan. Kompaniya 150 nafar xodimga ega va kredit to'lovlari yuqori.
        </p>
        <p style={{ color: '#b0b8c4', marginBottom: 16, lineHeight: 1.6 }}>
          <strong>Vazifa:</strong> 3 bosqichli strategiya ishlab chiqing: qisqa muddatli xarajatlarni optimizatsiya qilish, 
          o'rta muddatli mahsulot diversifikatsiyasi, uzoq muddatli bozor pozitsiyasini tiklash.
        </p>

        {submitted ? (
          <div style={{
            background: 'rgba(16,185,129,0.15)',
            color: '#10b981',
            padding: '12px 20px',
            borderRadius: 12,
            fontWeight: 600,
            border: '1px solid rgba(16,185,129,0.3)',
          }}>
            ✅ Yechimingiz muvaffaqiyatli yuborildi! Natijalar hafta oxirida e'lon qilinadi.
          </div>
        ) : showForm ? (
          <div style={{ marginTop: 16 }}>
            <textarea
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
              placeholder="Strategiyangizni batafsil tavsiflang..."
              style={{
                width: '100%',
                minHeight: 150,
                background: 'rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 12,
                padding: 16,
                color: 'white',
                fontSize: 15,
                fontFamily: 'inherit',
                resize: 'vertical',
                marginBottom: 16,
              }}
            />
            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowForm(false)}
                style={{
                  background: 'transparent',
                  color: '#b0b8c4',
                  padding: '10px 24px',
                  borderRadius: 24,
                  border: '1px solid rgba(255,255,255,0.2)',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                Bekor qilish
              </button>
              <button
                onClick={handleSubmit}
                style={{
                  background: '#f0d078',
                  color: '#1a0533',
                  padding: '10px 24px',
                  borderRadius: 24,
                  border: 'none',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Yuborish
              </button>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <span style={{
              background: 'rgba(16,185,129,0.15)',
              color: '#10b981',
              padding: '6px 16px',
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 600,
              border: '1px solid rgba(16,185,129,0.3)',
            }}>
              💰 Mukofot: 1,000,000 so'm
            </span>
            <span style={{ color: '#7c8493', fontSize: 13 }}>
              ⏳ Deadline: 5 kun qoldi
            </span>
            <button
              onClick={() => setShowForm(true)}
              style={{
                background: '#f0d078',
                color: '#1a0533',
                padding: '10px 24px',
                borderRadius: 24,
                border: 'none',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Yechim yuborish
            </button>
          </div>
        )}
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 16 }}>📋 Oldingi g'oliblar</h2>
      <div style={{ 
        background: 'rgba(255,255,255,0.05)', 
        borderRadius: 14, 
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)'
      }}>
        {[
          { name: 'Dilshod N.', prize: 'Eng zo\'r strategiya', icon: '🥇' },
          { name: 'Madina T.', prize: 'Innovatsion yondashuv', icon: '🥈' },
        ].map((winner, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: '14px 20px',
              borderBottom: i === 0 ? '1px solid rgba(255,255,255,0.05)' : 'none',
            }}
          >
            <span style={{ fontSize: 24 }}>{winner.icon}</span>
            <span style={{ flex: 1, fontWeight: 500 }}>{winner.name}</span>
            <span style={{ color: '#b0b8c4' }}>{winner.prize}</span>
          </div>
        ))}
      </div>
    </div>
  );
}