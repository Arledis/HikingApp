import React from 'react';

const Favourites = ({ favourites }) => {
  
  const getFavourites = favourites.map((favourite, index) => {
    return(
      <tr key={index} value={favourite}>
        <td>{ favourite.name }</td>
        <td>{ favourite.description }</td>
        <td>{ favourite.type }</td>
        <td>{ favourite.rating }</td>
        <td><button>Remove</button></td>
      </tr>
    )
  })


  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Type</th>
        <th>Rating</th>
        <th>Admin</th>
      </tr>
      { getFavourites }
    </table>
  )

}

export default Favourites;
