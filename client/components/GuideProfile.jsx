import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAGuide } from '../apis/individualGuide'
import '../index.css'
import NewReview from './NewReview'
import Review from './Review'

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

  return (
    <>
      <div className="font-[Lora] bg-[#C2DEDC] p-8 text-xl ">
        <div className="p-2">
          <h2>Name:</h2>
          <p>{guide?.name}</p>
          <h2>Country:</h2>
          <p>{guide?.country}</p>
          <h2>City:</h2>
          <p>{guide?.city}</p>
        </div>

        <div className="p-2">
          <h2>Bio:{guide?.bio}</h2>
          <h2>Spoken languages:</h2>
          <ul>
            <li>{guide?.language}</li>
          </ul>
          <h2>Fee: {guide?.fee}</h2>
          <h2>Contact Number: {guide?.contactNumber}</h2>
          <h2>Email: {guide?.email}</h2>
        </div>
        <Review guideId={id} />
        <NewReview />
      </div>
    </>
  )
}

export default GuideProfile
