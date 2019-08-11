import React from 'react';
import {Popup} from 'react-leaflet';

const LocationPopup = ({location, saveFavourite, user}) => {

  const handleSaveLocation = (location) => {
    saveFavourite(location);
  }

  // const checkFavourites = () => {
  //   console.log(user.favourites.includes(location));
  //   return user.favourites.includes(location);
  // }

    const displayButton = () => {
        return <button onClick={() => handleSaveLocation(location)} value={location}>Add To Favourites</button>
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
