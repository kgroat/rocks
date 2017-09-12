
import { Condition } from '../Condition'

export interface ActionTransformationSchema {
  transformation: string
  target: string
  condition: Condition
  subtransformations: ActionTransformationSchema[]
}
