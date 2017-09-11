
import * as uuid from 'uuid/v4'

import { RootSchema } from '../../schemas'
import { RootGeneratable } from '../../interfaces/generatables'

import { generateShapeGeneratable } from './shapeGeneratableGenerator'
import { generateMaterialGeneratable } from './materialGeneratableGenerator'

export function generateRootGeneratable(schema: RootSchema): RootGeneratable {
  return {
    id: uuid(),
    flags: [],
    shape: generateShapeGeneratable(schema.shape),
    material: generateMaterialGeneratable(schema.material)
  }
}
