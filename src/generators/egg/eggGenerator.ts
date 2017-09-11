
import * as uuid from 'uuid/v4'

import { Item } from '../../interfaces/item'
import eggShape from './eggShape'
import eggMaterialGenerator from './eggMaterialGenerator'

export function generateEgg(): Item {
  return {
    id: uuid(),
    shape: eggShape,
    material: eggMaterialGenerator()
  }
}
