export function getSpinAnimationStyles(isSpin = true) {
  return {
    // transform: isSpin ? 'scale(0)' : 'scale(1)',
    // transition: 'transform 0.3s ease-in-out, border-radius 0.3s ease-in-out',
    animation: isSpin ? `spin 1s linear infinite` : 'none',
  };
}
