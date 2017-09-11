
import { type as equipType, EquipAction } from '../actions/equip'

export function buildHandReducer(isLeft: boolean) {
  return (previousState: any = null, action: any) => {
    if (action.type === equipType) {
      let equip = action as EquipAction
      if (equip.left === isLeft) {
        return equip.item
      } else {
        return previousState
      }
    } else {
      return previousState
    }
  }
}
