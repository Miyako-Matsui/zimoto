import { configure } from "@testing-library/react";
import React, { useState } from "react";

function Filters() {
  // const [country, setCountry] = useState()
  // const [city, setCity] = useState()
  // const [language, setLanguage] = useState()
  // const [fee, setFee] = useState()
  // const [rating, setRating] = useState()
  
  const [filters, setFilters] = useState({
    country: 'any',
    city: 'any',
    language: 'any',
    fee: 'any',
    rating: 'any',
  })

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target.value)
  }

  function handleChange(e) {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    })
  }

  return(
    <div className=" bg-slate-100 flex">
      <form onSubmit={handleSubmit}>
        <label htmlFor="country"> Country: </label>
        <input type="text" name="country" value={filters.country} onChange= {handleChange}/>

        <label htmlFor="city"> City: </label>
        <input type="text" name="city" value={filters.city} onChange= {handleChange}/>

        <label htmlFor="language"> Language: </label>
        <input type="text" name="language" value={filters.language} onChange= {handleChange}/>

        <label htmlFor="fee"> Fee: </label>
        <input type="number" name="fee" value={filters.fee} onChange= {handleChange}/>

        <label htmlFor="rating"> Rating: </label>
        <input type="number" name="rating" value={filters.rating} onChange= {handleChange}/>
      </form>
    </div>
  )
}

export default Filters