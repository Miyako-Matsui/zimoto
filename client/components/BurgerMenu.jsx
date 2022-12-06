import React from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

function BurgerMenu() {
  return(
    <div className=" bg-red-500">

    <Menu right width={ '20%' } >
      <Link to="/" className="hover:text-[#dab553] hover:font-bold"> Home </Link>
    </Menu>
    </div>
  )
}

export default BurgerMenu