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
    }
  }
  this.setView = this.setView.bind(this)
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

  render(){
    return(
      <div id="main-container">
        <SideBar view={this.state.sidebarView} setView={this.setView}/>
        <MapBox />
      </div>
    )
  }

}



export default MainContainer;
