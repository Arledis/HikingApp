import React from 'react'
import './RouteCreator.css'
import './SideBar.css'
import turfLength from '@turf/length'


const RouteCreator = ({setStart, setEnd, newRoute, trail}) => {

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

  return(
    <div className="sidebar-component">
      <form>
        <label htmlFor="start">Start</label>
        <input type="text" onClick={setStart} value={newRoute.start}></input>
        <label htmlFor="end">End</label>
        <input type="text" onClick={setEnd} value={newRoute.end}></input>
      </form>
      <hr />
      <h2>CHART HERE</h2>
      <hr />
      <h2>Length: {prettyLength()}</h2>
      <button onClick={calculateRouteLength}>Save Route</button>
    </div>
  )


}

export default RouteCreator;
