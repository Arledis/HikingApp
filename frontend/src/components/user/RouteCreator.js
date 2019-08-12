import React, {Component} from 'react'
import {GeoJSON} from 'react-leaflet'
import './RouteCreator.css'
import './SideBar.css'
import RouteDisplay from './RouteDisplay'
import ElevationChart from './ElevationChart'
import turfLength from '@turf/length'


class RouteCreator extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.calculateRouteLength = this.calculateRouteLength.bind(this)
    this.prettyLength = this.prettyLength.bind(this)
    this.createNewLineString = this.createNewLineString.bind(this)
    this.displayRoute = this.displayRoute.bind(this)
    this.handleSaveRoute = this.handleSaveRoute.bind(this)
  }

  calculateRouteLength() {
    let newLineString = this.createNewLineString()
    let length = turfLength(newLineString)
    return length
  }

  prettyLength() {
     return (this.props.newRoute.start && this.props.newRoute.end) ? `${this.calculateRouteLength().toFixed(2)}km` : "0km"
  }

  createNewLineString() {
    let fullTrail = this.props.trail.features[0].geometry.coordinates
    let startPoint = [this.props.newRoute.start[1], this.props.newRoute.start[0]]
    let startIndex = fullTrail.findIndex(coord => {
      return (coord[0] === startPoint[0] && coord[1] === startPoint[1])
    })
    let endPoint = [this.props.newRoute.end[1], this.props.newRoute.end[0]]
    let endIndex = fullTrail.findIndex(coord => {
      return (coord[0] === endPoint[0] && coord[1] === endPoint[1])
    })
    let coordinates = fullTrail.slice(startIndex, endIndex)
    let geojson = {
      type: "LineString",
      coordinates: coordinates
    }
    return geojson
  }

  displayRoute() {
    let data = this.createNewLineString()
    console.log("i'm doing stuff");
    this.setRouteGeoJson(<GeoJSON data={data} key={"myRoute"} color={"red"} weight={5}/>)
  }

  handleSaveRoute() {
    let length = this.calculateRouteLength()
    let geojson = this.createNewLineString()
    let route = {
      name: "I am a test route",
      completed: false,
      geoJsonData: geojson.coordinates,
      length: length,
      user: "http://localhost:8080/api/users/1"
    }
    this.props.createNewRoute(route)
  }

  render() {
  return(
    <div className="sidebar-component" id="route-creator">
      <form>
      <div className="form-section">
        <label htmlFor="start">Start</label>
        <input type="text" onClick={this.props.setStart} value={this.props.newRoute.start}></input>
      </div>
      <div className="form-section">
        <label htmlFor="end">End</label>
        <input type="text" onClick={this.props.setEnd} value={this.props.newRoute.end}></input>
      </div>
      </form>
      <h2>Length: <span id="length-display">{this.prettyLength()}</span></h2>
      <h2>Total Elevation: *Something difficult here!*</h2>
      <h2>Estimated Time: *Something difficult here!*</h2>
      <ElevationChart />
      <RouteDisplay />
      <h2>Length: {this.prettyLength()}</h2>
      <button onClick={this.handleSaveRoute}>Save Route</button>
    </div>
  )
}

}


export default RouteCreator;
