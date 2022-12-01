import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchGuidesThunk } from '../actions'
import Guide from "./Guide";

function Home() {
  const dispatch = useDispatch()
  const guides = useSelector(state => state.guides)

  useEffect( () => {
    dispatch(fetchGuidesThunk())
  })
  
  return(
    <div>
      {guides.map(guide => 
        <Guide guide= {guide} />
        )}
    </div>
  )
}

export default Home