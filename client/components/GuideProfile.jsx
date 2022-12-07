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
        console.log(res)
        setGuide(res)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <>
      <div className="mx-auto text-center flex flex-col lg:w-2/3 p-10 lg:p-10 mb-15 ">
        <div className="font-[Lora] bg-[#C2DEDC] text-xl ">
          <div className="block pt-10 break-nomal md:break-all ">
            <div className=" flex justify-center flex-col lg:flex-row space-x-10">
              <img
                className="h-60 md:h-60 lg:h-60 rounded-full bg-white"
                src={guide?.picture_url}
                alt="img"
              />
              <p className="pt-10 m-3 p-6 text-left leading-10 break-nomal md:break-all mx-auto lg:p-10 mb-15 ">
                <p className="font-normal">Hello! I'm </p>
                <p className="font-semibold text-center">{guide?.name}</p>
                <p className="font-normal">I would like to be your guide to</p>
                <p className="font-semibold text-center">
                  {guide?.city}
                  <span className="font-normal">,</span>
                  &nbsp;
                  {'  '}
                  {guide?.country}
                </p>
              </p>
            </div>
          </div>
          <div className="flex lg:justify-start lg:pl-56 self-center pl-16">
            <ImageUpload />
          </div>
          <IfAuthenticated>
            <div className="border-t border-[#c2dedc] p-2 flex justify-end">
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
      </div>
    </>
  )
}

export default GuideProfile
