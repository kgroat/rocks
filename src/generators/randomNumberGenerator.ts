
import { rangeRandom, rangeRandomWithModulus } from '../helpers'
import { NumberRange } from '../schemaDefinitions/items'

export function generateRandomNumber (range: NumberRange) {
  return rangeRandom(range[0], range[1])
}
export function generateRandomNumberWithModulus (range: NumberRange, modulus: number) {
  return rangeRandomWithModulus(range[0], range[1], modulus)
}
