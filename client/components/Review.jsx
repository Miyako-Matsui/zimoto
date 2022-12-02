import { useSelector } from 'react-redux'
import ReviewEditDelete from './ReviewEditDelete'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchReviewsThunk } from '../actions'

function Review({ guideId }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchReviewsThunk(guideId))
  }, [])

  const reviews = useSelector((globalState) => globalState.reviews)

  return (
    <>
      <div>
        <h1> Reviews </h1>
      </div>
          <div>
          <h1> Reviews: </h1>
          {reviews.map((review) => {
            return (
              <div key={review.key}>
                <p>Rating:{review.rating}</p>
                <p>Title:{review.title}</p>
                <p>Text:{review.text}</p>
                <ReviewEditDelete/>
              </div>
        )
      })}
      </div>
    </>
    
  )
}

export default Review
