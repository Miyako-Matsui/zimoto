import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import Profile from './Profile'
import GuideProfile from './GuideProfile'
import Review from './Review'

function App() {

  return (
    <>
    <Header />
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profiles/:id" element={<GuideProfile />} />
        <Route path="/reviews/reviews/:id" element={<Review />} />
      </Routes>
    </>
  )
}

export default App
