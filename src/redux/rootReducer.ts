
import { combineReducers } from 'redux'
import { buildHandReducer } from './reducers/handReducer'
import visibleReducer from './reducers/visibleReducer'
import actionResponseReducer from './reducers/actionResponseReducer'
import { State } from './state'

export default combineReducers<State>({
  actionResponse: actionResponseReducer,
  visible: visibleReducer,
  leftHand: buildHandReducer(true),
  rightHand: buildHandReducer(false)
})
