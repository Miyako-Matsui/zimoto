import { SET_guideS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_guideS:
      return payload
    default:
      return state
  }
}

export default reducer
