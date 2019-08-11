import React from 'react';

const Routes = ({createNewRoute, routes}) => {

  const createRoute = () => createNewRoute()

  const getRoutes = routes.map((route, index) => {
    return <li key={index} value={route}>Route Name: { route.name }</li>
  })

  return(
    <>
    <h2> I am route!</h2>
    <button onClick={createRoute}>Create New Route</button>
    <h1>{ getRoutes }</h1>
    </>
  )
}

export default Routes;
