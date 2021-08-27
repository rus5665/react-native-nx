import { createStore, combineReducers } from 'redux'
import reducer from './reducer'

const rootReducer = combineReducers(
  { count: reducer }
)

const configureStore = () => {
  return createStore(rootReducer)
}

export default configureStore
