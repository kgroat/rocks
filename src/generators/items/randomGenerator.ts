
import { Item } from '../../interfaces'

import { getGenerators } from './schemaBuilder'

import { weightedChoose } from '../../helpers'


export function generateRandom(): Item {
  const generator = weightedChoose(getGenerators.withWeight())
  return generator()
}
