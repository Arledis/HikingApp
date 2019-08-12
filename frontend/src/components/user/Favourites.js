import React from 'react';

const Favourites = ({ favourites, removeUserFavourites }) => {

  const convertFavouriteTypeNames = (favourite) => {
    if (favourite.type === "HOTEL"){
      return "Hotel"
    } else if (favourite.type === "BANDB"){
      return "B&B"
    } else if (favourite.type === "CAMPSITE"){
      return "campsite"
    } else if (favourite.type === "HOSTEL"){
      return "hostel"
    } else if (favourite.type === "VIEWPOINT"){
      return "Viewpoint"
    } else if (favourite.type === "MOUNTAIN"){
      return "Mountain"
    } else if (favourite.type === "TOWN"){
      return "Town"
    } else if (favourite.type === "NATURE_RESERVE"){
      return "Nature Reserve"
    } else if (favourite.type === "HISTORIC_SIGHT"){
      return "Historic Sight"
    } else if (favourite.type === "VILLAGE"){
      return "Village"
    } else if (favourite.type === "PUB"){
      return "pub"
    } else if (favourite.type === "GROCERY_SHOP"){
      return "Grocery Shop"
    } else if (favourite.type === "BAKERY"){
      return "Bakery"
    } else if (favourite.type === "POST_OFFICE"){
      return "Post Office"
    } else if (favourite.type === "TOILETS"){
      return "Toilets"
    } else {
      return null
    }
  }

  const handleDelete = (favourite) => {
    removeUserFavourites(favourite)
  }

  const getFavourites = favourites.map((favourite, index) => {
    return(
      <tr key={index} value={favourite}>
        <td>{ favourite.name }</td>
        <td>{ favourite.description }</td>
        <td>{convertFavouriteTypeNames({ favourite })}</td>
        <td>{ favourite.rating }</td>
        <td><button onClick={() => handleDelete(favourite)}>Remove</button></td>
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
