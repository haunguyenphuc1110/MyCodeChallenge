export const format = (n: string = '') => {
  return n?.replace(/./g, (c: string, i: number, a: string) => (i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? `,${c}` : c)) || 0
}