import React, {Component} from 'react'
import './RouteCreator.css'
import './SideBar.css'

class RouteCreator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start: null,
      end: null
    }
    this.handleSaveRoute = this.handleSaveRoute.bind(this)
  }

  handleSaveRoute() {
console.log("saving");
  }

  render() {
    return(
      <div className="sidebar-component">
      <h2>Start: {this.props.currentCoords}</h2>
      <h2>End: </h2>
      <hr />
      <h2>CHART HERE</h2>
      <hr />
      <button onClick={this.handleSaveRoute}>Save Route</button>
      </div>
    )
  }


}

export default RouteCreator;
