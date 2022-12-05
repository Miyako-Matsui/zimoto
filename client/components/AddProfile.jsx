import React, { useState } from 'react'
import { addGuide } from '.././apis/guides'
import { useNavigate } from 'react-router-dom'

function addProfile() {
  const navigate = useNavigate()

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

    await addGuide(guideData).then((res) => {
      console.log(res)

      navigate('/')
    })

    console.log('done', guideData)
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

          <label>Name
            <input type='text' id='name' name='name' defaultValue={guideData.name} onChange={handleChange} />
          </label>
        </div>
        <div>

          <label>Bio
            <input type='text' id='bio' name='bio' defaultValue={guideData.bio} onChange={handleChange} />
          </label>
        </div>
        <div>

          <label>Language
            <input type='text' id='language' name='language' defaultValue={guideData.language} onChange={handleChange} />
          </label>
        </div>
        <div>

          <label>Fee
            <input type='text' id='fee' name='fee' defaultValue={guideData.fee} onChange={handleChange} />
          </label>
        </div>
        <div>

          <label>Contact Number
          <input type='number' id='contact_number' name='contact_number' defaultValue={guideData.contact_number} onChange={handleChange} />
          </label>
        </div>
        <div>

          <label>Email
          <input type='text' id='email' name='email' defaultValue={guideData.email} onChange={handleChange} />
          </label>
        </div>
        <button>Save</button>
      </form>
    </>

  )

}

export default addProfile
