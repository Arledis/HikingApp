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
    this.createNewRoute = this.createNewRoute.bind(this)
    this.removeUserFavourites = this.removeUserFavourites.bind(this);
    this.deleteRoute = this.deleteRoute.bind(this)
    this.updateRouteCompletion = this.updateRouteCompletion.bind(this)
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

  updateRouteCompletion(route) {
    let newState = Object.assign({}, this.state)
    let index = newState.users[0].routes.indexOf(route)
    newState.users[0].routes[index].completed = !route.completed
    this.setState(newState)
    let request = new Request()
    let url = `/api/routes/${route.id}`;
    request.patch(url, {completed: (!route.completed)})
  }

  deleteRoute(route) {
    let request = new Request()
    let url = `/api/routes/${route.id}`;
    let newState = Object.assign({}, this.state)
    let index = newState.users[0].routes.indexOf(route)
    newState.users[0].routes.splice(index, 1)
    this.setState(newState)
    request.delete(url)
  }

  updateUsersFavourites(location){
    let newState = Object.assign({}, this.state)
    newState.users[0].favourites.push(location)
    this.setState(newState)
    const request = new Request();
    request.patch('/api/users/1', {favourites: this.state.users[0].favourites} )
  }

  createNewRoute(route, event) {
    event.preventDefault()
    let newState = Object.assign({}, this.state)
    newState.users[0].routes.push(route)
    this.setState(newState)
    console.log(route);
    const request = new Request()
    request.post('api/routes/', route)
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
           <Route exact path="/" render={ () => {
            return <HomePage />
          }} />
               <Route exact path="/map" render={() =>{
                 return <MainContainer
                 user={this.state.users[0]} updateUsersFavourites={this.updateUsersFavourites}
                 removeUserFavourites={this.removeUserFavourites} updateUserRoutes={this.updateUserRoutes}
                 createNewRoute={this.createNewRoute}
                 deleteRoute={this.deleteRoute}
                 updateRouteCompletion={this.updateRouteCompletion}/>
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
