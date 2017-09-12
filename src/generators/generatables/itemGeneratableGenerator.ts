
import * as uuid from 'uuid/v4'

import { ItemSchema } from '../../schemaDefinitions/items'
import { ItemGeneratable } from '../../interfaces/generatables'

import { generateShapeGeneratable } from './shapeGeneratableGenerator'
import { generateMaterialGeneratable } from './materialGeneratableGenerator'

export function generateItemGeneratable(schema: ItemSchema): ItemGeneratable {
  return {
    id: uuid(),
    flags: [],
    shape: generateShapeGeneratable(schema.shape),
    material: generateMaterialGeneratable(schema.material)
  }
}
