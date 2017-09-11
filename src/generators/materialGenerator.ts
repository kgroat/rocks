


import { MaterialSchema } from '../schemas'
import { MaterialGeneratable } from '../interfaces/generatables'
import { Material } from '../interfaces'

import { generateColor } from './colorGenerator'
import { generateRandomNumber } from './randomNumberGenerator'

export function generateMaterial(schema: MaterialSchema, generatable: MaterialGeneratable): Material {
  return {
    id: generatable.id,
    type: 'material',
    color: generateColor(generatable.color),
    density: generateRandomNumber(generatable.density),
    hardness: generateRandomNumber(generatable.hardness)
  }
}
