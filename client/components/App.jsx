import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Header from './Header'
import Profile from './Profile'
import GuideProfile from './GuideProfile'
import AddProfile from './AddProfile'

function App() {
  return (
    <>
      <div className="bg-[#C2DEDC] w-full h-full min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profiles/add" element={<AddProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profiles/:id" element={<GuideProfile />} />
        </Routes>
      </div>
    </>
  )
}

export default App
