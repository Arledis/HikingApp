import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import AdminContainer from './containers/AdminContainer';
import Request from './helpers/request';
import HomePage from './components/home/HomePage.js';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      users: []
    }
    this.updateUsersFavourites = this.updateUsersFavourites.bind(this);
<<<<<<< HEAD
=======
    this.removeUserFavourites = this.removeUserFavourites.bind(this);
    this.updateUserRoutes = this.updateUserRoutes.bind(this)

>>>>>>> 1ff31206d7855ece7c2b26776c787977fd9f0c12
  }

  componentDidMount(){
    const request = new Request()
    request.get('api/users')
    .then((data) => {
      this.setState({
        users: data._embedded.users
      })
    })
  }

  updateUsersFavourites(location){
    let newState = Object.assign({}, this.state)
    newState.users[0].favourites.push(location)
    this.setState(newState)
    const request = new Request();
    request.patch('/api/users/1', {favourites: this.state.users[0].favourites} )
    }


<<<<<<< HEAD
 render() {
   return (
     <div>
=======
    removeUserFavourites(location){
      let newState = Object.assign({}, this.state)
      let index = newState.users[0].favourites.indexOf(location)
      newState.users[0].favourites.splice(index, 1)
      this.setState(newState)
      const request = new Request();
      request.patch('/api/users/1', {favourites: this.state.users[0].favourites} )
    }

>>>>>>> 1ff31206d7855ece7c2b26776c787977fd9f0c12

     <Router>
      <Switch>
<<<<<<< HEAD
      <Route exact path="/" render={ () => {
        return <HomePage />
      }} />

          <Route exact path="/map" render={() =>{
            return <MainContainer user={ this.state.users[0] } updateUsersFavourites={this.updateUsersFavourites}/>
=======
          <Route exact path="/map" render={() =>{
            return <MainContainer user={ this.state.users[0] } updateUsersFavourites={this.updateUsersFavourites}
            removeUserFavourites={this.removeUserFavourites} updateUserRoutes={this.updateUserRoutes}/>
>>>>>>> 1ff31206d7855ece7c2b26776c787977fd9f0c12
          }} />
          <Route exact path="/admin" render={() =>{
            return <AdminContainer />
          }} />
            <>
            <Link to="/map">Map</Link>
            <Link to="/admin">Admin</Link>
            </>
      </Switch>
     </Router>

     </div>
   );
 }
}

export default App;
