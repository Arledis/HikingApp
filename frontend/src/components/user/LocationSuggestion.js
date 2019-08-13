import React from 'react'
import './LocationSuggestion.css'

const LocationSuggestion = ({suggestion}) => {

  return(
    <div className="suggestion-box">
    <h2>{suggestion.name}</h2>
    </div>
  )

}


export default LocationSuggestion;
