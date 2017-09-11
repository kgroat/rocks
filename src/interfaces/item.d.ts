
import { Material } from './material'
import { Shape } from './shape'

export interface Item {
  id: string
  material: Material
  shape: Shape
}