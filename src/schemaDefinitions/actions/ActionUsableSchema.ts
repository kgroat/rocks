
import { Condition } from '../Condition'

export interface ActionUsableItemSchema {
  name: string
  condition?: Condition
  whitelistFlags?: string[]
  blacklistFlags?: string[]
}

export interface ActionUsableSchema {
  items: ActionUsableItemSchema[]
  condition?: Condition
}
