import React, { useState } from "react";
import {addReviewThunk} from '../actions'
import { useDispatch } from "react-redux";
export default function NewReview() {
  // Get ID from url
  // const id = user.id
  const dispatch = useDispatch()
  const [state, setState] = useState({})

  function handleFormSubmit(e){
    e.preventDefault()
    const userReview = document.getElementById("newReview").value
    const userTitle = document.getElementById("newTitle").value
    const userRating = document.getElementById("newRating").value
    //Post review using ID of Guide to the DB
    setState({ 
      title: userTitle, 
      text: userReview,
      rating: +userRating, 
      guide_id: 3, //needs to be changed base on profile
    })

    dispatch(addReviewThunk(state))

  }

  return(
    <>
      <form onSubmit={handleFormSubmit}>
        <label>
          Leave a Review: <br/>
          <p htmlFor='newReview'>Title:</p>
          <textarea id='newTitle'rows="1" cols="50" name="Title" placeholder="Title"/>
          </label>
          <label>
          <p htmlFor='newReview'>Review:</p>
          <textarea id='newReview'rows="6" cols="75" name="Review" placeholder="Review"/>
          </label>
          <label>
          <p> Rating: </p>
          <div className="slidecontainer">
            <input id='newRating' type="range" min="1" max="10" defaultValue='5' className="slider"/>
          </div>
          </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}