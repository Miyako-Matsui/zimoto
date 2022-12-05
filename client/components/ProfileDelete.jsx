import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { deleteGuide } from '../apis/guides'

function ProfileDelete() {
  const { id } = useParams()
  const navigate = useNavigate()

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
        <button
          className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded"
          onClick={(e) => {
            console.log('delete profile')
            e.preventDefault()
            return removeProfile(id)
          }}
        >
          Delete Profile
        </button>
      </div>

    </>
  )
}

export default ProfileDelete
