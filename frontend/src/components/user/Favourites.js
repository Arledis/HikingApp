import React from 'react';

const Favourites = ({ favourites }) => {

  const getFavourites = favourites.map((favourite, index) => {
    return <li key={index} value={favourite}>Name: { favourite.name }</li>
  })


  return (
    <div>
      <h1>{ getFavourites }</h1>
    </div>
  )

}

export default Favourites;
