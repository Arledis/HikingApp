import React from 'react'
import './RouteCreator.css'
import './SideBar.css'

const RouteCreator = ({setStart, setEnd, newRoute, trail}) => {

  const calculateRouteLength = () => {
    let newLineString = createNewLineString()
    console.log(newLineString)
    // getLength(length)
  }

  const createNewLineString = () => {
    let length;
    let lineString = trail.features[0].geometry.coordinates
    let start = [newRoute.start[1], newRoute.start[0]]
    let startIndex = lineString.findIndex(coord => {
      return (coord[0] === start[0] && coord[1] === start[1])
    })
    let end = [newRoute.end[1], newRoute.end[0]]
    let endIndex = lineString.findIndex(coord => {
      return (coord[0] === end[0] && coord[1] === end[1])
    })
    let newLineString = lineString.slice(startIndex, endIndex)
    return newLineString
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
      <button onClick={calculateRouteLength}>Save Route</button>
    </div>
  )


}

export default RouteCreator;
