import { combineReducers } from 'redux'

import guides from './guides'
import reviews from './reviews'
import addReview from './addReview'

export default combineReducers({
  guides,
  reviews,
  addReview
})
