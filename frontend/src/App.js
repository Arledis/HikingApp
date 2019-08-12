import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import AdminContainer from './containers/AdminContainer';
import Request from './helpers/request';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      users: []
    }
    this.updateUsersFavourites = this.updateUsersFavourites.bind(this);
    this.removeUserFavourites = this.removeUserFavourites.bind(this);
    this.updateUserRoutes = this.updateUserRoutes.bind(this)
    this.removeUserRoute = this.removeUserRoute.bind(this)

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

  updateUserRoutes(route) {
    let newState = Object.assign({}, this.state)
    newState.users[0].routes.push(route)
    this.setState(newState)
    const request = new Request()
    request.post('api/routes/1', {routes: this.state.users[0].routes})
  }

  removeUserRoute(id){
    console.log(id);
  }

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
          <Route exact path="/map" render={() =>{
            return <MainContainer user={ this.state.users[0] } updateUsersFavourites={this.updateUsersFavourites}
            removeUserFavourites={this.removeUserFavourites} updateUserRoutes={this.updateUserRoutes} removeUserRoute={this.removeUserRoute}/>
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
