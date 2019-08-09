import React, {Component} from 'react';
import UserProfileEditForm from '../../components/user/UserProfileEditForm';
import Request from '../../helpers/request.js'

class UserProfileEditFormContainer extends Component{
  constructor(props){
    super(props);
    this.handleUserProfileUpdate = this.handleUserProfileUpdate.bind(this)
  }
  handleUserProfileUpdate(userProfile){
    const request = new Request();
    request.patch('/api/userProfiles' + this.props.userProfile.id, userProfile).then(() =>{
      window.location = '/userProfiles/' + this.props.userProfile.id
    })
  }
  render(){
    return (
    <UserProfileEditForm
    favourites={this.props.favourites}
    userProfile={this.props.userProfile}
    route={this.props.route}
    handleUserProfileUpdate={this.handleUserProfileUpdate}/>
  )
  }

}
export default UserProfileEditFormContainer;
