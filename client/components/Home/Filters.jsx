import React, { useState } from "react";

function Filters() {
  // const [country, setCountry] = useState()
  // const [city, setCity] = useState()
  // const [language, setLanguage] = useState()
  // const [fee, setFee] = useState()
  // const [rating, setRating] = useState()
  
  const [filters, setFilters] = useState({
    country: 'Any',
    city: 'Any',
    language: 'Any',
    minFee: 0,
    maxFee: 100,
    minRating: 0,
    maxRating: 5
  })

  const formConfig = [
    {
      keyName: 'country',
      displayName: 'Country',
      type: 'text'
    },
    {
      keyName: 'city',
      displayName: 'City',
      type: 'text'
    },
    {
      keyName: 'language',
      displayName: 'Language',
      type: 'text'
    },
    {
      keyName: 'minFee',
      displayName: 'Fee from',
      type: 'number'
    },
    {
      keyName: 'maxFee',
      displayName: 'Fee to',
      type: 'number'
    },
    {
      keyName: 'minRating',
      displayName: 'Rating from',
      type: 'number'
    },
    {
      keyName: 'maxRating',
      displayName: 'Rating to',
      type: 'number'
    },
  ]

  function handleSubmit(e) {
    e.preventDefault()
    console.log(filters)
  }

  function handleChange(e) {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    })
  }

  return(
    <div >
      <form onSubmit={handleSubmit} className=" grid grid-cols-2 gap-1">
        {formConfig.map(field => 
          <div key ={field.keyName} className=" flex justify-end" >
            <label htmlFor={field.keyName} className=" px-2"> {field.displayName}: </label>
            <input type= {field.type} name={field.keyName} value={filters[field.keyName]} onChange= {handleChange}/>
          </div>
        )}

        <button className=" border p-1 w-1/2 justify-self-end"> Apply filter </button>
      </form>
    </div>
  )
}

export default Filters