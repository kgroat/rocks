
import { type as setVisibleType, SetVisibleAction } from '../actions/setVisible'
import { type as equipType } from '../actions/equip'
import { Item } from '../../interfaces/item'

export function buildHandReducer(isLeft: boolean) {
  return 
}

export default (previousState: Item = null, action: any) => {
  if (action.type === setVisibleType) {
    let setVisible = action as SetVisibleAction
    return setVisible.item
  } else if (action.type === equipType) {
    return null
  }else {
    return previousState
  }
}
