import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ReviewEditDelete from './ReviewEditDelete'

function Review({guideId}) {
  return (
    <>
      <div>
        <h1> Reviews </h1>
      </div>
      <ReviewEditDelete/>
    </>
  )
}

export default Review
