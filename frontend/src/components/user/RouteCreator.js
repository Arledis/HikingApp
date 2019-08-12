import React from 'react'
import {GeoJSON} from 'react-leaflet'
import './RouteCreator.css'
import './SideBar.css'
import RouteDisplay from './RouteDisplay'
import ElevationChart from './ElevationChart'
import turfLength from '@turf/length'


const RouteCreator = ({setStart, setEnd, newRoute, trail, setRouteGeoJson, createNewRoute}) => {

  const calculateRouteLength = () => {
    let newLineString = createNewLineString()
    let length = turfLength(newLineString)
    return length
  }

  const prettyLength = () => (
    (newRoute.start && newRoute.end) ? `${calculateRouteLength().toFixed(2)}km` : "0km"
  )

  const createNewLineString = () => {
    let fullTrail = trail.features[0].geometry.coordinates
    let startPoint = [newRoute.start[1], newRoute.start[0]]
    let startIndex = fullTrail.findIndex(coord => {
      return (coord[0] === startPoint[0] && coord[1] === startPoint[1])
    })
    let endPoint = [newRoute.end[1], newRoute.end[0]]
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

  const displayRoute= () => {
    let data = createNewLineString()
    console.log("i'm doing stuff");
    setRouteGeoJson(<GeoJSON data={data} key={"myRoute"} color={"red"} weight={5}/>)
  }

  const handleSaveRoute = () => {
    let route = {
      name: "I am a test route",
      start: [1, 1],
      end: [2, 2],
      user: "http://localhost:8080/api/users/1"
    }
    createNewRoute(route)
  }

  return(
    <div className="sidebar-component" id="route-creator">
      <form>
      <div className="form-section">
        <label htmlFor="start">Start</label>
        <input type="text" onClick={setStart} value={newRoute.start}></input>
      </div>
      <div className="form-section">
        <label htmlFor="end">End</label>
        <input type="text" onClick={setEnd} value={newRoute.end}></input>
      </div>
      </form>
      <h2>Length: <span id="length-display">{prettyLength()}</span></h2>
      <h2>Total Elevation: *Something difficult here!*</h2>
      <h2>Estimated Time: *Something difficult here!*</h2>
      <ElevationChart />
      <RouteDisplay />
      <h2>Length: {prettyLength()}</h2>
      <button onClick={handleSaveRoute}>Save Route</button>
    </div>
  )


}

export default RouteCreator;
