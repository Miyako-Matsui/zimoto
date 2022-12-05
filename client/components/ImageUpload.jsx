import React, { useEffect, useRef } from 'react';

const UploadWidget = ({ children, onUpload }) => {
  const cloudinary = useRef();
  const widget = useRef();

  // img url: https://res.cloudinary.com/dhstdr0nk/image/upload/
  // image upload path: data.info.files.0.uploadInfo.path


  useEffect(() => {
    cloudinary.current = window.cloudinary;
    widget.current = cloudinary.current.createUploadWidget({
      cloudName: "dhstdr0nk",
      uploadPreset: "zimoto",
    }, function(error, result){
      // console.log(result)
      console.log(result.data.info.files[0].uploadInfo.path)
    })
    console.log(cloudinary.current)
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