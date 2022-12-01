import React from 'react'
// import '../index.css'
import { useSelector } from 'react-redux'

export default function Review() {
  const reviewsArr = useSelector((globalState) => globalState.reviews)
  console.log(reviewsArr)

  return (
    <>
      <div>
        {reviewsArr.map((review) => {
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
