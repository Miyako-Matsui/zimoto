import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useParams, useNavigate } from 'react-router-dom'

import { deleteGuide } from '../apis/guides'

function ProfileDelete() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getAccessTokenSilently } = useAuth0()

  function removeProfile(id) {
<<<<<<< HEAD
=======

    
>>>>>>> cd021b9 (auth stretch WIP)
    deleteGuide(id)
      getAccessTokenSilently()
        .then((token) => {
          navigate(token, '/')
        })
        .catch((err) => setError(err.message))
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
