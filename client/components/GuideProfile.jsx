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
        <div className="border-2[#C2DEDC] block pt-16 break-all ">
          <div className=" flex justify-center space-x-10">
            <img
              className="w-64 rounded-full bg-white"
              src="https://1.bp.blogspot.com/-umW__JVzY78/Vf-aswLCMdI/AAAAAAAAyJg/hvvJJQqrxMI/s800/icon_business_man16.png"
              alt="img"
            />
            <ul className="pt-14 m-2 text-left leading-10">
              <li className="font-semibold">Hello! I'm </li>
              <li className="font-semibold text-center">{guide?.name}</li>
              <li className="font-semibold">
                I would like to guide for you in{' '}
              </li>
              <li className="font-semibold text-center">
                {guide?.country} of {guide?.city}
              </li>
            </ul>
          </div>
        </div>
        <h2 className="  p-8 m-6 text-left rounded shadow-md bg-[#d2e6e3] leading-8">
          {guide?.bio}
        </h2>

        <div className="text-left flex justify-center">
          <div className=" p-8 m-6 ounded shadow-md bg-[#d2e6e3]">
            <h2 className="text-center">More about your local guide</h2>

            <h2 className="m-2 leading-10">
              Languages:
              <ul>
                <li>{guide?.language}</li>
              </ul>
            </h2>

            <h2 className="m-2 leading-10">Fee: ${guide?.fee}</h2>
            <h2 className="m-2 leading-10">
              Contact Number: {guide?.contactNumber}
            </h2>
            <h2 className=" m-2 leading-10">Email: {guide?.email}</h2>
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
