
import * as uuid from 'uuid/v4'

import { ItemSchema } from '../schemaDefinitions/items'
import { ItemGeneratable } from '../interfaces/generatables'
import { Item } from '../interfaces'

import { generateMaterial } from './materialGenerator'
import { generateShape } from './shapeGenerator'

import { generateMap } from '../services/actionItemMapper'

export function generateItem(schema: ItemSchema, generatable: ItemGeneratable): Item {
  let item: Item = {
    id: uuid(),
    flags: [],
    material: generateMaterial(schema.material, generatable.material),
    shape: generateShape(schema.shape, generatable.shape),
    type: generatable,
    actions: null
  }

  return {
    ...item,
    actions: generateMap(item)
  }
}
