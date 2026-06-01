export default function MentorPage() {
  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 4 }}>💬 Mentor bilan bog'lanish</h1>
        <p style={{ color: '#b0b8c4' }}>Iqtisodiyot bo'yicha savolingizni yuboring. Mentor shaxsan javob beradi.</p>
      </div>

      <div style={{
        background: 'rgba(255,255,255,0.05)',
        padding: 28,
        borderRadius: 14,
        border: '1px solid rgba(255,255,255,0.08)',
      }}>
        <textarea
          placeholder="Savolingizni batafsil yozing..."
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#7c8493', fontSize: 13 }}>Javob 24 soat ichida beriladi</span>
          <button style={{
            background: '#f0d078',
            color: '#1a0533',
            padding: '12px 28px',
            borderRadius: 24,
            border: 'none',
            fontWeight: 600,
            cursor: 'pointer',
          }}>
            Yuborish
          </button>
        </div>
      </div>
    </div>
  );
}