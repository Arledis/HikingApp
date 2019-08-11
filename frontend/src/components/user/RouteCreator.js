import React from 'react'
import './RouteCreator.css'
import './SideBar.css'

const RouteCreator = ({newRoute, currentCoords}) => {

return(
  <div className="sidebar-component">
    <h2>Start: {currentCoords}</h2>
    <h2>End: {newRoute.end}</h2>
    <hr />
  </div>
)

}

export default RouteCreator;
