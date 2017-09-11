
import * as uuid from 'uuid/v4'

import { EggsSchema } from '../../schemas/eggs'
import { generateColor } from '../misc/color'
import { Material } from '../../interfaces/material'
import { choose, rangeRandom } from '../../helpers'

const eggDetails = require('../../details/eggs.json') as EggsSchema

export default function (): Material {
  const colorModel = choose(eggDetails.color)
  return {
    id: uuid(),
    type: 'material',
    color: generateColor(colorModel),
    hardness: rangeRandom(0.1, 0.2)
  }
}
