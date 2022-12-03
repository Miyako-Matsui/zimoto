import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {updateReviewThunk,removeReviewThunk } from '../actions'
import { useParams } from 'react-router-dom'

export default function ReviewEditDelete(review) {
  const dispatch = useDispatch()
  const userId = useParams()
  const {id, title, text, rating} = review.review
  const [showForm, setShowForm] = useState(false)

  function showEditForm(){
    setShowForm(!showForm)
  }

  function handleEdit (e) {
    const userEditTitle = document.getElementById("editTitle").value
    const userEditReview = document.getElementById("editReview").value
    const userEditRating = document.getElementById("editRating").value

    const editedReview = {
      title: userEditTitle, 
      text: userEditReview,
      rating: +userEditRating, 
      guide_id: userId.id, 
    }
    dispatch(updateReviewThunk(id, editedReview))

  }

  function handleDelete () {
    dispatch(removeReviewThunk(id))
  }

  return (
    <>
      
      <button type='button' id='editButton' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={showEditForm}>EDIT</button> 

      {showForm && (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleEdit}>
          <label  className="form-label mb-2 text-gray-700" >
            Edit Review: 
            <h5 htmlFor='editTitle'>Title:</h5>
              <textarea id='editTitle'rows="1" cols="50" name="Title" defaultValue={title} className=' form-control
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'/>
          </label>

          <label>
            <h5 htmlFor='editReview'>Review:</h5>
            <textarea id='editReview'rows="6" cols="75" name="Review" defaultValue={text} className=' form-control
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
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'/>
          </label>

          <label>
            <h5> Rating: </h5>
            <div className="slidecontainer">
            <input id='editRating' type="range" min="1" max="5" defaultValue={rating} className="slider"/>
            </div>
          </label>

          <input type="submit" className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' value="Submit" />
        </form>
        </div>
      )}
      <form onSubmit={handleDelete}>
      <button type='submit' id='deleteButton' className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>DELETE</button>
      </form>
    </>
  )
}
