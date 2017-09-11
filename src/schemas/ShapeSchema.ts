
import { RangeSchema, NumberRange } from './RangeSchema'

export interface SizeRange {
  length: NumberRange
  width: NumberRange
  height: NumberRange
  scale: NumberRange
  [key: string]: NumberRange
}

export interface ShapeSchema {
  name: string
  article: 'a'|'an'
  size: RangeSchema<SizeRange> | SizeRange
}
