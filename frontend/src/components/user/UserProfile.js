import React from 'react';
import LocationSuggestion from './LocationSuggestion'

const UserProfile = ({ user, locations}) => {

  const getUserName = () => {
    if(user){
      return user.name
    }
  }

  const getLocations = () => {
    if(locations.accommodation) {
      return (
        <>
        <LocationSuggestion suggestion={locations.accommodation[Math.floor(Math.random()*locations.accommodation.length)]}/>
        <LocationSuggestion suggestion={locations.pointsOfInterest[Math.floor(Math.random()*locations.pointsOfInterest.length)]}/>
        <LocationSuggestion suggestion={locations.services[Math.floor(Math.random()*locations.services.length)]}/>
       </>
     )
   }
 }


  return (
    <div id="user-profile">
      <h2>Welome back {getUserName()}!</h2>
      <h2>Have a look to this suggestions!</h2>
      {getLocations()}
    </div>
  )
}



export default UserProfile;
