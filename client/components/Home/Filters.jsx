import React, { useState } from "react";
import {getFilteredGuides} from '../../apis/guides'

function Filters() {
  const [filters, setFilters] = useState({
    country: '',
    city: '',
    language: '',
    minFee: 0,
    maxFee: 100,
    minRating: 0,
    maxRating: 5
  })

  const formConfig = [
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
    {
      keyName: 'country',
      displayName: 'Country',
      type: 'text',
      placeHolder: 'Any'
    },
    {
      keyName: 'city',
      displayName: 'City',
      type: 'text',
      placeHolder: 'Any'
    },
    {
      keyName: 'language',
      displayName: 'Language',
      type: 'text',
      placeHolder: 'Any'
    },
  ]

  function handleSubmit(e) {
    e.preventDefault()
    getFilteredGuides(filters)

  }

  function handleChange(e) {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    })
  }

  return(
    <div className=" flex justify-center">
      <form onSubmit={handleSubmit} className=" grid grid-cols-2">
        {formConfig.map(field => 
          <div key ={field.keyName} className=" flex justify-end p-2" >
            <label htmlFor={field.keyName} className=" px-2"> {field.displayName}: </label>
            <input type= {field.type} name={field.keyName} value={filters[field.keyName]} placeholder={field.placeHolder} onChange= {handleChange}/>
          </div>
        )}

        <button className=" border p-1 w-1/2 justify-self-end"> Apply filter </button>
      </form>
    </div>
  )
}

export default Filters