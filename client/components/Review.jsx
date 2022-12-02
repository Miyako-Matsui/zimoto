import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Review({guideId}) {
  const reviews = useSelector(state => state.reviews)
  return (
      <div>
        {reviews.map(review => 
          <div>
            <h1> {review.title} </h1>
            <p> {review.text} </p>
          </div>
          )}
      </div>
  )
}

export default Review
