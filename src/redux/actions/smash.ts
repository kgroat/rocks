
import { Action } from 'redux'

import { Item } from '../../interfaces/item'

export const type = 'SMASH'

export interface Smash {
  left: Item
  right: Item
}

export type SmashAction = Smash & Action

export default function (options: Smash): SmashAction {
  return {
    type,
    ...options
  }
}
