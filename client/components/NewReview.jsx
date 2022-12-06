import React from 'react'
import { addReviewThunk } from '../actions'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function NewReview() {
  const dispatch = useDispatch()
  const userId = useParams()

  function handleFormSubmit() {
    const userReview = document.getElementById('newReview').value
    const userTitle = document.getElementById('newTitle').value
    const userRating = document.getElementById('newRating').value

    const newRevObj = {
      title: userTitle,
      text: userReview,
      rating: +userRating,
      guide_id: userId.id,
    }
    dispatch(addReviewThunk(newRevObj))

    document.getElementById('newReview').value = ''
    document.getElementById('newTitle').value = ''
    document.getElementById('newRating').value = '5'
  }

  return (
    <>
      <div className="p-8 m-6 text-left rounded shadow-md bg-[#d2e6e3] leading-8">
        <form onSubmit={handleFormSubmit}>
          <label className="form-label mb-2 text-gray-700">
            <h1 className="font-semibold text-xl">Leave a Review</h1>
            <h5 htmlFor="newTitle">Title:</h5>
            <textarea
              id="newTitle"
              rows="1"
              cols="50"
              name="Title"
              placeholder="Please leave a title"
              className=" form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </label>
          <label className="form-label mb-2 text-gray-700">
            <h5 htmlFor="newReview">Review:</h5>
            <textarea
              id="newReview"
              rows="6"
              cols="75"
              name="Review"
              placeholder="Please leave a Review"
              className=" form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </label>
          <label className="form-label mb-2 text-gray-700">
            <h5> Rating: </h5>
            <div className="slidecontainer">
              <input
                id="newRating"
                type="range"
                min="1"
                max="10"
                defaultValue="5"
                className="slider"
              />
            </div>
          </label>
          <div className="text-center">
            <input
              type="submit"
              className="bg-[#d2e6e3] hover:bg-[#C3DDC0] text-[#2d3951] font-bold py-2 px-4 rounded"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </>
  )
}
