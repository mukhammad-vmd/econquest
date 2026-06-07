import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px 60px",
          background: "linear-gradient(135deg, #2d1b69 0%, #1a0533 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Orqa fondagi abstrakt shakllar */}
        <div
          style={{
            position: "absolute",
            top: -50,
            right: -50,
            width: 300,
            height: 300,
            background: "radial-gradient(circle, rgba(240,208,120,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -30,
            left: -30,
            width: 250,
            height: 250,
            background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <h1
          style={{
            fontSize: "clamp(36px, 8vw, 64px)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: 16,
            letterSpacing: -1,
            position: "relative",
            zIndex: 1,
          }}
        >
          Iqtisodiyotni{" "}
          <span style={{ color: "#f0d078" }}>o‘yin bilan</span> o‘rganing
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 3vw, 20px)",
            color: "#b0b8c4",
            maxWidth: 600,
            margin: "0 auto 32px",
            position: "relative",
            zIndex: 1,
            lineHeight: 1.6,
          }}
        >
          Interaktiv testlar, real keyslar, turnirlar va elektron kitoblar orqali
          iqtisodiy bilimingizni mustahkamlang. O‘yin bilan o‘rganing – natijangiz
          doimiy bo‘lsin.
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Link
            href="/sign-up"
            style={{
              background: "linear-gradient(135deg, #f0d078, #c9953a)",
              color: "#1a0533",
              padding: "14px 36px",
              borderRadius: 30,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 16,
              transition: "all 0.2s",
              boxShadow: "0 4px 20px rgba(240,208,120,0.3)",
            }}
          >
            🚀 Bepul boshlash
          </Link>
          <Link
            href="/sign-in"
            style={{
              background: "rgba(255,255,255,0.1)",
              color: "#fff",
              padding: "14px 36px",
              borderRadius: 30,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 16,
              border: "1px solid rgba(255,255,255,0.2)",
              transition: "all 0.2s",
            }}
          >
            🔑 Kirish
          </Link>
        </div>
      </section>

      {/* ===== IMKONIYATLAR ===== */}
      <section style={{ padding: "60px 20px", maxWidth: 1100, margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 40,
            color: "#fff",
          }}
        >
          Nima uchun aynan biz?
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 24,
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: 28,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8, color: "#fff" }}>
                {f.title}
              </h3>
              <p style={{ color: "#b0b8c4", fontSize: 14, lineHeight: 1.6 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== RAQAMLAR ===== */}
      <section
        style={{
          background: "rgba(240,208,120,0.05)",
          padding: "50px 20px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: "center", minWidth: 120 }}>
              <div style={{ fontSize: 36, fontWeight: 800, color: "#f0d078" }}>
                {s.value}
              </div>
              <div style={{ color: "#b0b8c4", fontSize: 14, marginTop: 4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== QANDAY ISHLAYDI ===== */}
      <section style={{ padding: "60px 20px", maxWidth: 900, margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 40,
            color: "#fff",
          }}
        >
          Qanday ishlaydi?
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 20,
                background: "rgba(255,255,255,0.03)",
                borderRadius: 16,
                padding: 24,
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "#f0d078",
                  color: "#1a0533",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: 20,
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </div>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 6, color: "#fff" }}>
                  {step.title}
                </h3>
                <p style={{ color: "#b0b8c4", lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TESTLAR VA KITOBLAR ===== */}
      <section style={{ padding: "60px 20px", maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              padding: 32,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 40, marginBottom: 12 }}>📝</div>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "#fff" }}>
              80+ Test Savollari
            </h3>
            <p style={{ color: "#b0b8c4", marginBottom: 20 }}>
              4 ta yo‘nalish bo‘yicha bilimingizni sinab ko‘ring
            </p>
            <Link
              href="/learn"
              style={{
                color: "#f0d078",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Boshlash →
            </Link>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              padding: 32,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 40, marginBottom: 12 }}>📚</div>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "#fff" }}>
              Elektron Kitoblar
            </h3>
            <p style={{ color: "#b0b8c4", marginBottom: 20 }}>
              Klassik iqtisodiy asarlarni bevosita o‘qing
            </p>
            <Link
              href="/books"
              style={{
                color: "#f0d078",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Kutubxonaga o‘tish →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== OXIRGI CTA ===== */}
      <section
        style={{
          textAlign: "center",
          padding: "60px 20px",
          background: "linear-gradient(135deg, #2d1b69, #1a0533)",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 5vw, 40px)",
            fontWeight: 700,
            color: "#fff",
            marginBottom: 16,
          }}
        >
          Bilimingizni sinab ko‘rishga tayyormisiz?
        </h2>
        <p
          style={{
            color: "#b0b8c4",
            maxWidth: 500,
            margin: "0 auto 32px",
            fontSize: 16,
          }}
        >
          Hoziroq ro‘yxatdan o‘ting va birinchi darsingizni boshlang.
        </p>
        <Link
          href="/sign-up"
          style={{
            background: "linear-gradient(135deg, #f0d078, #c9953a)",
            color: "#1a0533",
            padding: "16px 40px",
            borderRadius: 30,
            textDecoration: "none",
            fontWeight: 700,
            fontSize: 18,
            boxShadow: "0 6px 24px rgba(240,208,120,0.4)",
          }}
        >
          ✨ Ro‘yxatdan o‘tish
        </Link>
      </section>
    </div>
  );
}

// Ma'lumotlar massivlari
const features = [
  {
    icon: "📚",
    title: "4 ta o‘quv moduli",
    desc: "Iqtisodiy tarix, nazariya, makro va mikroiqtisodiyot bo‘yicha 200+ fakt va testlar.",
  },
  {
    icon: "🏆",
    title: "Haftalik turnirlar",
    desc: "30 ta savoldan iborat turnirda qatnashing va haqiqiy pul mukofotlarini yutib oling.",
  },
  {
    icon: "💼",
    title: "Real biznes keyslar",
    desc: "Haqiqiy kompaniyalar muammolariga iqtisodiy yechim toping va moliyaviy rag‘bat oling.",
  },
  {
    icon: "📝",
    title: "Sertifikat mock imtihonlari",
    desc: "ACCA, CFA, FRM kabi xalqaro imtihonlarga tayyorlaning, ballingizni bashorat qiling.",
  },
];

const stats = [
  { value: "4", label: "Modullar" },
  { value: "80+", label: "Testlar" },
  { value: "3", label: "Kitoblar" },
  { value: "24/7", label: "Qo‘llab-quvvatlash" },
];

const steps = [
  {
    title: "Ro‘yxatdan o‘ting",
    desc: "Bir necha soniyada hisobingizni yarating va barcha imkoniyatlarga ega bo‘ling.",
  },
  {
    title: "Modulni tanlang",
    desc: "Qiziqqan yo‘nalishingiz bo‘yicha materiallarni o‘rganing yoki testlarni ishlang.",
  },
  {
    title: "Natijalarni kuzating",
    desc: "XP ball to‘plang, darajangizni oshiring va yetakchilar qatoridan joy oling.",
  },
];