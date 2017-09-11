
import * as uuid from 'uuid/v4'

import { RocksSchema } from '../../schemas/rocks'
import { generateColor } from '../misc/color'
import { Material } from '../../interfaces/material'
import { choose, rangeRandom } from '../../helpers'

const rockDetails = require('../../details/rocks.json') as RocksSchema

export default function (): Material {
  const colorModel = choose(rockDetails.color)
  return {
    id: uuid(),
    type: 'material',
    color: generateColor(colorModel),
    hardness: rangeRandom(3, 5)
  }
}