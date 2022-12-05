import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { updateGuide } from '../apis/guides'

// Use state to store form info and send it through to the api to go to the backend (send api id and body of form)

function ProfileUpdate() {

  const { id } = useParams()
  const navigate = useNavigate()

  const [guideDetails, setGuideDetails] = useState({

    name: '',
    bio: '',
    language: '',
    fee: '',
    contact_number: '',
    email: '',
  })

  const handleChange = (evt) => {

    setGuideDetails({
      ...guideDetails,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = async (evt) => {

    evt.preventDefault()

    setGuideDetails(Number(guideDetails.contact_number))

    await updateGuide(id, guideDetails).then((res) => {
      console.log(res)

      navigate('/')
    })
  }

  return (

    <>
      <h2 className="p-10">Please fill this out:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={guideDetails.name}
            onChange={handleChange}
            />
            </label>
        </div>
        <div>
          <label>
            Bio
          <input
            type="text"
            id="bio"
            name="bio"
            defaultValue={guideDetails.bio}
            onChange={handleChange}
            />
            </label>
        </div>
        <div>
          <label>
            Language
          <input
            type="text"
            id="language"
            name="language"
            defaultValue={guideDetails.language}
            onChange={handleChange}
            />
            </label>
        </div>
        <div>
          <label>
            Fee
          <input
            type="text"
            id="fee"
            name="fee"
            defaultValue={guideDetails.fee}
            onChange={handleChange}
            />
            </label>
        </div>
        <div>
          <label>
            Contact Number
          <input
            type="number"
            id="contact_number"
            name="contact_number"
            defaultValue={guideDetails.contact_number}
            onChange={handleChange}
            />
            </label>
        </div>
        <div>
          <label>
            Email
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={guideDetails.email}
            onChange={handleChange}
            />
            </label>
        </div>
        <div>
          <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Update Profile
          </button>

        </div>
      </form>
    </>
  )
}


export default ProfileUpdate
