import React from 'react';
import UserProfile from './UserProfile'
import Routes from './Routes'
import Favourites from './Favourites'
import './SideBar.css'

const SideBar = ({view, setView, user, createNewRoute}) => {

  const getView = () => {
    if(view.profile) { return <UserProfile user={user}/> }
    if(view.routes) { return <Routes routes={user.routes} createNewRoute={createNewRoute}/> }
    if(view.favourites) { return <Favourites favourites={user.favourites}/> }
  }

  const handleSetView = (event) => {
    setView(event.target.value)
  }

  return(
    <div id="side-bar">
      <h1>I AM LOGO!</h1>
      <button onClick={handleSetView} value="profile">Profile</button>
      <button onClick={handleSetView} value="routes">Routes</button>
      <button onClick={handleSetView} value="favourites">Favourites</button>
      {getView()}
    </div>
  )

}

export default SideBar;
