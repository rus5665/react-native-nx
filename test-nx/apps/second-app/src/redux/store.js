import { createStore, combineReducers } from 'redux'
import reducer from './reducer'

const rootReducer = combineReducers(
  { count: reducer }
)

const configureStore = () => {
  return createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

export default configureStore
