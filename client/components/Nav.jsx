import React from 'react'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import { useAuth0 } from '@auth0/auth0-react'

import { Link } from 'react-router-dom'

function Nav() {
  const { logout, loginWithRedirect} = useAuth0()
  const { user } = useAuth0()

  const handleLogOff = (e) => {
    e.preventDefault()
    logout()
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    loginWithRedirect()
  }

    return (
    <nav className='flex flex-col-reverse'>
      <ul className='flex justify-items-end space-x-6 mr-10'>
      <IfAuthenticated>
          <li><Link to='/' onClick={handleLogOff}>
            Log off
          </Link></li>
          <li><Link to='/profiles/add'>Add your profile</Link></li>
          <p>{user?.nickname}</p>
          <p>{user?.name}</p>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <li><Link to='/' onClick={handleSignIn}>
            Sign In
          </Link></li>
        </IfNotAuthenticated>
        <li><Link to='/'>Home</Link></li>
      </ul>
    </nav>
  )
}

export default Nav