
import { createStore } from 'redux'
import rootReducer from './rootReducer'
import { State } from './state'

export default createStore<State>(rootReducer)