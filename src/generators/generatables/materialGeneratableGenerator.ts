
import * as uuid from 'uuid/v4'

import { MaterialSchema, ColorRange, RangeSchema, NumberRange } from '../../schemas'
import { MaterialGeneratable } from '../../interfaces/generatables'

import { generateGroupRange } from '../groupRangeGenerator'
import { generateRange } from '../rangeGenerator'

export function generateMaterialGeneratable(schema: MaterialSchema): MaterialGeneratable {
  let color: ColorRange
  let density: NumberRange
  let hardness: NumberRange

  if (schema.color['range'] instanceof Array) {
    color = generateGroupRange(schema.color as RangeSchema<ColorRange>)
  } else {
    color = schema.color as ColorRange
  }

  if (schema.density instanceof Array) {
    density = schema.density
  } else {
    density = generateRange(schema.density.range, schema.density.varianceRange)
  }
  
    if (schema.hardness instanceof Array) {
      hardness = schema.hardness
    } else {
      hardness = generateRange(schema.hardness.range, schema.hardness.varianceRange)
    }

  return {
    id: uuid(),
    color,
    density,
    hardness
  }
}
