
export interface WeightedItem<T> {
  weight: number
  item: T
}

export function weightedChoose<T>(weights: WeightedItem<T>[]): T {
  const maxWeight = weights.reduce((weight, item) => weight + item.weight, 0)
  let remainingWeight = rangeRandom(0, maxWeight)
  return weights.find(item => {
    remainingWeight -= item.weight
    return remainingWeight <= 0
  }).item
}

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