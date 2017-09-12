
import { RangeSchema, NumberRange } from './RangeSchema'

export interface ColorRange {
  readonly h: NumberRange
  readonly s: NumberRange
  readonly v: NumberRange
  readonly [key: string]: NumberRange
}

export interface MaterialSchema {
  readonly color: RangeSchema<ColorRange> | ColorRange
  readonly density: RangeSchema<NumberRange> | NumberRange
  readonly hardness: RangeSchema<NumberRange> | NumberRange
}
