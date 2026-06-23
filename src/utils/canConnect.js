export function canConnect(a, b) {
  const lastTwoDigits = a.slice(-2);
  const firstTwoDigits = b.slice(0, 2);
  return lastTwoDigits === firstTwoDigits;
}
