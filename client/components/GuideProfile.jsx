import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAGuide } from '../apis/individualGuide'
import '../index.css'

function GuideProfile() {
  
  const [ guide, setGuide ] = useState([])

  const { id } = useParams()

  useEffect(() => {
    fetchAGuide(id)
      .then((res) => {
        setGuide(res)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  console.log(guide)


  return (
    <>
      <div>
        {/* <h2>{guide.name}</h2>
        <h2>Country</h2>
        <p>{guid}</p>
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
