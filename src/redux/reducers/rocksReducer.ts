
import { type as addRockType, AddRockAction } from '../actions/addRock'
import { Rock } from '../../interfaces/rock'

export default function (previousState: Rock[] = [], action: any) {
  if (action.type === addRockType) {
    let addRock = action as AddRockAction
    return [
      ...previousState,
      addRock.rock
    ]
  } else {
    return previousState
  }
}
