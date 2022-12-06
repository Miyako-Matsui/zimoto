import React, { useState, useRef, useEffect } from 'react'
import { addGuide } from '.././apis/guides'
import { useNavigate } from 'react-router-dom'

function addProfile() {
  const uploadedImage = useRef()
  const cloudinary = useRef()
  const widget = useRef()
  const imgPath = useRef(null)
  const imgUrl = 'https://res.cloudinary.com/dhstdr0nk/image/upload/'
  const [Image, setImage] = useState('https://i.scdn.co/image/ab6761610000e5ebc94fb92f8143c3637c6f7b80')
  const navigate = useNavigate()

  useEffect(() => {
    cloudinary.current = window.cloudinary
    widget.current = cloudinary.current.createUploadWidget({
      cloudName: "dhstdr0nk",
      uploadPreset: "zimoto",
    }, async function(error, result){

      console.log(result.data.event)
      if(result.data.event === 'abort'){
        const img = uploadedImage.current
        setImage(img)
      }
      if(result.data.info.files[0].uploadInfo.path !== undefined){
      imgPath.current = result.data.info.files[0].uploadInfo.path
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
    fee: '',
    contact_number: '',
    email: '',
    picture_url: Image,
  })

  const handleChange = (evt) => {

    setGuideData({
      ...guideData,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = async (evt) => {

    evt.preventDefault()

    setGuideData(Number(guideData.contact_number))

    await addGuide(guideData).then((res) => {
      console.log(res)

      navigate('/')
    })

    console.log('done', guideData)
  }


  return (
    <>
      <img className='max-h-60 max-w-60 lg:h-60 rounded-full bg-white' src={Image} alt='user uploaded'/>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => widget.current.open()}>
        Upload Image
      </button>

      <h2>Please fill this out:</h2>
      <form onSubmit={handleSubmit}>
        <div>

          <label>Name
            <input type='text' id='name' name='name' defaultValue={guideData.name} onChange={handleChange} />
          </label>
        </div>
        <div>

          <label>Bio
            <input type='text' id='bio' name='bio' defaultValue={guideData.bio} onChange={handleChange} />
          </label>
        </div>
        <div>

          <label>Language
            <input type='text' id='language' name='language' defaultValue={guideData.language} onChange={handleChange} />
          </label>
        </div>
        <div>

          <label>Fee
            <input type='text' id='fee' name='fee' defaultValue={guideData.fee} onChange={handleChange} />
          </label>
        </div>
        <div>

          <label>Contact Number
          <input type='number' id='contact_number' name='contact_number' defaultValue={guideData.contact_number} onChange={handleChange} />
          </label>
        </div>
        <div>

          <label>Email
          <input type='text' id='email' name='email' defaultValue={guideData.email} onChange={handleChange} />
          </label>
        </div>
        <button>Save</button>
      </form>
    </>

  )

}

export default addProfile
