import React from 'react'

const LocationRow = ({location, deleteLocation}) => {

const handleDelete = (event) => {
  deleteLocation(event.target.value)
}

  return (
    <tr>
      <td>{ location.name }</td>
      <td>{ location.description }</td>
      <td>{ location.type }</td>
      <td>{ location.rating }</td>
      <td><button onClick={handleDelete} value={location}>Delete</button></td>
    </tr>
  )
}

export default LocationRow;
