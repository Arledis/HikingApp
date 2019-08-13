import React from 'react';



const LocationForm = ({toggleModal, handleLocationPost, type}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const location = {
      "name": event.target.name.value,
      "description": event.target.description.value,
      "type": event.target.type.value,
      "rating": event.target.rating.value
    }
    handleLocationPost(location, event.target.type.value);
  }

// const accomodationOptions = ["HOTEL", "BANDB", "CAMPSITE", "HOSTEL"]
// const poiOptions = ["VIEWPOINT", "MOUNTAIN", "TOWN", "NATURE_RESERVE",
// "HISTORIC_SIGHT", "VILLAGE"]
// const serviceOptions = ["PUB", "GROCERY_SHOP", "BAKERY", "POST_OFFICE", "TOILETS"]


// const changeDropdown = (event) => {
//   if(event.target.value === "accommodation") {
//     return(
//
//     )
//   }
// }


// <select name="type" id="first-choice">
//   <option type="text" selected value="accomodations">Accommodation</option>
//   <option value="hotel">HOTEL</option>
//   <option value="bandb">BANDB</option>
//   <option value="campsite">CAMPSITE</option>
//   <option value="hostel">HOSTEL</option>
//   </select>
//   <select name="type" id="second-choice">
//   <option type="text" selected value="pointOfInterests">Points of Interest</option>
//   <option value="viewpoint">VIEWPOINT</option>
//   <option value="mountain">MOUNTAIN</option>
//   <option value="town">TOWN</option>
//   <option value="nature reserve">NATURE_RESERVE</option>
//   <option value="historic sight">HISTORIC_SIGHT</option>
//   <option value="village">VILLAGE</option>
//   </select>
//   <select name="type" id="third-choice">
//   <option type="text" selected value="services">Services</option>
//   <option value="pub">PUB</option>
//   <option value="grocery shop">GROCERY_SHOP</option>
//   <option value="bakery">BAKERY</option>
//   <option value="post office">POST_OFFICE</option>
//   <option value="toilets">TOILETS</option>
// </select>

const closeModal = () => {
  toggleModal()
}

  return(
    <>
    <h1>Create new {type} </h1>
    <div className="location-form">

    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Location Name" name="name"/>
      <input type="text" placeholder="Description" name="description"/>
      <div>

      </div>
      <input type="text" placeholder="Rating" name="rating"/>
      <button type="submit">Save</button>
      </form>
      <button onClick={closeModal}>Close Window</button>
    </div>
    </>
  )

}

export default LocationForm;
