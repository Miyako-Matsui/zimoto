import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import Nav from './Nav'

function Header() {

  return (
    <>
    <div className='bg-[#DAB553] flex justify-between'>
      <img className='h-40' src="./images/logo.png" alt="" />
      <div className='flex flex-col'>
        <h1 className='text-8xl m-1'>Zimoto</h1>
        <h2 className='text-2xl ml-10'>Local, friendly guides</h2>
      </div>
      <Nav />
    </div>
    </>
  )
}

export default Header
