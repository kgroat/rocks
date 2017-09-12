
import { ActionUsableSchema } from './ActionUsableSchema'
import { ActionTransformationSchema } from './ActionTransformationSchema'

export interface ActionSchema {
  id: string
  button: string
  usable: ActionUsableSchema
  tranformations: ActionTransformationSchema[]
}
