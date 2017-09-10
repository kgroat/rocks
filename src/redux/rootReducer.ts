
import { combineReducers } from 'redux'
import rocksReducer from './reducers/rocksReducer'
import { State } from './state'

export default combineReducers<State>({
  rocks: rocksReducer
})
