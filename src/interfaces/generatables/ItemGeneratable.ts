
import { ShapeGeneratable } from './ShapeGeneratable'
import { MaterialGeneratable } from './MaterialGeneratable'

export interface ItemGeneratable {
  readonly id: string
  readonly flags: string[]
  readonly shape: ShapeGeneratable
  readonly material: MaterialGeneratable
}