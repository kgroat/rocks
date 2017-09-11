
import * as convert from 'color-convert'

import { ColorRange } from '../schemas'
import { generateRandomNumberWithModulus } from './randomNumberGenerator'

const HUE_MAX = 360
const SAT_MAX = 100
const VAL_MAX = 100

export function generateColor (range: ColorRange) {
  const h = generateRandomNumberWithModulus(range.h, HUE_MAX)
  const s = generateRandomNumberWithModulus(range.s, SAT_MAX)
  const v = generateRandomNumberWithModulus(range.v, VAL_MAX)
  return convert.hsv.hex([h, s, v])
}
