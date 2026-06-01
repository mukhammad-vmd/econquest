export default function LeaderboardPage() {
  const users = [
    { rank: 1, name: 'Nigora K.', xp: '12,500 XP', color: '#f0d078', icon: '🥇' },
    { rank: 2, name: 'Azizbek R.', xp: '11,200 XP', color: '#a0aec0', icon: '🥈' },
    { rank: 3, name: 'Dilshod N.', xp: '10,800 XP', color: '#cd7f32', icon: '🥉' },
    { rank: 4, name: 'Shahnoza M.', xp: '9,900 XP', color: '#3b82f6', icon: '4' },
    { rank: 5, name: 'Madina T.', xp: '9,400 XP', color: '#10b981', icon: '5' },
    { rank: 12, name: 'Siz', xp: '2,450 XP', color: '#a78bfa', icon: '12', isYou: true },
  ];

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 4 }}>📊 Global Reyting</h1>
        <p style={{ color: '#b0b8c4' }}>Barcha vaqtlar bo'yicha eng yaxshi o'yinchilar</p>
      </div>

      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: 14,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)',
      }}>
        {users.map((user, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: '16px 20px',
              borderBottom: i < users.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              background: user.isYou ? 'rgba(168,123,250,0.1)' : 'transparent',
            }}
          >
            <span style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: user.color + '20',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: 16,
              color: user.color,
              flexShrink: 0,
            }}>
              {user.icon}
            </span>
            <span style={{ flex: 1, fontWeight: 500 }}>{user.name}</span>
            <span style={{ fontWeight: 700, color: '#f0d078' }}>{user.xp}</span>
          </div>
        ))}
      </div>
    </div>
  );
}