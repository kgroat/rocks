
import * as uuid from 'uuid/v4'

import { MaterialSchema } from '../../schemas'
import { MaterialGeneratable } from '../../interfaces/generatables'

import { generateGroupRange } from '../groupRangeGenerator'
import { generateRange } from '../rangeGenerator'

export function generateMaterialGeneratable(schema: MaterialSchema): MaterialGeneratable {
  return {
    id: uuid(),
    color: generateGroupRange(schema.color),
    density: generateRange(schema.density.range, schema.density.varianceRange),
    hardness: generateRange(schema.hardness.range, schema.hardness.varianceRange)
  }
}
