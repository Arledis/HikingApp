import React from 'react';
import UserProfile from './UserProfile'
import Routes from './Routes'
import Favourites from './Favourites'
import RouteCreator from './RouteCreator'
import './SideBar.css'


const SideBar = ({view, setView, user, createNewRoute, newRoute, currentCoords, setStart, setEnd, trail, setRouteGeoJson, removeUserFavourites, updateUserRoutes}) => {


  const getView = () => {
    if(view.profile) {
      return(
        <UserProfile
          user={user}/>
    )}
    if(view.routes) {
      return(
        <Routes
          routes={user.routes} />
    )}
    if(view.favourites) {
      return(
        <Favourites
        favourites={user.favourites}
        removeUserFavourites={removeUserFavourites}/>
    )}
    if(view.newRoute) {
      return(
        <RouteCreator
        newRoute={newRoute}
        currentCoords={currentCoords}
        setStart={setStart}
        setEnd={setEnd}
        trail={trail}
        setRouteGeoJson={setRouteGeoJson}
        updateUserRoutes={updateUserRoutes}/>
    )}
  }

  const handleSetView = (event) => {
    setView(event.target.value)
  }

  const createRoute = (event) => {
    createNewRoute()
    setView(event.target.value)
  }

  return(
    <div id="side-bar">
      <h1 id="header">HikeBuddy</h1>
      <div id="sidebar-nav">
        <button className="sidebar-button" onClick={handleSetView} value="profile">Profile</button>
        <button className="sidebar-button" onClick={handleSetView} value="routes">Routes</button>
        <button className="sidebar-button" onClick={createRoute} value="newRoute">New Route</button>
        <button className="sidebar-button" onClick={handleSetView} value="favourites">Favourites</button>
      </div>
      {getView()}
    </div>
  )

}

export default SideBar;
