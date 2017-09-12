
import { RangeSchema } from '../RangeSchema'

import { MathRange } from './ChildRangeSchema'

export interface ChildSizeRange {
  readonly length: MathRange
  readonly width: MathRange
  readonly height: MathRange
  readonly scale: MathRange
  readonly [key: string]: MathRange
}

export interface ChildShapeSchema {
  readonly size: RangeSchema<ChildSizeRange> | ChildSizeRange
}
