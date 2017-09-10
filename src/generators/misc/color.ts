
import * as convert from 'color-convert'

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
  const ch = ((Math.random() * (h[1] - h[0]) + h[0]) + HUE_MAX) % HUE_MAX
  const cs = ((Math.random() * (s[1] - s[0]) + s[0]) + SAT_MAX) % SAT_MAX
  const cv = ((Math.random() * (v[1] - v[0]) + v[0]) + VAL_MAX) % VAL_MAX
  return convert.hsv.hex([ch, cs, cv])
}