
import { ChildShapeSchema } from './child'

export interface ChildSchema {
  readonly id: string
  readonly schema: string
  readonly count: number
  readonly visible: boolean
  readonly shape: ChildShapeSchema
}
