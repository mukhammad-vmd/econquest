export const LEVEL_THRESHOLDS = [0, 300, 800, 1500, 3000, 6000, 10000, 20000, 50000, 100000];

export function getLevelFromXP(xp: number) {
  let level = 1;
  for (let i = 1; i < LEVEL_THRESHOLDS.length; i++) {
    if (xp >= LEVEL_THRESHOLDS[i]) level = i + 1;
  }
  return Math.min(level, 10);
}

export function getXPForNextLevel(xp: number) {
  const currentLevel = getLevelFromXP(xp);
  if (currentLevel >= 10) return null;
  return LEVEL_THRESHOLDS[currentLevel]; // currentLevel 1 -> index 1, etc.
}

export function getLevelProgress(xp: number) {
  const currentLevel = getLevelFromXP(xp);
  if (currentLevel >= 10) return 100;
  const currentLevelXP = LEVEL_THRESHOLDS[currentLevel - 1];
  const nextLevelXP = LEVEL_THRESHOLDS[currentLevel];
  const progress = ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
  return Math.min(100, Math.max(0, Math.round(progress)));
}