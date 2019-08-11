import React from 'react';

const Routes = ({createNewRoute}) => {

  const createRoute = () => createNewRoute()

  return(
    <>
    <h2> I am route!</h2>
    <button onClick={createRoute}>Create New Route</button>
    </>
  )
}

export default Routes;
