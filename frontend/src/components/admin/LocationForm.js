import React, {Component} from 'react';
import './LocationForm.css'
import { Map, TileLayer, Marker } from 'react-leaflet';

class LocationForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      position: [57, -5],
      currentPosition: [0, 0]
    }
    this.displaySelect = this.displaySelect.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.showCoords = this.showCoords.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    let coordinates = [this.state.currentPosition.lat, this.state.currentPosition.lng]
    const location = {
      "name": event.target.name.value,
      "rating": event.target.rating.value,
      "description": event.target.description.value,
      "coordinates": coordinates,
      "pictureUrl": event.target.pictureUrl.value,
      "type": event.target.type.value
    }
    this.props.handleLocationPost(location, this.props.type);
  }

  displaySelect(type) {

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

  closeModal() {
    this.props.toggleModal()
  }

  handleClick(event) {
    console.log(event.latlng)
    let newState = Object.assign({}, this.state)
    newState.currentPosition = event.latlng
    this.setState(newState)
  }

  showCoords() {
    return(
      <span>{this.state.currentPosition.lat}, {this.state.currentPosition.lng}</span>
    )
  }

render() {
  return(
    <>
    <h1>Create new location</h1>
    <div id="form-holder">

    <Map center={this.state.position} zoom={6} id="form-map-box"
    onClick={this.handleClick}>
    <TileLayer
    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png"
    />
    <Marker position={this.state.currentPosition} />
    </Map>

    <form onSubmit={this.handleSubmit}>
    <input type="text" placeholder="Location Name" name="name" required/>
    <input type="text" placeholder="Description" name="description" required/>
    <input type="number" min="1" max="5" placeholder="Rating" name="rating" required/>
    <input type="text" placeholder="Image URL" name="pictureUrl" required/>
    <p>Coordinates: {this.showCoords()} </p>

    {this.displaySelect(this.props.type)}

    <button type="submit">Save</button>
    </form>

    </div>
    <button onClick={this.closeModal}>Close Window</button>
    </>
  )

}

}

export default LocationForm;
