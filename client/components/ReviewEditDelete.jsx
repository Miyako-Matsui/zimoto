import React from 'react'
import { useDispatch } from 'react-redux'
import {updateReviewThunk,removeReviewThunk } from '../actions'

export default function ReviewEditDelete() {
  const dispatch = useDispatch()

  function handleEdit () {
    dispatch(updateReviewThunk())
  }

  function handleDelete () {
    dispatch(removeReviewThunk())
  }

  return (
    <>
      <br/>
      <button id='editButton' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleEdit}>EDIT</button> <br/>

      <button id='deleteButton' className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleDelete}>DELETE</button><br/>
      <br/>
    </>
  )
}
