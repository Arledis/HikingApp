import React from 'react';
import {Popup} from 'react-leaflet';

const LocationPopup = ({location, saveFavourite, user}) => {

  const handleSaveLocation = (location) => {
    saveFavourite(location);
  }

  const locationCheck = () => {
    if(user) {
      let names = user.favourites.map(favourite => favourite.name)
      return names.includes(location.name)
    }
  }

  const displayButton = () => {
    const userHasFavourite = locationCheck()
    if(user && !userHasFavourite) {
    return <button onClick={() => handleSaveLocation(location)} value={location}>Add To Favourites</button>
}
  }





  return(
    <Popup>
    <h1>{location.name}</h1>
    <h2>Rating: {location.rating}</h2>
    <h2>Details: {location.description}</h2>
    {displayButton()}
    </Popup>
  )
}

export default LocationPopup;