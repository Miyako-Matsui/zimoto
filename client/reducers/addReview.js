import { ADD_REVIEWS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_REVIEWS:
      return payload
    default:
      return state
  }
}

export default reducer