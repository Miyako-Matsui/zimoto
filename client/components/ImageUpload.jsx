import React, { useEffect, useRef } from 'react';

const UploadWidget = () => {
  const cloudinary = useRef()
  const widget = useRef()
  const imgPath = useRef(null)
  const imgUrl = 'https://res.cloudinary.com/dhstdr0nk/image/upload/'
  // image upload path: data.info.files.0.uploadInfo.path
  //ask facilitators about this one fr fr

  useEffect(() => {
    cloudinary.current = window.cloudinary;
    widget.current = cloudinary.current.createUploadWidget({
      cloudName: "dhstdr0nk",
      uploadPreset: "zimoto",
    }, async function(error, result){
      // console.log(result)
      if(result.data.info.files[0].uploadInfo.path !== undefined){
      imgPath.current = result.data.info.files[0].uploadInfo.path
      console.log(imgPath)
      }
      if(imgPath.current !== null){
        const uploadedImage = imgUrl + imgPath.current
        console.log(uploadedImage)
        //uploadedImage is set to the URL for the Image after the image is done uploading :D
        //TODO - Save URL To Database Based on ID of guide
      }

    })
  }, []);
  
 
  

  return (
    <>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => widget.current.open()}>
        UPLOAD IMAGE
      </button>
    </>
  )
}

export default UploadWidget;