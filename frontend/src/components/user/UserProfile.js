import React, {Fragment}  from 'react';
import {Link} from 'react-router-dom'

const UserProfile = ({userProfile}) => {
  if(!userProfile){
    return "Loading..."
  }

const url= "/userProfiles/" +userProfile.id;

  return (
    <Fragment>
    <Link to={url} className="name">{userProfile.firstName}
     {userProfile.lastName}</Link>

    <p>favourites: {userProfile.favourites}</p>
    <p>Routes: {userProfile.route.name}</p>
    </Fragment>
  )
}

export default UserProfile;
