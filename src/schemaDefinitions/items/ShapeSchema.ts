
import { RangeSchema, NumberRange } from './RangeSchema'

export interface SizeRange {
  readonly length: NumberRange
  readonly width: NumberRange
  readonly height: NumberRange
  readonly scale: NumberRange
  readonly [key: string]: NumberRange
}

export interface ShapeSchema {
  readonly name: string
  readonly article: 'a'|'an'
  readonly size: RangeSchema<SizeRange> | SizeRange
}
