import React, { useEffect, useState } from 'react'
import { addGuide } from '.././apis/guides'
import { fetchAGuide } from '../apis/individualGuide'
import { useNavigate } from 'react-router-dom'

function addProfile() {
  const navigate = useNavigate()

  const newGuide = {
    name: 'Buster Brown',
    bio: "He's the man",
    language: 'Space-Elvish, Romulyn',
    fee: 100,
    contact_number: 455454544444,
    email: 'B.B@gmail.com',
  }

  useEffect(() => {
    addGuide(newGuide)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  const testButton = () => {
    return navigate('/')
  }

  return <button onClick={testButton}>Go home</button>
}

export default addProfile
