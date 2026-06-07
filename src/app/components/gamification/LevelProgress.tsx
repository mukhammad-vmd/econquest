export default function LevelProgress({ xp }: { xp: number }) {
  const level = Math.floor(xp / 300) + 1;
  const progress = Math.min(100, ((xp % 300) / 300) * 100);
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ color: '#b0b8c4', fontSize: 13 }}>Daraja {level}</span>
        <span style={{ color: '#7c8493', fontSize: 13 }}>{progress}%</span>
      </div>
      <div style={{ height: 6, background: 'rgba(255,255,255,0.1)', borderRadius: 10 }}>
        <div style={{ width: `${progress}%`, height: '100%', background: '#f0d078', borderRadius: 10 }} />
      </div>
    </div>
  );
}