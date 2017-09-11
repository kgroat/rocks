
import { type as equipType, EquipAction } from '../actions/equip'
import { type as smashType, SmashAction } from '../actions/smash'
import { Item } from '../../interfaces/item'

export default (previousState: string = null, action: any) => {
  if (action.type === equipType) {
    let { item } = action as EquipAction
    return `You pick up the ${item.shape.name}`
  } else if (action.type === smashType) {
    let { left, right } = action as SmashAction
    if (left.material.hardness < right.material.hardness) {
      return `The ${left.shape.name} in your left hand breaks apart!`
    } else if (right.material.hardness < left.material.hardness) {
      return `The ${right.shape.name} in your right hand breaks apart!`
    } else {
      return `Both of the objects break apart!`
    }
  } else {
    return null
  }
}
