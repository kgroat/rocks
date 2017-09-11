
import { ShapeGeneratable } from './ShapeGeneratable'
import { MaterialGeneratable } from './MaterialGeneratable'

export interface RootGeneratable {
  id: string
  flags: string[]
  shape: ShapeGeneratable
  material: MaterialGeneratable
}