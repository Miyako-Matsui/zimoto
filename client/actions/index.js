import {insertReviewAPI, deleteReviewAPI, updateReviewAPI} from '../apis/reviews'

//guides
import { fetchGuides } from '../apis/guides'

export const SET_GUIDES = 'SET_GUIDES'

//reviews
export const SET_REVIEWS = 'SET_REVIEWS'
export const ADD_REVIEWS = 'ADD_REVIEWS'
export const EDIT_REVIEWS = 'EDIT_REVIEWS'
export const REMOVE_REVIEWS = 'REMOVE_REVIEWS'

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

export function addReview(reviews) {
  return {
    type: ADD_REVIEWS,
    payload: reviews,
  }
}

export function updateReview(reviews) {
  return {
    type: EDIT_REVIEWS,
    payload: reviews,
  }
}

export function removeReview(reviewId) {
  return {
    type: REMOVE_REVIEWS,
    payload: reviewId,
  }
}

export function addReviewThunk(reviews) {
  return async (dispatch) => {
    try {
      const id = await insertReviewAPI(reviews)
      reviews.id = id
      dispatch(addReview(reviews))
    } catch (err) {
      console.log(err.message)
    }
  }
}

export function updateReviewThunk(reviewId, review) {
  return async (dispatch) => {
    try {
      await updateReviewAPI(reviewId, review)
      dispatch(updateReview(review))
    } catch (err) {
      console.log(err.message)
    }
  }
}

export function removeReviewThunk(reviewId) {
  return async (dispatch) => {
    try {
      await deleteReviewAPI(reviewId)
      dispatch(removeReview(reviewId))
    } catch (err) {
      console.log(err.message)
    }
  }
}