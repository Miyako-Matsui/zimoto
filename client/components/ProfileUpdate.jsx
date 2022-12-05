import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchAGuide } from '../apis/individualGuide'
import { updateGuide } from '../apis/guides'


// Use state to store form info and send it through to the api to go to the backend (send api id and body of form)

function ProfileUpdate() {

  const { id } = useParams()
  const navigate = useNavigate()
  const initialObj = useRef({})

  useEffect(() => {
    fetchAGuide(id)
      .then((res) => {
        initialObj.current = res
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  const { name, bio, language, fee, contact_number, email } = initialObj.current

  const [showForm, setShowForm] = useState(false)

  const [guideDetails, setGuideDetails] = useState({
    
    name: name,
    bio: bio,
    language: language,
    fee: fee,
    contact_number: contact_number,
    email: email,
  })

  function showEditForm(){
    setShowForm(!showForm)
  }

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

      <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
         onClick={showEditForm}> Update Profile
      </button>

      {showForm && (
      <div>
      <h2 className="p-10">Please fill this out:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={name}
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
            defaultValue={bio}
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
            defaultValue={language}
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
            defaultValue={fee}
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
            defaultValue={contact_number}
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
            defaultValue={email}
            onChange={handleChange}
            />
            </label>
        </div>
        <button type="submit">Save</button>
      </form>
      </div>
      )}
    </>
  )
}


export default ProfileUpdate
