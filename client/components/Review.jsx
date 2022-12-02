// import React, { useEffect } from 'react'
// // import '../index.css'
// import { useSelector, useDispatch } from 'react-redux'
// import { fetchReviewsThunk } from '../actions'

// export default function Review() {
//   const dispatch = useDispatch()

//   const reviews = useSelector(
//     (globalState) => globalState.reviewsReducer.reviews
//   )

//   useEffect(() => {
//     dispatch(fetchReviewsThunk())
//   }, [])

//   return (
//     <>
//       <div>
//         {reviews &&
//           reviews.map((review) => {
//             return (
//               <>
//                 <div>
//                   <p>{review.rating}</p>
//                   <p>{review.title}</p>
//                   <p>{review.text}</p>
//                 </div>
//               </>
//             )
//           })}
//       </div>
//     </>
//   )
// }

import React from 'react'
import { Link } from 'react-router-dom'
// import '../index.css'

function Review({ review }) {
  const { rating, title, text, guide_id } = review
  return (
    <Link to={'/reviews/reviews' + guide_id}>
      <div>
        <h1> {rating} </h1>
        <h1> {title} </h1>
        <h1> {text} </h1>
      </div>
    </Link>
  )
}

export default Review
