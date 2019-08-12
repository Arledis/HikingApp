import React, {Component} from 'react';
import MapBox from '../components/user/MapBox';
import "./MainContainer.css";


class MainContainer extends Component{
constructor(props) {
  super(props)
  this.state = {
    sidebarView: {
      profile: true,
      routes: false,
      favourite: false,
      newRoute: false
    },
    newRoute: {
      create: false,
      setStart: false,
      setEnd: false,
      start: "",
      end: ""
    },
    currentCoords: null
  }
  this.setView = this.setView.bind(this)
  this.createNewRoute = this.createNewRoute.bind(this)
  this.getCoords = this.getCoords.bind(this)
  this.updateUser = this.updateUser.bind(this)
  this.setStart = this.setStart.bind(this)
  this.setEnd = this.setEnd.bind(this)
}

  setView(view) {
    const allFalse = {
        profile: false,
        routes: false,
        favourite: false,
        newRoute: false
    }
    let newState = Object.assign({}, this.state)
    newState.sidebarView = allFalse
    newState.sidebarView[`${view}`] = true;
    this.setState(newState)
  }

  createNewRoute() {
    let newState = Object.assign({} , this.state)
    newState.newRoute.create = true
    this.setState(newState)
  }

  getCoords(coords, point) {
    if(this.state.newRoute.create) {
      let newState = Object.assign({}, this.state)
      newState.newRoute[point] = coords
      this.setState(newState)
    }
  }

  updateUser(location){
    this.props.updateUsersFavourites(location)
  }

  setStart() {
    let newState = Object.assign({}, this.state)
    newState.newRoute.setStart = true
    newState.newRoute.setEnd = false
    this.setState(newState)
  }

  setEnd() {
    let newState = Object.assign({}, this.state)
    newState.newRoute.setStart = false
    newState.newRoute.setEnd = true
    this.setState(newState)
  }

  render(){
    return(
      <div id="main-container">
        <MapBox
          getCoords={this.getCoords}
          view={this.state.sidebarView}
          setView={this.setView}
          user={this.props.user}
          createNewRoute={this.createNewRoute}
          newRoute={this.state.newRoute}
          currentCoords={this.state.currentCoords}
          updateUser={this.updateUser}
          setStart={this.setStart}
          setEnd={this.setEnd}
          removeUserFavourites={this.props.removeUserFavourites}/>
      </div>
    )
  }

}



export default MainContainer;
