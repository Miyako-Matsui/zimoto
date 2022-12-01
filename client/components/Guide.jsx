import React from "react";
import { Link } from "react-router-dom";
import '../index.css'

function Guide({guide}) {
  const {id, name, averageRating} = guide
  return(
    <Link to= {'/profiles/'+ id } >
      <div className=' rounded shadow-md p-2 m-2'>
        <h1 className=" text-xl"> {name} </h1>
        <h2> Rating: {averageRating} </h2>
      </div>
    </Link>
  )
}

export default Guide