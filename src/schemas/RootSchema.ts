
import { FlagSchema } from './FlagSchema'
import { ShapeSchema } from './ShapeSchema'
import { MaterialSchema } from './MaterialSchema'
import { ChildSchema } from './ChildSchema'
import { TransformationSchema } from './TransformationSchema'

export interface RootSchema {
  id: string
  randomWeight: number
  typeCount: number
  flags: FlagSchema[]
  shape: ShapeSchema
  material: MaterialSchema
  children: ChildSchema[]
  transformations: TransformationSchema[]
}