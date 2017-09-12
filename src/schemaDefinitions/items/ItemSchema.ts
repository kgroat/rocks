
import { FlagSchema } from './FlagSchema'
import { ShapeSchema } from './ShapeSchema'
import { MaterialSchema } from './MaterialSchema'
import { ChildSchema } from './ChildSchema'
import { TransformationSchema } from './TransformationSchema'

export interface ItemSchema {
  readonly id: string
  readonly randomWeight?: number
  readonly typeCount?: number
  readonly flags: FlagSchema[]
  readonly shape: ShapeSchema
  readonly material: MaterialSchema
  readonly children?: ChildSchema[]
  readonly transformations: TransformationSchema[]
}