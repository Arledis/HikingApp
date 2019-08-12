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
    this.createNewRoute = this.createNewRoute.bind(this)
=======
    this.removeUserFavourites = this.removeUserFavourites.bind(this);
    // this.updateUserRoutes = this.updateUserRoutes.bind(this)
>>>>>>> ec9cdcf71bc3a84f2181be40b4b2ca82e364ae68
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
<<<<<<< HEAD
  }

  createNewRoute(route) {
    let newState = Object.assign({}, this.state)
    newState.users[0].routes.push(route)
    this.setState(newState)
    const request = new Request()
    request.post('api/routes/', route)
  }
=======
    }
>>>>>>> ec9cdcf71bc3a84f2181be40b4b2ca82e364ae68

    removeUserFavourites(location){
      let newState = Object.assign({}, this.state)
      let index = newState.users[0].favourites.indexOf(location)
      newState.users[0].favourites.splice(index, 1)
      this.setState(newState)
      const request = new Request();
      request.patch('/api/users/1', {favourites: this.state.users[0].favourites} )
    }

 render() {
   return (
     <div>
     <Router>
      <Switch>
<<<<<<< HEAD
      <Route exact path="/map" render={() =>{
        return <MainContainer user={ this.state.users[0] } updateUsersFavourites={this.updateUsersFavourites}
        createNewRoute={this.createNewRoute}/>
      }} />
      <Route exact path="/admin" render={() =>{
        return <AdminContainer />
      }} />
      <>
      <Link to="/map">Map</Link>
      <Link to="/admin">Admin</Link>
      </>
=======
          <Route exact path="/map" render={() =>{
            return <MainContainer user={ this.state.users[0] } updateUsersFavourites={this.updateUsersFavourites}
            removeUserFavourites={this.removeUserFavourites} updateUserRoutes={this.updateUserRoutes}/>

          }} />
          <Route exact path="/admin" render={() =>{
            return <AdminContainer />
          }} />
            <>
            <Link to="/map">Map</Link>
            <Link to="/admin">Admin</Link>
            </>
>>>>>>> ec9cdcf71bc3a84f2181be40b4b2ca82e364ae68
      </Switch>
     </Router>

     </div>
   );
 }
}

export default App;
