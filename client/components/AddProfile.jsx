import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { addGuide } from '.././apis/guides'
import { fetchAGuide } from '../apis/individualGuide'
import { useNavigate } from 'react-router-dom'

function addProfile() {
  const navigate = useNavigate()
  const { getAccessTokenSilently } = useAuth0()

  const [guideData, setGuideData] = useState({
    name: '',
    bio: '',
    language: '',
    fee: '',
    contact_number: '',
    email: ''
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

    getAccessTokenSilently()
        .then((token) => {
          addGuide(guideData, token)
          navigate('/')
        })
        .catch((err) => setError(err.message))

    // await addGuide(guideData).then((res) => {
    //   console.log(res)

    //   navigate('/')
    // })

    // console.log('done', guideData)
  }

  // useEffect(() => {
  //   addGuide(newGuide)
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch((err) => {
  //       console.log(err.message)
  //     })
  // }, [])

  return (
    <>
      <h2>Please fill this out:</h2>
      <form onSubmit={handleSubmit}>
        <div>

          <label>Name</label>
          <input type='text' id='name' name='name' defaultValue={guideData.name} onChange={handleChange} />
        </div>
        <div>

          <label>Bio</label>
          <input type='text' id='bio' name='bio' defaultValue={guideData.bio} onChange={handleChange} />
        </div>
        <div>

          <label>Language</label>
          <input type='text' id='language' name='language' defaultValue={guideData.language} onChange={handleChange} />
        </div>
        <div>

          <label>Fee</label>
          <input type='text' id='fee' name='fee' defaultValue={guideData.fee} onChange={handleChange} />
        </div>
        <div>

          <label>Contact Number</label>
          <input type='number' id='contact_number' name='contact_number' defaultValue={guideData.contact_number} onChange={handleChange} />
        </div>
        <div>

          <label>Email</label>
          <input type='text' id='email' name='email' defaultValue={guideData.email} onChange={handleChange} />
        </div>
        <button>Save</button>
      </form>
    </>

  )

}

export default addProfile
