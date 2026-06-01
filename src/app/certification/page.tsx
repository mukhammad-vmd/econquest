export default function CertificationPage() {
  const exams = [
    {
      title: 'ACCA Mock',
      description: 'Financial Accounting, Management Accounting',
      questions: 50,
      time: '90 daqiqa',
      icon: '🏦',
      color: '#f0d078',
    },
    {
      title: 'CFA Level 1',
      description: 'Ethics, Economics, Financial Reporting',
      questions: 40,
      time: '75 daqiqa',
      icon: '📊',
      color: '#3b82f6',
    },
    {
      title: 'FRM Mock',
      description: 'Risk Management asoslari',
      questions: 30,
      time: '60 daqiqa',
      icon: '💹',
      color: '#10b981',
    },
    {
      title: 'CFO Certificate',
      description: 'Korporativ moliya, strategiya',
      questions: 35,
      time: '70 daqiqa',
      icon: '🎯',
      color: '#a78bfa',
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 4 }}>📝 Xalqaro Sertifikat Mock Imtihonlari</h1>
        <p style={{ color: '#b0b8c4' }}>ACCA, CFA, FRM kabi imtihonlarga tayyorlaning — taxminiy ballingizni bilib oling</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
        {exams.map((exam, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(255,255,255,0.05)',
              padding: 24,
              borderRadius: 14,
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 12 }}>{exam.icon}</div>
            <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>{exam.title}</h2>
            <p style={{ color: '#b0b8c4', fontSize: 14, marginBottom: 16 }}>{exam.description}</p>
            <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
              <span style={{
                background: exam.color + '20',
                color: exam.color,
                padding: '4px 12px',
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 600,
              }}>
                {exam.questions} ta savol
              </span>
              <span style={{
                background: 'rgba(255,255,255,0.05)',
                color: '#b0b8c4',
                padding: '4px 12px',
                borderRadius: 20,
                fontSize: 12,
              }}>
                ⏱ {exam.time}
              </span>
            </div>
            <button style={{
              background: exam.color,
              color: '#1a0533',
              padding: '10px 24px',
              borderRadius: 24,
              border: 'none',
              fontWeight: 600,
              cursor: 'pointer',
            }}>
              Mock boshlash
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}