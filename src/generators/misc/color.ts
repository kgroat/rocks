
import * as convert from 'color-convert'

import { rangeRandomWithModulus } from '../../helpers'

export interface ColorDefinition {
  name: string
  h: number[],
  s: number[],
  v: number[]
}

const HUE_MAX = 360
const SAT_MAX = 100
const VAL_MAX = 100

export function generateColor ({ h, s, v }: ColorDefinition) {
  const ch = rangeRandomWithModulus(h[0], h[1], HUE_MAX)
  const cs = rangeRandomWithModulus(s[0], s[1], SAT_MAX)
  const cv = rangeRandomWithModulus(v[0], v[1], VAL_MAX)
  return convert.hsv.hex([ch, cs, cv])
}