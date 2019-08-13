import React from 'react'
import './LocationSuggestion.css'

const LocationSuggestion = ({suggestion}) => {

const imageStyle = {
    width: "5vw",
    height: "6vw",
    backgroundImage: `url(${suggestion.pictureURL})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition:"center",
    borderRadius: "10px 0px 0px 10px"
  }

  return(
    <div className="suggestion-box">
    <div id="test" style={imageStyle}></div>
    <div className="text">
    <h5>{suggestion.name}</h5>
    <h3>Description: {suggestion.description}</h3>
    <h3>Rating: {suggestion.rating}</h3>
    </div>
    </div>
  )

}


export default LocationSuggestion;
