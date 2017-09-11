
import * as uuid from 'uuid/v4'

import { ShapeSchema, SizeRange, RangeSchema } from '../../schemas'
import { ShapeGeneratable } from '../../interfaces/generatables'

import { generateGroupRange } from '../groupRangeGenerator'

export function generateShapeGeneratable(schema: ShapeSchema): ShapeGeneratable {
  let size: SizeRange

  if (schema.size['range'] instanceof Array) {
    size = generateGroupRange(schema.size as RangeSchema<SizeRange>)
  } else {
    size = schema.size as SizeRange
  }

  return {
    size
  }
}
