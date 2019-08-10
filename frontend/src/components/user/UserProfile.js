import React from 'react';

const UserProfile = ({ user }) => {

  const getUserName = () => {
    if(user){
      return user.name
    }
  }

  return (
    <div id="user-profile">
      <h2>Welome back {getUserName()}!</h2>
    </div>
  )
}



export default UserProfile;
