import React from 'react'
import BurgerMenu from './BurgerMenu'
import Logo from './Logo'
import Nav from './Nav'

function Header() {
  return (
    <>
      <div className=" flex justify-center bg-gradient-to-r from-[#2D3951] to-[#576E9D] place-content-center  ">
        <Logo />
      </div>
      <div>
        <BurgerMenu />
        <Nav />
      </div>
    </>
  )
}

export default Header
