import { getGuides } from '../apis/guides'

export const SET_guideS = 'SET_guideS'

export function setGuides(guides) {
  return {
    type: SET_guideS,
    payload: guides,
  }
}

export function fetchguides() {
  return (dispatch) => {
    return getguides().then((guides) => {
      dispatch(setguides(guides))
    })
  }
}
