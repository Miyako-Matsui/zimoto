import { SET_REVIEWS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_REVIEWS:
      return payload
    default:
      return state
  }
}

export default reducer
