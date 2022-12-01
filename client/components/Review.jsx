import React, { useEffect } from 'react'
// import '../index.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchReviewsThunk } from '../actions'

export default function Review() {
  const dispatch = useDispatch()

  const reviews = useSelector(
    (globalState) => globalState.reviewsReducer.reviews
  )

  useEffect(() => {
    dispatch(fetchReviewsThunk())
  }, [])

  return (
    <>
      <div>
        {reviews &&
          reviews.map((review) => {
            return (
              <>
                <div>
                  <p>{review.rating}</p>
                  <p>{review.title}</p>
                  <p>{review.text}</p>
                </div>
              </>
            )
          })}
      </div>
    </>
  )
}
