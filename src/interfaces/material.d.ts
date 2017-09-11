
import { Property } from './property'

export interface Material extends Property {
  color: string
  density: number
  hardness: number
}
