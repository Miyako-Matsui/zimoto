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

//Reviews
import { getReviewsApi } from '../apis/reviewsApi'
export const SET_REVIEWS = 'SET_REVIEWS'

export function setReviewsAction(reviews) {
  return {
    type: SET_REVIEWS,
    payload: reviews,
  }
}

export function fetchReviewsThunk() {
  return (dispatch) => {
    return getReviewsApi().then((exercises) => {
      dispatch(setReviewsAction(exercises))
    })
  }
}
