import React, {Component} from 'react';
import Request from '../../helpers/request';
import UserProfileForm from '../../components/user/UserProfileForm'

class UserProfileFormContainer extends Component{
  constructor(props){
    super(props);
    this.handleUserProfilePost =
    this.handleUserProfilePost.bind(this);
  }

  handleUserProfilePost(userProfile){
    const request =  new Request();
    request.post('/api/userProfiles', userProfile).then(() => {
      window.location = '/userProfiles'
    })
  }
  render(){

   return <UserProfileForm favourites ={this.props.favourites}
    handleUserProfilePost={this.handleUserProfilePost}/>

  }
}

export default UserProfileFormContainer;
