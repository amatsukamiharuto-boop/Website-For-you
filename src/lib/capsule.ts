/** Samakan huruf besar/kecil, spasi berlebih, dan tanda diakritik. */
export function normalizeKey(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

export function isAccepted(input: string, accepted: readonly string[]): boolean {
  const attempt = normalizeKey(input);
  if (!attempt) return false;
  return accepted.some((answer) => normalizeKey(answer) === attempt);
}
