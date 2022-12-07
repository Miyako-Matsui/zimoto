import React, { useState, useRef, useEffect } from 'react'
import { addGuide } from '.././apis/guides'
import { useNavigate } from 'react-router-dom'

function AddProfile() {
  const uploadedImage = useRef()
  const cloudinary = useRef()
  const widget = useRef()
  const imgPath = useRef(null)
  const imgUrl = 'https://res.cloudinary.com/dhstdr0nk/image/upload/'
  const [Image, setImage] = useState(
    'https://i.scdn.co/image/ab6761610000e5ebc94fb92f8143c3637c6f7b80'
  )
  const navigate = useNavigate()

  useEffect(() => {
    cloudinary.current = window.cloudinary
    widget.current = cloudinary.current.createUploadWidget({
      cloudName: "dhstdr0nk",
      uploadPreset: "zimoto",
    },function(error, result){
      if(result.data.event == 'abort'){
        let img = uploadedImage.current
          if(img == undefined){
            img = 'https://i.scdn.co/image/ab6761610000e5ebc94fb92f8143c3637c6f7b80'
          }
        setImage(img)
      }
      if(result?.data.info.files[0].uploadInfo.path !== undefined){
        imgPath.current = result?.data.info.files[0].uploadInfo.path
        console.log("img path", imgPath)
      }
      if(imgPath.current !== null){
        uploadedImage.current = imgUrl + imgPath.current
      }
    })
  }, []);

  const [guideData, setGuideData] = useState({
    name: '',
    bio: '',
    language: '',
    country: '',
    city: '',
    fee: '',
    contact_number: '',
    email: '',
    picture_url: Image,
  })

  const handleChange = (evt) => {
    setGuideData({
      ...guideData,
      [evt.target.name]: evt.target.value,
      picture_url: Image,
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    
    addGuide(guideData).then((res) => {
      navigate(`/profiles/${res}`)
    })
    .catch((err) => console.log(err.message))
  }

  return (
    <>
      <h1 className='text-6xl text-center m-7'>Add your guide profile</h1>
      <div className="flex justify-center">
        <img
          className="max-h-60 max-w-60 lg:h-60 rounded-full bg-white"
          src={Image}
          alt="user uploaded"
        />
      </div>
      <div className="text-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
          onClick={() => widget.current.open()}
        >
          Upload Image
        </button>
      </div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Name:</h1>
            <input
              type="text"
              id="name"
              name="name"
              size="60"
              defaultValue={guideData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <h1>Bio:</h1>
            <textarea
              type="text"
              id="bio"
              name="bio"
              rows="7"
              cols="60"
              defaultValue={guideData.bio}
              onChange={handleChange}
            />
          </div>
          <div>
            <h1>Language:</h1>
            <input
              type="text"
              id="language"
              name="language"
              size="60"
              defaultValue={guideData.language}
              onChange={handleChange}
            />
          </div>
          <div>
            <h1>Country:</h1>
            <input
              type="text"
              id="country"
              name="country"
              size="60"
              defaultValue={guideData.country}
              onChange={handleChange}
            />
          </div>
          <div>
            <h1>City:</h1>
            <input
              type="text"
              id="city"
              name="city"
              size="60"
              defaultValue={guideData.city}
              onChange={handleChange}
            />
          </div>
          <div>
            <h1>Fee: </h1>
            <input
              type="text"
              id="fee"
              name="fee"
              size="60"
              defaultValue={guideData.fee}
              onChange={handleChange}
            />
          </div>
          <div>
            <h1>Contact Number: </h1>
            <input
              type="text"
              id="contact_number"
              name="contact_number"
              size="60"
              defaultValue={guideData.contact_number}
              onChange={handleChange}
            />
          </div>
          <div>
            <h1>Email: </h1>
            <input
              type="text"
              id="email"
              name="email"
              size="60"
              defaultValue={guideData.email}
              onChange={handleChange}
            />
          </div>
          <div className="text-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center m-5">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddProfile
