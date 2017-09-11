
import * as convert from 'color-convert'

import { NumberRange, RangeSchema } from '../schemas'
import { generateRange } from './rangeGenerator'

export function generateGroupRange <T extends { [key: string]: NumberRange }>({ range, varianceRange }: RangeSchema<T>): T {
  const output: T = {} as T

  for (var key in range) {
    if (range.hasOwnProperty(key)) {
      output[key] = generateRange(range[key], varianceRange[key])
    }
  }

  return output
}
