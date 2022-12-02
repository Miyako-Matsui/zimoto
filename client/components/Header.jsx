import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import Nav from './Nav'

function Header() {

  return (
    <>
    <div className='bg-[#DAB553]'>
      <img className='h-40' src="./images/logo.png" alt="" />
      <Nav />
    </div>
    </>
  )
}

export default Header
