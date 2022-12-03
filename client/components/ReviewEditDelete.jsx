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
    console.log(editedReview)
    dispatch(updateReviewThunk(id, editedReview))

  }

  function handleDelete () {
    //TODO - Ask facilitator about reload turning reviews into a number from an array on reload of page after deleting a review
    const x = 'xxxx'
    dispatch(removeReviewThunk(id))
    console.log(x)
  }

  return (
    <>
      <br/>
      <button type='button' id='editButton' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={showEditForm}>EDIT</button> <br/>

      {showForm && (
        <form onSubmit={handleEdit}>
          <label>
            Leave a Review: <br/>
            <p htmlFor='editTitle'>Title:</p>
              <textarea id='editTitle'rows="1" cols="50" name="Title" defaultValue={title}/>
          </label>

          <label>
            <p htmlFor='editReview'>Review:</p>
            <textarea id='editReview'rows="6" cols="75" name="Review" defaultValue={text}/>
          </label>

          <label>
            <p> Rating: </p>
            <div className="slidecontainer">
            <input id='editRating' type="range" min="1" max="10" defaultValue={rating} className="slider"/>
            </div>
          </label>

          <input type="submit" className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' value="Submit" />
        </form>
      )}

      <button type='button' id='deleteButton' className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleDelete}>DELETE</button><br/>
      <br/>
    </>
  )
}
