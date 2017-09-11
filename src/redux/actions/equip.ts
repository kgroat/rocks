
import { Action } from 'redux'

import { Item } from '../../interfaces/item'

export const type = 'EQUIP'

export interface Equip {
  item: Item
  left: boolean
}

export type EquipAction = Equip & Action

export default function (options: Equip): EquipAction {
  return {
    type,
    ...options
  }
}
