import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useParams } from 'react-router-dom'
import { fetchAGuide } from '../apis/individualGuide'
import '../index.css'
import ProfileDelete from './ProfileDelete'
import ProfileUpdate from './ProfileUpdate'
import NewReview from './NewReview'
import Review from './Review'
import { IfAuthenticated } from './Authenticated'

function GuideProfile() {
  const [guide, setGuide] = useState([])
  const { user, isAuthenticated } = useAuth0

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
    <div className="w-2/3 mx-auto text-center flex flex-col">
      <div className="font-[Lora] bg-[#C2DEDC] text-xl ">
        <div className="block pt-16 break-nomal md:break-all ">
          <div className=" flex justify-center  space-x-10">
            <img
              className="h-60 md:h-60 lg:h-60 rounded-full bg-white"
              src="https://1.bp.blogspot.com/-umW__JVzY78/Vf-aswLCMdI/AAAAAAAAyJg/hvvJJQqrxMI/s800/icon_business_man16.png"
              alt="img"
            />
            <ul className="pt-10 m-3 p-6 text-left leading-10 break-nomal md:break-all">
              <li className="font-normal">Hello! I'm </li>
              <li className="font-semibold text-center">{guide?.name}</li>
              <li className="font-normal">I would like to guide for you in </li>
              <li className="font-semibold text-center">
                {guide?.city} &nbsp;<span className="font-normal">of</span>
                &nbsp;
                {'  '}
                {guide?.country}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-8 m-6 text-left rounded shadow-md bg-[#d2e6e3] leading-8">
        <div className="m-2">
          <h2 className="font-semibold text-xl">About {guide?.name}</h2>
          <p className="leading-10">{guide?.bio}</p>
        </div>
        <div className="m-2 pt-6">
          <h2 className="font-semibold text-xl">More about your local guide</h2>
          <ul className="list-disc list-style-position: inside ">
            <li>Languages : </li>
            <li className="list-none">{guide?.language}</li>
            <li>Fee : ${guide?.fee}</li>
            <li>Contact Numbe : {guide?.contactNumber}</li>
            <li>Email : {guide?.email}</li>
          </ul>
        </div>
      </div>
      <IfAuthenticated>
        <div className="border-t border-[#c2dedc] p-2">
          <ProfileUpdate />
          <div className="p-2"></div>
          <ProfileDelete />
        </div>
      </IfAuthenticated>
      <div className="border-t border-[#dab553] m-6">
        <Review guideId={id} />
      </div>
      <div className="border-t border-[#dab553] p-6">
        <NewReview />
      </div>
    </div>
  )
}

export default GuideProfile
