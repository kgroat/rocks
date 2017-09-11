
import * as convert from 'color-convert'

import { Size } from '../interfaces'
import { SizeRange } from '../schemas'
import { generateRandomNumber } from './randomNumberGenerator'

export function generateSize (range: SizeRange): Size {
  return {
    length: generateRandomNumber(range.length),
    width: generateRandomNumber(range.width),
    height: generateRandomNumber(range.height),
    scale: generateRandomNumber(range.scale)
  }
}
