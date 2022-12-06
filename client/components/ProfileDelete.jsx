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
          className="bg-[#C2DEDC] hover:bg-[#DAC0DD] text-[#2d3951] font-bold py-2 px-10 rounded"
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
