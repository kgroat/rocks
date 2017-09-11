
import { combineReducers } from 'redux'
import { buildHandReducer } from './reducers/handReducer'
import visibleReducer from './reducers/visibleReducer'
import { State } from './state'

export default combineReducers<State>({
  visible: visibleReducer,
  leftHand: buildHandReducer(true),
  rightHand: buildHandReducer(false)
})
