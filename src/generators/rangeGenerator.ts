
import * as convert from 'color-convert'

import { NumberRange, RangeSchema } from '../schemaDefinitions/items'
import { generateRandomNumber } from './randomNumberGenerator'

export function generateRange (range: NumberRange, varianceRange: NumberRange): NumberRange {
  const maxRange = range[1] - range[0]
  const variance = generateRandomNumber([varianceRange[0], Math.min(maxRange, varianceRange[1])])
  const variableRange: NumberRange = [range[0], range[1]-variance]
  const min = generateRandomNumber(variableRange)
  return [min, min + variance]
}

export function generateRangeFromSchema (schema: RangeSchema<NumberRange>): NumberRange {
  return generateRange(schema.range, schema.varianceRange)
}

export function unfurlRange<T> (range: RangeSchema<T>|T, transformation: (s: RangeSchema<T>) => T, defaultRange?: T): T {
  if (!range) {
    if (defaultRange) {
      return defaultRange
    } else {
      throw new Error('Schema value not defined!')
    }
  } else if (range['range'] && range['varianceRange']) {
    return transformation(range as RangeSchema<T>)
  } else {
    return range as T
  }
}