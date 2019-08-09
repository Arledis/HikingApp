import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../Header.js';
import UserProfileList from '../components/user/UserProfileList';
import UserProfileDetails from '../components/user/UserProfileDetails';
import Request from '../helpers/request';
import UserProfileFormContainer from './users/UserProfileFormContainer';
import UserProfileEditFormContainer from './users/UserProfileEditFormContainer'



class MainContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userProfile:[],
      favourites:[],
      route:[]
    }
    componentDidMount(){
      const request = new Request()
      const promise1 = request.get('/api/userProfile');
      const promise2 = request.get('/api/favourites');
      const promise3 = request.get('/api/route');
      const promises = [promise1, promise2, promise3]

      Promise.all(promise).then((data) => {
        this.setState({
          userProfile: data[0]._embedded.userProfiles,
          routes: data[1]._embedded.routes,
          admins: data[2]._embedded.admins
        })
      })
    }
    findLoginById(id){
    const login = this.state.userProfiles.find((login) => {
    return login.id === parseInt(id)
    })
    return login;
    }
    handleDelete(id){
      const request = new Request()
      const url = '/api/userProfiles' +id;
      request.delete(url).then(() =>{
        window.location = '/userProfiles';
      });
    }
  }
  render(){
    return (
      <div>
      <Router>
      <React.Fragment>
      <Header/>
      <Switch>
      <Route exact path="/userProfiles"
      render={(props) => {
        return <UserProfileList
        userProfiles={this.state.userProfiles}/>
      }}/>

      <Route exact path="/userProfile/new" render={(props) => {
        return <UserProfileFormContainer favourites={this.state.favourites}/>
      }}/>

      <Route exact path="/userProfiles/edit/:id" render={(props) => {
        const id= props.match.params.id;
        const userProfile= this.findUserProfileById(id);
        return <UserProfileEditFormContainer userProfile={userProfile}
        favourites={this.state.favourites} route={this.state.route}/>
      }}/>

      <Route exact path="/userProfiles/:id" render={(props) => {
        const id = props.match.params.id;
        const userProfile = this.findUserProfileById(id);
        return <UserProfile userProfile={userProfile}
        onDelete=(this.handleDelete)/>
      }}/>

      </Swith>
      </React.Fragment>
      </Router>
      </div>
    )
  }
}

export default MainContainer;
