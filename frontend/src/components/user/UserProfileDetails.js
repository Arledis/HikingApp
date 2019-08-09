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

  const route = props.userProfile.route.map((routes, index) => {
    return <li key={index}>{routes.name}</li>
  })

  const editUrl = "/userProfiles/edit/"+props.userProfile.id

  return (
    <div className="component">
    <UserProfile userProfile={props.userProfile}/>
    <p>Route:</p>
    <ul>
    {route}
    </ul>
    <button onClick={handleDelete}>Delete
    {props.userProfile.firstName}</button>
    <Link to={editUrl}>
    <button type="button">Edit {props.userProfile.name}
    </button>
    </Link>
    </div>

  )
}
export default UserProfileDetails;
