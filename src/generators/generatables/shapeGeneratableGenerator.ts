
import * as uuid from 'uuid/v4'

import { ShapeSchema, SizeRange, RangeSchema } from '../../schemaDefinitions/items'
import { ShapeGeneratable } from '../../interfaces/generatables'

import { generateGroupRange } from '../groupRangeGenerator'
import { unfurlRange } from '../rangeGenerator'

const DEFAULT_SIZE_RANGE: SizeRange = {
  length: [0, 0],
  width: [0, 0],
  height: [0, 0],
  scale: [0, 0]
}

export function generateShapeGeneratable(schema: ShapeSchema, allowEmpty = false): ShapeGeneratable {
  let size = unfurlRange(schema.size, generateGroupRange, allowEmpty ? DEFAULT_SIZE_RANGE : null)

  return {
    size
  }
}
