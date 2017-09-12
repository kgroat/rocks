
import * as uuid from 'uuid/v4'

import { MaterialSchema, ColorRange, RangeSchema, NumberRange } from '../../schemaDefinitions/items'
import { MaterialGeneratable } from '../../interfaces/generatables'

import { generateGroupRange } from '../groupRangeGenerator'
import { generateRangeFromSchema, unfurlRange } from '../rangeGenerator'

const DEFAULT_COLOR_RANGE: ColorRange = {
  h: [0, 360],
  s: [0, 100],
  v: [0, 100]
}

const DEFAULT_NUMBER_RANGE: NumberRange = [0, 0]

export function generateMaterialGeneratable(schema: MaterialSchema, allowEmpty = false): MaterialGeneratable {
  let color = unfurlRange(schema.color, generateGroupRange, allowEmpty ? DEFAULT_COLOR_RANGE : null)
  let density = unfurlRange(schema.density, generateRangeFromSchema, allowEmpty ? DEFAULT_NUMBER_RANGE : null)
  let hardness = unfurlRange(schema.hardness, generateRangeFromSchema, allowEmpty ? DEFAULT_NUMBER_RANGE : null)

  return {
    id: uuid(),
    color,
    density,
    hardness
  }
}
