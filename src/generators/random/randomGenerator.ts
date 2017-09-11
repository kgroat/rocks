
import { generateEgg } from '../egg'
import { generateRock } from '../rock'
import { generateStick } from '../stick'

import { choose } from '../../helpers'

const generators = [
  generateEgg,
  generateRock,
  generateStick
]

export function generateRandom() {
  const generator = choose(generators)
  return generator()
}
