import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {fetchAGuide}  from '../../apis/individualGuide'

function Guide({guide}) {
  const [guideState, setGuide] = useState([])

  useEffect(() => {
    fetchAGuide(id)
      .then((res) => {
        setGuide(res)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])
  console.log(guide)
  const {id, name, averageRating, fee} = guide
  return(
    <Link to= {'/profiles/'+ id }>
      <div className=' rounded shadow-md bg-[#d2e6e3] hover:shadow-lg shadow-gray-400 hover:shadow-gray-700 duration-150'>
        <div className=" w-full aspect-square p-5">
          <img src={guideState.picture_url} alt="avatar" className=" rounded-full"/>
        </div>
        <div className=" p-4 ">
          <h1 className=" text-xl"> {name} </h1>
          <h2> Rating: {averageRating?.toFixed(1)} </h2>
          <h2> Fee: ${fee}/hour </h2>
        </div>
      </div>
    </Link>
  )
}

export default Guide