import React from 'react'

import { deleteGuide } from '../apis/guides'

function ProfileDelete() {

  function removeProfile(id) {
    deleteGuide(id)
      .then(() => {
        navigate('/')
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
    <div>
      <button className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={(e) => {
        console.log('delete profile')
        e.preventDefault()
        return removeProfile()
      }}>Delete Profile</button>
    </div>
    </>
  )
}

export default ProfileDelete
