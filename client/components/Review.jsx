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
      <div className="p-2">
        <h1> Reviews: </h1>
        {reviews.length > 0 &&
          reviews.map((review) => {
            return (
              <div key={review.id}>
                <div className="flex">
                  <p>
                    <img
                      src="../images/squareLogo.png"
                      alt="zimotologo"
                      className="rounded-full h-10"
                    />
                  </p>
                  <p className="pt-2">Rating:{review.rating}</p>
                </div>
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
