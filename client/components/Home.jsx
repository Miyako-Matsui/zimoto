import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchGuidesThunk } from '../actions'
import Guide from './Guide'

function Home() {
  const dispatch = useDispatch()
  const guides = useSelector((state) => state.guides)

  useEffect(() => {
    dispatch(fetchGuidesThunk())
  })

  return (
    <div className=" grid grid-cols-3 gap-3 w-2/3 mx-auto mt-10">
      {guides.map((guide) => (
        <Guide key={guide.id} guide={guide} />
      ))}
    </div>
  )
}

export default Home
