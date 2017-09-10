
import { RocksSchema } from '../schemas/rocks'
import { generateColor } from './misc/color'
import { Rock } from '../interfaces/rock'
import { choose } from '../helpers'

const rockDetails = require('../details/rocks.json') as RocksSchema

export function generateRock(): Rock {
  const colorModel = choose(rockDetails.color)
  return {
    color: generateColor(colorModel)
  }
}