
import { Action } from 'redux'
import { Item } from '../../interfaces/item'

export const type = 'SET_VISIBLE'

export interface SetVisible {
  item: Item
}

export type SetVisibleAction = SetVisible & Action

export default function (options: SetVisible): SetVisibleAction {
  return {
    type,
    ...options
  }
}
