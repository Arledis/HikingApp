import React, {Component} from 'react'
import {GeoJSON} from 'react-leaflet'
import './RouteCreator.css'
import './SideBar.css'
import RouteDisplay from './RouteDisplay'
import turfLength from '@turf/length'


class RouteCreator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      routeName: null
    }
    this.calculateRouteLength = this.calculateRouteLength.bind(this)
    this.prettyLength = this.prettyLength.bind(this)
    this.createNewLineString = this.createNewLineString.bind(this)
    this.displayRoute = this.displayRoute.bind(this)
    this.handleSaveRoute = this.handleSaveRoute.bind(this)
    this.enterRouteName = this.enterRouteName.bind(this)
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

  enterRouteName(event) {
    this.setState({routeName: event.target.value})
  }

  displayRoute(geoJsonData) {
    if(this.props.newRoute.start && this.props.newRoute.end) {
      this.props.setRouteGeoJson(<GeoJSON data={geoJsonData} key={"myRoute"} color={"red"} weight={5}/>)
    }
  }

  handleSaveRoute() {
    let length = this.calculateRouteLength()
    let geoJsonData = this.createNewLineString()
    this.displayRoute(geoJsonData)
    let route = {
      name: this.state.routeName,
      completed: false,
      geoJsonData: geoJsonData,
      length: length,
      user: "http://localhost:8080/api/users/1"
    }
    console.log(route)
    this.props.createNewRoute(route)
  }

  render() {
    return(
      <div className="sidebar-component" id="route-creator">
      <form>
      <input type="text" placeholder="Enter Route Name" onInput={this.enterRouteName} required id="name-input"/>
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
      <RouteDisplay />
      <button onClick={this.handleSaveRoute} id="save-button">Save Route</button>
      </div>
    )
  }

}


export default RouteCreator;
