/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

export default function Footer(){
  return(
    <>
    <hr className='color'/>
      <span style={{ paddingLeft: 5 }}>
          {new Date().getFullYear()} Zimoto. All Rights
          Reserved.
      </span>    
    </>
  )
}
