import { fetchGuides } from '../apis/guides'

export const SET_GUIDES = 'SET_GUIDES'

export function setGuides(guides) {
  return {
    type: SET_GUIDES,
    payload: guides,
  }
}

export function fetchGuidesThunk() {
  return (dispatch) => {
    return fetchGuides().then((guides) => {
      dispatch(setGuides(guides))
    })
  }
}

//Reviews
import { getReviewsApi } from '../apis/reviews'
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
