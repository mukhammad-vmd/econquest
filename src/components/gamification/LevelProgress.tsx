import { getLevelFromXP, getLevelProgress, getXPForNextLevel } from "@/lib/gamification";

export default function LevelProgress({ xp }: { xp: number }) {
  const level = getLevelFromXP(xp);
  const progress = getLevelProgress(xp);
  const nextXP = getXPForNextLevel(xp);

  return (
    <div style={{
      background: 'rgba(255,255,255,0.05)',
      padding: 16,
      borderRadius: 14,
      border: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontWeight: 600, color: '#b0b8c4' }}>Daraja {level}</span>
        {nextXP && <span style={{ color: '#7c8493', fontSize: 13 }}>Keyingi: {nextXP} XP</span>}
      </div>
      <div style={{ height: 8, background: 'rgba(255,255,255,0.1)', borderRadius: 10, overflow: 'hidden' }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #f0d078, #c9953a)',
          borderRadius: 10,
          transition: 'width 0.5s',
        }} />
      </div>
    </div>
  );
}