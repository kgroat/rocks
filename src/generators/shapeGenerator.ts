
import { ShapeSchema } from '../schemaDefinitions/items'
import { ShapeGeneratable } from '../interfaces/generatables'
import { Shape } from '../interfaces'

import { generateSize } from './sizeGenerator'

export function generateShape(schema: ShapeSchema, generatable: ShapeGeneratable): Shape {
  return {
    id: schema.name,
    type: 'shape',
    name: schema.name,
    article: schema.article,
    size: generateSize(generatable.size),
  }
}
