import React from "react";
import { useSelector } from "react-redux";
import { fetchGuidesThunk } from '../actions'

function Guide({guide}) {
  const {name, bio, language, fee, contactNumber, email} = guide
  return(
    <div>
      <h1> {name} </h1>
      <ul>
        <li> Language: {language} </li>
        <li> Fee: {fee} </li>
        <li> Contact number: {contactNumber} </li>
        <li> Email: {email} </li>
      </ul>
      <p> {bio} </p>
    </div>
  )
}

export default Guide