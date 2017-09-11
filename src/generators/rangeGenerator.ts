
import * as convert from 'color-convert'

import { NumberRange } from '../schemas'
import { generateRandomNumber } from './randomNumberGenerator'

export function generateRange (range: NumberRange, varianceRange: NumberRange): NumberRange {
  const maxRange = range[1] - range[0]
  const variance = generateRandomNumber([varianceRange[0], Math.min(maxRange, varianceRange[1])])
  const variableRange: NumberRange = [range[0], range[1]-variance]
  const min = generateRandomNumber(variableRange)
  return [min, min + variance]
}
