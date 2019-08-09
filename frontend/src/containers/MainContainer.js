import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../Header.js';
import UserProfileList from '../components/user/UserProfileList';
import UserProfileDetails from '../components/user/UserProfileDetails';
import Request from '../helpers/request';



class MainContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userProfile:[],
      route:[],
      admin:[]
    }
    componentDidMount(){
      const request = new Request()
      const promise1 = request.get('/api/userProfile');
      const promise2 = request.get('/api/route');
      const promise3 = request.get('/api/admin');
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
