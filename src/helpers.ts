
export function choose<T>(list: T[]): T {
  const idx = Math.floor(Math.random() * list.length)
  return list[idx]
}

export function rangeRandom(min: number, max: number): number {
  return (Math.random() * (max - min)) + min
}

export function rangeRandomWithModulus(min: number, max: number, modulus: number): number {
  return ((rangeRandom(min, max) % modulus) + modulus) % modulus
}