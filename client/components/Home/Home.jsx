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
    <div className="lg:w-2/3 mx-auto p-10 mb-15 ">
      <Filters />

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
        {guides.map(guide => 
          <Guide key={guide.id} guide={guide} />
          )}
      </div>
    </div>
  )
}

export default Home
