export default function Achievement({ name, description, icon, unlocked }: {
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
}) {
  return (
    <div style={{
      background: unlocked ? 'rgba(240,208,120,0.1)' : 'rgba(255,255,255,0.03)',
      border: `1px solid ${unlocked ? 'rgba(240,208,120,0.3)' : 'rgba(255,255,255,0.08)'}`,
      padding: 12,
      borderRadius: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      opacity: unlocked ? 1 : 0.5,
    }}>
      <span style={{ fontSize: 24 }}>{icon}</span>
      <div>
        <div style={{ fontWeight: 600, color: unlocked ? '#f0d078' : '#b0b8c4' }}>{name}</div>
        <div style={{ fontSize: 12, color: '#7c8493' }}>{description}</div>
      </div>
    </div>
  );
}