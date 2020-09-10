import { combineReducers } from 'redux'

// REDUCERS

import filterReducer from './filters'
import pizzasReducer from './pizzas'

// END REDUCERS


const rootReducer = combineReducers({
  filters: filterReducer,
  pizzas: pizzasReducer
})

export default rootReducer