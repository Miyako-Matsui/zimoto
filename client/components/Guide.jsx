import React from "react";
import '../index.css'

function Guide({guide}) {
  const {name, averageRating} = guide
  return(
    <div className=' rounded shadow-md p-2 m-2'>
      <h1 className=" text-xl"> {name} </h1>
      <h2> Rating: {averageRating} </h2>
    </div>
  )
}

export default Guide