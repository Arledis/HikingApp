import React, {Component} from 'react';
import MapBox from '../components/user/MapBox';
import SideBar from '../components/user/SideBar';
import "./MainContainer.css";


class MainContainer extends Component{
constructor(props) {
  super(props)
  this.state = {
    sidebarView: {
      profile: true,
      routes: false,
      favourite: false
    },
    newRoute: {
      create: false,
      start: null,
      end: null
    },
    currentCoords: null
  }
  this.setView = this.setView.bind(this)
  this.createNewRoute = this.createNewRoute.bind(this)
  this.getCoords = this.getCoords.bind(this)
}

  setView(view) {
    const allFalse = {
        profile: false,
        routes: false,
        favourite: false
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

  getCoords(coords) {
    let newState = Object.assign({}, this.state)
    newState.currentCoords = coords
    this.setState(newState)
  }

  render(){
    return(
      <div id="main-container">
        <SideBar
          view={this.state.sidebarView}
          setView={this.setView}
          user={this.props.user}
          createNewRoute={this.createNewRoute}/>
        <MapBox
          getCoords={this.getCoords}/>
      </div>
    )
  }

}



export default MainContainer;
