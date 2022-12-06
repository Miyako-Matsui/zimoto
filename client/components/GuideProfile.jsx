import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAGuide } from '../apis/individualGuide'
import '../index.css'
import ProfileDelete from './ProfileDelete'
import ProfileUpdate from './ProfileUpdate'
import NewReview from './NewReview'
import Review from './Review'
import ImageUpload from './ImageUpload'
import { IfAuthenticated } from './Authenticated'

function GuideProfile() {
  const [guide, setGuide] = useState([])

  const { id } = useParams()

  useEffect(() => {
    fetchAGuide(id)
      .then((res) => {
        setGuide(res)
        console.log(res)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])
  
  return (
    <div className="w-1/2 mx-auto text-center flex flex-col">
      <div className="font-[Lora] bg-[#C2DEDC] text-xl ">
        <div className="block pt-16 break-nomal md:break-all ">
          <div className=" flex justify-center  space-x-10">
            <img
              className="h-60 md:h-60 lg:h-60 rounded-full bg-white"
              src={guide?.picture_url}
              alt="img"
            />
            
            
            <ul className="pt-10 m-3 p-6 text-left leading-10 break-nomal md:break-all">
              <li className="font-normal"> Hello! I&apos;m <div className="font-semibold">{guide?.name}</div></li>
              <li ></li>
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
          <div className=" flex justify-start pl-52">
            <ImageUpload/>
          </div>
        <div className="p-8 m-6 text-left rounded shadow-md bg-[#d2e6e3] leading-8">
          <div>
            <h2 className="text-center font-semibold">About {guide?.name}</h2>
          </div>
          <p className="leading-10">{guide?.bio}</p>
          <h2 className="text-center font-semibold">More about your local guide</h2>
          <ul className="list-disc list-style-position: inside ">
            <li>Languages : </li>
            <li>{guide?.language}</li>
            <li>Fee : ${guide?.fee}</li>
            <li>Contact Numbe : {guide?.contactNumber}</li>
            <li>Email : {guide?.email}</li>
          </ul>
        </div>
      <IfAuthenticated>
        <div className="border-t border-[#2d3951] mt-5">
          <ProfileUpdate />
          <ProfileDelete />
        </div>
      </IfAuthenticated>
      <Review guideId={id} />
      <NewReview />
    </div>
  )
}

// check profile belongs to authenticated user
// if yes, render update and delete buttons
// if no, update and delete buttons do not render

export default GuideProfile
