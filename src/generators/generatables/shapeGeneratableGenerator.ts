
import * as uuid from 'uuid/v4'

import { ShapeSchema } from '../../schemas'
import { ShapeGeneratable } from '../../interfaces/generatables'

import { generateGroupRange } from '../groupRangeGenerator'

export function generateShapeGeneratable(schema: ShapeSchema): ShapeGeneratable {
  return {
    size: generateGroupRange(schema.size)
  }
}
