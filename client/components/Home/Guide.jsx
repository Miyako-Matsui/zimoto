import React from "react";
import { Link } from "react-router-dom";

function Guide({guide}) {
  const {id, name, averageRating, fee} = guide
  return(
    <Link to= {'/profiles/'+ id }>
      <div className=' rounded shadow-md bg-[#d2e6e3] hover:shadow-lg shadow-gray-400 hover:shadow-gray-700 duration-150'>
        <div className=" w-full aspect-square p-5">
          <img src="https://www.byrdie.com/thmb/UWottmNwy9YFUggcgNVyVR5e79E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/smiling-861cf088a0974d41bbfa9a7f7eddf2e2.jpg" alt="avatar" className=" rounded-full"/>
        </div>
        <div className=" p-4 ">
          <h1 className=" text-xl"> {name} </h1>
          <h2> Rating: {averageRating} </h2>
          <h2> Fee: ${fee}/hour </h2>
        </div>
      </div>
    </Link>
  )
}

export default Guide