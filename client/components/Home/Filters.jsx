import React, { useState } from "react";
import { filterGuidesThunk } from '../../actions/guides'
import { useDispatch } from 'react-redux'

function Filters() {
  const dispatch = useDispatch()
  const [filters, setFilters] = useState({
    country: '',
    city: '',
    language: '',
    minFee: '',
    maxFee: '',
    minRating: '',
    maxRating: ''
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
      type: 'number',
      placeHolder: 'Any'
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
    dispatch(filterGuidesThunk(filters))
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
            <input type= {field.type} name={field.keyName} value={filters[field.keyName]} placeholder= 'Any' onChange= {handleChange}/>
          </div>
        )}

        <button className=" border p-1 w-1/2 justify-self-end"> Apply filter </button>
      </form>
    </div>
  )
}

export default Filters