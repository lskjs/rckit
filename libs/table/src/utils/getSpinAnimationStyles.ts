export function getSpinAnimationStyles({ isSpin = true, isReverse = false, isMirror = false }) {
  const animationName = `spin${isMirror ? '-mirror' : ''}${isReverse ? '-reverse' : ''}`;
  return {
    transform: isMirror ? 'scaleX(-1)' : 'none',
    animation: isSpin ? `${animationName} 1s linear infinite` : 'none',
  };
}
