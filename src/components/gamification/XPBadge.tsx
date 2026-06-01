export default function XPBadge({ xp }: { xp: number }) {
  return (
    <div style={{
      background: 'rgba(240,208,120,0.1)',
      border: '1px solid rgba(240,208,120,0.3)',
      padding: '12px 20px',
      borderRadius: 30,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: '#f0d078',
      fontWeight: 700,
      fontSize: 18,
    }}>
      ⭐ {xp.toLocaleString()} XP
    </div>
  );
}