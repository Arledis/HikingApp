import React from 'react';
import UserProfile from './UserProfile.js';


const UserProfileList = (props) => {
const userProfiles = props.userProfiles.map((userProfile, index) => {

	return (
		<li key={index} className="component-item">
		<div className="component">
		<UserProfile userProfile={userProfile}/>
		</div>
		</li>
	)
})

return (
	<ul className="component-list">
	{userProfiles}
	</ul>
)
}
 export default UserProfileList;
