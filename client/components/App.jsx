import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import GuideProfile from './GuideProfile'
import Review from './Review'

function App() {
  // const fruits = useSelector((state) => state.fruits)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchFruits())
  // }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profiles/:id" element={<GuideProfile />} />
        <Route path="/reviews/reviews/:id" element={<Review />} />
      </Routes>
      <GuideProfile />
    </>
  )
}

export default App
