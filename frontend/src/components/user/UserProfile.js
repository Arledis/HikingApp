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
      console.log(locations)
      return (
        <>
<LocationSuggestion suggestion={locations.accommodation[0]}/>
<LocationSuggestion suggestion={locations.pointsOfInterest[0]}/>
<LocationSuggestion suggestion={locations.services[0]}/>
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
