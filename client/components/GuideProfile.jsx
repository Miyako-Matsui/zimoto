import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import { fetchAGuide } from '../apis/individualGuide'
import '../index.css'

function GuideProfile() {
  const [guide, setGuide] = useState([])

  const { id } = useParams()

  useEffect(() => {
    fetchAGuide(id)
      .then((res) => {
        setGuide(res)
  useEffect(() => {
    fetchAGuide(3)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err.message)
      })
    })
  }, [])
  })
  return (
    <>
      <h2>Name: {guide?.name}</h2>
      <h2>Country: {guide?.country}</h2>
      <h2>City</h2>
      <p>{guide?.city}</p>
      <h2>Bio:</h2>
      <p>{guide?.bio}</p>
      <h2>Spoken languages:</h2>
      <ul>
        <li>{guide?.language}</li>
      </ul>
      <h2>Fee: {guide?.fee}</h2>
      <h2>Contact Number: {guide?.contactNumber}</h2>
      <h2>Email: {guide?.email}</h2>
    </>
  )
}

export default GuideProfile
