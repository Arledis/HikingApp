import React, { Component } from 'react';
import { Map, TileLayer, Marker, GeoJSON, Popup } from 'react-leaflet';
import Request from '../../helpers/request'
import './MapBox.css'

//

class MapBox extends Component {

  constructor(props){
    super(props)
    this.state = {
      settings: {
        lat: 56.30,
        lng: -4.00,
        zoom: 6,
      },
      trail: null,
      locations: {}
    }
  }

  fetchTrail() {
    const url = "https://raw.githubusercontent.com/DafyddLlyr/geoJSON_test/master/map.geojson"
    fetch(url)
      .then(res => res.json())
      .then(trail => {
        let newState = Object.assign({}, this.state)
        newState.trail = trail
        this.setState(newState)
    })
  }

  showTrail() {
    if(this.state.trail) {
      return <GeoJSON key={this.state.trail} data={this.state.trail} />
    }
  }

  fetchLocations() {
    const request = new Request()
    const url = "api/locations/"

    let promise1 = request.get(url + "accommodation")
    let promise2 = request.get(url + "services")
    let promise3 = request.get(url + "pointsOfInterest")

    Promise.all([promise1, promise2, promise3])
      .then(data => {
        const newState = Object.assign({}, this.state);
        newState.locations.accommodation = data[0]
        newState.locations.services = data[1]
        newState.locations.pointsOfInterest = data[2]
        this.setState(newState);
      })
  }

  showLocations() {
    let layerGroup = []
    if(this.state.locations) {
      for(let type of Object.keys(this.state.locations)) {
        for(let location of this.state.locations[type]) {
          layerGroup.push(
            <Marker position={location.coordinates} key={location.id}>
              <Popup>"This is {location.name}"</Popup>
            </Marker>
          )
        }
      }
    }
    return layerGroup;
  }

  componentDidMount() {
    this.fetchTrail()
    this.fetchLocations()
  }

  render() {
    const position = [this.state.settings.lat, this.state.settings.lng]

    return (
      <Map center={position} zoom={this.state.settings.zoom} id="map-box">
        <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png"
      />
        {this.showTrail()}
        {this.showLocations("accommodation")}
      </Map>

    )
  }
}
export default MapBox;
