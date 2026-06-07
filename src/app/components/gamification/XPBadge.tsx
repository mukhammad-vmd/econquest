export default function XPBadge({ xp }: { xp: number }) {
  return (
    <span style={{
      background: 'rgba(240,208,120,0.1)',
      color: '#f0d078',
      padding: '6px 16px',
      borderRadius: 20,
      fontWeight: 700,
      fontSize: 14,
      border: '1px solid rgba(240,208,120,0.3)',
    }}>
      ⭐ {xp} XP
    </span>
  );
}