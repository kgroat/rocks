
import { RangeSchema, NumberRange } from './RangeSchema'

export interface ColorRange {
  h: NumberRange
  s: NumberRange
  v: NumberRange
  [key: string]: NumberRange
}

export interface MaterialSchema {
  color: RangeSchema<ColorRange>
  density: RangeSchema<NumberRange>
  hardness: RangeSchema<NumberRange>
}
