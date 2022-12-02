import React, { useEffect, useState } from 'react'
import { addGuide } from '.././apis/guides'
import { fetchAGuide } from '../apis/individualGuide'

function addProfile() {
  const newGuide = {
    id: 13,
    name: 'Buster Brown',
    bio: "He's the man",
    language: 'Space-Elvish, Romulyn',
    fee: 100,
    contact_number: 455454544444,
    email: 'B.B@gmail.com',
  }

  const [profile, setProfile] = useState([newGuide])

  useEffect(() => {
    addGuide(newGuide)
      .then((res) => {
        setProfile(fetchAGuide(res[0]))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return <h2>{profile?.name}</h2>
}

export default addProfile
