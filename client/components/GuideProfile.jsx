import React, { useEffect } from 'react'
import { fetchAGuide } from '../apis/individualGuide'
import '../index.css'

function GuideProfile() {
  useEffect(() => {
    fetchAGuide(3)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <>
      <div>
        {}
        {/* <h1>This is a profile!</h1>
        <h2>{name}</h2>
        <h2>Country</h2>
        <p>{country}</p>
        <h2>City</h2>
        <p>{city}</p>
        <h2>Bio</h2>
        <p>{bio}</p>
        <h2>Spoken languages</h2>
        <p>{language}</p>
        <h2>Fee</h2>
        <p>{fee}</p>
        <h2>Contact Number</h2>
        <p>{contact_number}</p>
        <h2>Email</h2>
        <p>{email}</p> */}
      </div>
    </>
  )
}

export default GuideProfile
