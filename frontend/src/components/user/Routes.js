import React from 'react';

const Routes = ({ routes }) => {

  const getRoutes = routes.map((route, index) => {
    return <li key={index} value={route}>Route Name: { route.name }</li>
  })


  return (
    <div>
      <h1>{ getRoutes }</h1>
    </div>
  )

}

export default Routes;
