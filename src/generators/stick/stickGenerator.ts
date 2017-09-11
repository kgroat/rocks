
import * as uuid from 'uuid/v4'

import { Item } from '../../interfaces/item'
import stickShape from './stickShape'
import stickMaterialGenerator from './stickMaterialGenerator'

export function generateStick(): Item {
  return {
    id: uuid(),
    shape: stickShape,
    material: stickMaterialGenerator()
  }
}