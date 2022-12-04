import React from 'react'

import { Link } from 'react-router-dom'

function Nav() {
    return (
    <nav className='flex flex-col-reverse'>
      <ul className='flex justify-items-end space-x-6 mr-10'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/profiles'>Profiles</Link></li>
      </ul>
    </nav>
  )
}

export default Nav