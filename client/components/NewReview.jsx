import React from "react";
import { addReviewThunk } from '../actions'
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom'

export default function NewReview() {
  const dispatch = useDispatch()
  const userId = useParams()
  
  

  function handleFormSubmit(e){
    const userReview = document.getElementById("newReview").value
    const userTitle = document.getElementById("newTitle").value
    const userRating = document.getElementById("newRating").value
    
    const newRevObj = { 
      title: userTitle, 
      text: userReview,
      rating: +userRating, 
      guide_id: userId.id, 
    }
    dispatch(addReviewThunk(newRevObj))

    document.getElementById("newReview").value = ""
    document.getElementById("newTitle").value = ""
    document.getElementById("newRating").value = '5'
    


  }

  return(
    <>
      <form onSubmit={handleFormSubmit}>
        <label>
          Leave a Review: <br/>
          <p htmlFor='newTitle'>Title:</p>
          <textarea id='newTitle'rows="1" cols="50" name="Title" placeholder="Please leave a title"/>
          </label>
          <label>
          <p htmlFor='newReview'>Review:</p>
          <textarea id='newReview'rows="6" cols="75" name="Review" placeholder="Please leave a Review"/>
          </label>
          <label>
          <p> Rating: </p>
          <div className="slidecontainer">
            <input id='newRating' type="range" min="1" max="10" defaultValue='5' className="slider"/>
          </div>
          </label>
        <input type="submit" className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' value="Submit" />
      </form>
    </>
  )
}