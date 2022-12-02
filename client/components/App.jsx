import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Profile from './Profile'
import GuideProfile from './GuideProfile'
import Review from './Review'

function App() {

  return (
    <>
    <div className='bg-[#C2DEDC] absolute top-0 bottom-0 left-0 right-0' >
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profiles/:id" element={<GuideProfile />} />
      </Routes>
    </div>
    </>
  )
}

export default App
