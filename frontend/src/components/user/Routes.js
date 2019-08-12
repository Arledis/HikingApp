import React from 'react';
import './SideBar.css'

const Routes = ({routes, removeUserRoute}) => {

  const handleDeleteRoute = (route) => {
    console.log(route);
    // removeUserRoute(event.target.value)
  }

  const getRoutes = routes.map((route, index) => {
    return (
      <tr>
        <td>{ route.name }</td>
        <td><em>XXXX km</em></td>
        <td><input type="checkbox"/></td>
        <td><button onClick={() => handleDeleteRoute(route)}>Delete</button></td>
      </tr>
    )
  })

  return(
    <div id="routes" className="sidebar-component">
      <table id="route-table">
        <tr>
          <th>Name</th>
          <th>Distance</th>
          <th>Completed</th>
          <th>Admin</th>
        </tr>
      { getRoutes }
      </table>
    </div>
  )
}

export default Routes;
