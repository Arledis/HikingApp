import React from 'react'
import UserProfile from './UserProfile'
import {Link} from 'react-router-dom'


const UserProfileDetails = (props) => {

  if(!props.userProfile){
    return "Loading..."
  }

  const handleDelete = () => {
    props.onDelete(props.userProfile.id)
  }

  const routes = props.userProfile.routes.map((route, index) => {
    return <li key={index}>{route.location}</li>
  })

  const editUrl = "/userProfiles/edit/"+props.userProfile.id

  return (
    <div className="component">
    <UserProfile userProfile={props.userProfile}/>
    <p>Routes:</p>
    <ul>
    {routes}
    </ul>
    <button onClick={handleDelete}>Delete
    {props.userProfile.firstName}</button>
    <Link to={editUrl}>
    <button type="button">Edit {props.userProfile.firstName}
    </button>
    </Link>
    </div>

  )
}
export default UserProfileDetails;
