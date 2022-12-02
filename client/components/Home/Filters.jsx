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
    feeFrom: 0,
    feeTo: 100,
    ratingFrom: 0,
    ratingTo: 5
  })

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target.value)
  }

  function handleChange(e) {
    console.log('change')
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

        <label htmlFor="feeFrom"> Fee from: </label>
        <input type="number" name="feeFrom" value={filters.feeFrom} onChange= {handleChange}/>

        <label htmlFor="feeFrom"> Fee from: </label>
        <input type="number" name="fee" value={filters.feeTo} onChange= {handleChange}/>

        <label htmlFor="ratingFrom"> Rating from: </label>
        <input type="number" name="ratingFrom" value={filters.ratingFrom} onChange= {handleChange}/>

        <label htmlFor="ratingTo"> Rating to: </label>
        <input type="number" name="ratingTo" value={filters.ratingTo} onChange= {handleChange}/>
      </form>
    </div>
  )
}

export default Filters