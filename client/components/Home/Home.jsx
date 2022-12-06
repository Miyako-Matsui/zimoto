import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchGuidesThunk } from '../../actions/guides'
import Filters from "./Filters";
import Guide from "./Guide";

function Home() {
  const dispatch = useDispatch()
  const guides = useSelector((state) => state.guides)

  useEffect(() => {
    dispatch(fetchGuidesThunk())
  },[])
  
  return(
    <div className=" w-2/3 mx-auto pt-5 pb-20">
      <Filters />

      <div className=" grid grid-cols-4 gap-10 mt-10">
        {guides.map(guide => 
          <Guide key={guide.id} guide={guide} />
          )}
      </div>
    </div>
  )
}

export default Home
