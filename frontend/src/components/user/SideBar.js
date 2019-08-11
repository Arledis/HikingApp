import React from 'react';
import UserProfile from './UserProfile'
import Routes from './Routes'
import './SideBar.css'

const SideBar = ({view, setView, user, createNewRoute}) => {

  const getView = () => {
    if(view.profile) { return <UserProfile /> }
    if(view.routes) { return <Routes createNewRoute={createNewRoute}/> }
    if(view.favourites) { return <h2>I am favourites</h2> }
  }

  const handleSetView = (event) => {
    setView(event.target.value)
  }

  const getUserName = () => {
    if(user){
      return user.name
    }
  }

  return(
    <div id="side-bar">
      <h1>I AM LOGO!</h1>
      <h2> Hello user { getUserName()} </h2>
      <button onClick={handleSetView} value="profile">Profile</button>
      <button onClick={handleSetView} value="routes">Routes</button>
      <button onClick={handleSetView} value="favourites">Favourites</button>
      {getView()}
    </div>
  )

}

export default SideBar;
