import { combineReducers } from 'redux'

import guides from './guides'
import reviewsReducer from './reviews'

export default combineReducers({
  guides,
  reviewsReducer,
})
