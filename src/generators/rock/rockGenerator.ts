
import * as uuid from 'uuid/v4'

import { Item } from '../../interfaces/item'
import rockShape from './rockShape'
import rockMaterialGenerator from './rockMaterialGenerator'

export function generateRock(): Item {
  return {
    id: uuid(),
    shape: rockShape,
    material: rockMaterialGenerator()
  }
}