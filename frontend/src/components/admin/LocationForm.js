import React from 'react';



const LocationForm = ({toggleModal, handleLocationPost, type}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const location = {
      "name": event.target.name.value,
      "rating": event.target.rating.value,
      "description": event.target.description.value,
      "coordinates": [57, -4],
      "pictureUrl": event.target.pictureUrl.value,
      "type": event.target.type.value
    }
    console.log(location);
    handleLocationPost(location, type);
  }

  const displaySelect = (type) => {

    const options = {
      accommodations: ["HOTEL", "BANDB", "CAMPSITE", "HOSTEL"],
      pointOfInterests: ["VIEWPOINT", "MOUNTAIN", "TOWN", "NATURE_RESERVE",
      "HISTORIC_SIGHT", "VILLAGE"],
      services: ["PUB", "GROCERY_SHOP", "BAKERY", "POST_OFFICE", "TOILETS"]
    }

    let chosenOption = options[type]

    return(
      <select name="type" required>
      <option disabled selected value="select-default">Select a type...</option>
        {chosenOption.map(option => {
          return(
            <option key={option}>{option}</option>
          )
        })}
      </select>
    )
  }

  const closeModal = () => {
    toggleModal()
  }

  return(
    <>
    <h1>Create new location</h1>
    <div className="location-form">

    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Location Name" name="name" required/>
    <input type="text" placeholder="Description" name="description" required/>
    <input type="number" min="1" max="5" placeholder="Rating" name="rating" required/>
    <input type="text" placeholder="Image URL" name="pictureUrl" required/>

    {displaySelect(type)}

    <button type="submit">Save</button>
    </form>
    <button onClick={closeModal}>Close Window</button>
    </div>
    </>
  )

}

export default LocationForm;
