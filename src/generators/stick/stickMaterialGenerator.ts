
import * as uuid from 'uuid/v4'

import { StickSchema } from '../../schemas/stick'
import { generateColor } from '../misc/color'
import { Material } from '../../interfaces/material'
import { choose, rangeRandom } from '../../helpers'

const rockDetails = require('../../details/sticks.json') as StickSchema

export default function (): Material {
  const colorModel = choose(rockDetails.color)
  return {
    id: uuid(),
    type: 'material',
    color: generateColor(colorModel),
    hardness: rangeRandom(1, 3)
  }
}