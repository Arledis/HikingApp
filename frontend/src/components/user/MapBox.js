import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapBox.css'


class MapBox extends Component {

    state = {
      lat: 56.30,
      lng: -4.00,
      zoom: 6,
    }

    render() {
      const position = [this.state.lat, this.state.lng]
      return (
        <Map center={position} zoom={this.state.zoom} id="map-box">
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
        /* <GeoJSON key={keyFunction(this.props.map.data.json)} data={this.props.map.data.json} /> */
      )
    }
}
export default MapBox;
