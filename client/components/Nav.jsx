import React from 'react'

import { Link } from 'react-router-dom'

function Nav() {
    return (
    <nav className='flex'>
      <p><Link to='/'>Home</Link></p>
    </nav>
  )
}

export default Nav