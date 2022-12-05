import React, { useEffect, useRef, } from 'react';
import { useParams } from 'react-router-dom'
import { updateGuide } from '../apis/guides'
import { fetchAGuide } from '../apis/individualGuide'


const UploadWidget = () => {
  const { id } = useParams()
  const guideObj = useRef()
  const cloudinary = useRef()
  const widget = useRef()
  const imgPath = useRef(null)
  const imgUrl = 'https://res.cloudinary.com/dhstdr0nk/image/upload/'
  useEffect(() => {
    fetchAGuide(id)
      .then((res) => {
        guideObj.current = res
      })
      .catch((err) => {
        console.log(err.message)
      })
  })
  
  
  
  useEffect(() => {
    cloudinary.current = window.cloudinary
    widget.current = cloudinary.current.createUploadWidget({
      cloudName: "dhstdr0nk",
      uploadPreset: "zimoto",
    }, async function(error, result){
      if(result.data.info.files[0].uploadInfo.path !== undefined){
      imgPath.current = result.data.info.files[0].uploadInfo.path
      }
      if(imgPath.current !== null){
        const uploadedImage = imgUrl + imgPath.current
        
        const imgUrlUpdate = {
          picture_url: uploadedImage,
        }
        //uploadedImage is set to the URL for the Image after the image is done uploading!!
        //TODO - Save URL To Database Based on ID of guide
        updateGuide(id, imgUrlUpdate)
      }

    })
  }, []);
  
 
  

  return (
    <>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => widget.current.open()}>
        Update Image
      </button>
    </>
  )
}

export default UploadWidget;