export default function TournamentPage() {
  const leaderboard = [
    { rank: 1, name: 'Nigora K.', score: '28/30', color: '#f0d078' },
    { rank: 2, name: 'Azizbek R.', score: '26/30', color: '#a0aec0' },
    { rank: 3, name: 'Shahnoza M.', score: '25/30', color: '#cd7f32' },
    { rank: 4, name: 'Jamshid D. (siz)', score: '24/30', color: '#3b82f6' },
    { rank: 5, name: 'Bekzod A.', score: '23/30', color: 'transparent' },
  ];

  return (
    <div>
      <div style={{ 
        background: 'linear-gradient(135deg, #1a0533, #2d1b69)', 
        padding: 40, 
        borderRadius: 16, 
        textAlign: 'center',
        marginBottom: 32,
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>🏆 Haftalik Iqtisodiyot Turniri</h1>
        <p style={{ color: '#b0b8c4', marginBottom: 20 }}>30 ta savol • 25 daqiqa • Har hafta yangilanadi</p>
        <div style={{ fontSize: 48, fontWeight: 800, color: '#f0d078', marginBottom: 20 }}>
          🏅 500,000 so'm
        </div>
        <p style={{ color: '#7c8493', fontSize: 14, marginBottom: 24 }}>
          1-o'rin: 500,000 so'm • 2-o'rin: 300,000 so'm • 3-o'rin: 150,000 so'm
        </p>
        <button style={{
          background: 'linear-gradient(135deg, #f0d078, #c9953a)',
          color: '#1a0533',
          padding: '14px 40px',
          borderRadius: 28,
          border: 'none',
          fontWeight: 700,
          fontSize: 16,
          cursor: 'pointer',
        }}>
          Turnirni boshlash
        </button>
        <p style={{ color: '#7c8493', fontSize: 13, marginTop: 12 }}>
          ⏳ Keyingi turnir: Yakshanba 21:00 gacha
        </p>
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 16 }}>📊 Joriy hafta reytingi</h2>
      <div style={{ 
        background: 'rgba(255,255,255,0.05)', 
        borderRadius: 14, 
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)'
      }}>
        {leaderboard.map((user, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: '14px 20px',
              borderBottom: i < leaderboard.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              background: user.rank === 4 ? 'rgba(59,130,246,0.1)' : 'transparent',
            }}
          >
            <span style={{
              width: 32, height: 32, borderRadius: '50%',
              background: user.color !== 'transparent' ? user.color : 'rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: 14, color: user.color !== 'transparent' ? '#1a0533' : 'white',
              flexShrink: 0,
            }}>
              {user.rank}
            </span>
            <span style={{ flex: 1, fontWeight: 500 }}>{user.name}</span>
            <span style={{ fontWeight: 700, color: '#f0d078' }}>{user.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}