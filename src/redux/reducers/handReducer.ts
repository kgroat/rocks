
import { type as equipType, EquipAction } from '../actions/equip'
import { type as smashType, SmashAction } from '../actions/smash'

export function buildHandReducer(isLeft: boolean) {
  return (previousState: any = null, action: any) => {
    if (action.type === equipType) {
      let equip = action as EquipAction
      if (equip.left === isLeft) {
        return equip.item
      } else {
        return previousState
      }
    } else if (action.type === smashType) {
      let { left, right } = action as SmashAction
      if (isLeft && right.material.hardness >= left.material.hardness) {
        return null
      } else if (!isLeft && left.material.hardness >= right.material.hardness) {
        return null
      } else {
        return previousState
      }
    } else {
      return previousState
    }
  }
}
