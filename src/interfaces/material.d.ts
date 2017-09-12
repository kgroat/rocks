
import { Property } from './property'

export interface Material extends Property {
  readonly color: string
  readonly density: number
  readonly hardness: number
}
