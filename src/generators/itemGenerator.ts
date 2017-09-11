
import * as uuid from 'uuid/v4'

import { RootSchema } from '../schemas'
import { RootGeneratable } from '../interfaces/generatables'
import { Item } from '../interfaces'

import { generateMaterial } from './materialGenerator'
import { generateShape } from './shapeGenerator'

export function generateItem(schema: RootSchema, generatable: RootGeneratable): Item {
  return {
    id: uuid(),
    material: generateMaterial(schema.material, generatable.material),
    shape: generateShape(schema.shape, generatable.shape)
  }
}
