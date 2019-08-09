import React, {Fragment}  from 'react';
import {Link} from 'react-router-dom'

const UserProfile = ({userProfile}) => {
  if(!userProfile){
    return "Loading..."
  }

const url= "/userProfiles/" +userProfile.id;

  return (
    <Fragment>
    <Link to={url} className="name">{userProfile.name}</Link>

    <p>favourites: {userProfile.location.name}</p>
    <p>Route: {userProfile.routes.name}</p>
    </Fragment>
  )
}

export default UserProfile;
