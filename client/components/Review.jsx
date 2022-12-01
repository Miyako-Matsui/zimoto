import React from 'react'
// import '../index.css'
import { useSelector } from 'react-redux'

export default function Review() {
  const reviews = useSelector((globalState) => globalState.reviews)
  console.log(reviews)

  return (
    <>
      <div>
        {reviews.map((review) => {
          return (
            <div key={review.id}>
              <p>{review.rating}</p>
              <p>{review.title}</p>
              <p>{review.text}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
