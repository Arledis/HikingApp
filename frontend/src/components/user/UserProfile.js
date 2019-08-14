import React from 'react';
import LocationSuggestion from './LocationSuggestion'
import ProgressBar from '../general/ProgressBar'
import './UserProfile.css'

const UserProfile = ({user, locations}) => {

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

 const getDistanceWalked = () => { if(user) { return user.distanceWalked } }


  return (
    <div id="user-profile">

        <div id="progress-bar-container">
        <h2>Welome back {getUserName()}!</h2>
          <ProgressBar progress={getDistanceWalked()} total={864.00} />
        </div>
        <hr/>
        <div id="view-suggestions">
      <h2 id="suggest-text">Why not visit these locations on your next trip?</h2>

      {getLocations()}
      </div>
    </div>
  )
}



export default UserProfile;
