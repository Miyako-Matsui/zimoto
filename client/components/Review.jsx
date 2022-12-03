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
          <h1> Reviews: </h1>
          {reviews.length > 0 && reviews.map((review) => {
            return (
              <div key={review.id}>
                <p>Rating:{review.rating}</p>
                <p>Title:{review.title}</p>
                <p>Text:{review.text}</p>
                <ReviewEditDelete review={review} />
              </div>
        )
      })}
      </div>
    </>
    
  )
}

export default Review
