import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAGuide } from '../apis/individualGuide'
import '../index.css'
import ProfileDelete from './ProfileDelete'
import NewReview from './NewReview'
import Review from './Review'

function GuideProfile() {
  const [guide, setGuide] = useState([])

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
    <div className="w-1/2 mx-auto text-center flex flex-col">
      <div className="font-[Lora] bg-[#C2DEDC] text-xl ">
        <div className="border-2[#C2DEDC] block pt-16">
          <div className=" flex justify-center space-x-10">
            <img
              className="w-64 rounded-full bg-white"
              src="https://1.bp.blogspot.com/-umW__JVzY78/Vf-aswLCMdI/AAAAAAAAyJg/hvvJJQqrxMI/s800/icon_business_man16.png"
            />
            <ul className="pt-14 m-2 text-left ">
              <li>Name:{guide?.name}</li>
              <li>Country:{guide?.country}</li>
              <li>City:{guide?.city}</li>
            </ul>
          </div>
        </div>
        <h2 className="text-center m-8">Bio: {guide?.bio}</h2>
        <div className="text-left flex justify-center">
          <div className="border-2 white p-10 m-2">
            <h2 className="text-center">About {guide?.name}</h2>
            <h2>Spoken languages:</h2>
            <ul>
              <li>{guide?.language}</li>
            </ul>
            <h2>Fee: ${guide?.fee}</h2>
            <h2>Contact Number: {guide?.contactNumber}</h2>
            <h2>Email: {guide?.email}</h2>
          </div>
        </div>
      </div>
      <ProfileDelete />
      <Review guideId={id} />
      <NewReview />
    </div>
  )
}

export default GuideProfile
