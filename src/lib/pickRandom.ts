/**
 * Pilih indeks acak dari daftar sepanjang `length`,
 * tidak pernah sama dengan indeks sebelumnya (kecuali hanya ada 1 item).
 */
export function pickRandomIndex(length: number, previous: number | null): number {
  if (length <= 1) return 0;
  let next = Math.floor(Math.random() * length);
  if (next === previous) {
    next = (next + 1 + Math.floor(Math.random() * (length - 1))) % length;
  }
  return next;
}
