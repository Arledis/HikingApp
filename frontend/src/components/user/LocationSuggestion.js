import React from 'react'
import './LocationSuggestion.css'

const LocationSuggestion = ({suggestion}) => {

  const imageStyle = {
    width: "10vw",
    height: "100%",
    backgroundImage: `url(${suggestion.pictureURL})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition:"center",
    borderRadius: "8px 0px 0px 8px"
  }

  return(
    <div className="suggestion-box">
    <div id="test" style={imageStyle}></div>
    <div className="text">
    <h5>{suggestion.name}</h5>
    <h3>{suggestion.description}</h3>
    <h3>Rating: {suggestion.rating}</h3>
    </div>
    </div>
  )

}


export default LocationSuggestion;
