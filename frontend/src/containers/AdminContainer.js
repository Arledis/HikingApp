import React, {Component} from 'react';
import './AdminContainer.css'
import LocationTable from '../components/admin/LocationTable'
import Request from '../helpers/request';

class AdminContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      accommodation: null,
      services: null,
      pointsOfInterest: null
    }
    this.fetchLocations = this.fetchLocations.bind(this)
    this.findLocationById = this.findLocationById.bind(this)
    this.deleteLocation = this.deleteLocation.bind(this)
  }

  componentDidMount() {
    this.fetchLocations()
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
      newState.accommodation = data[0]
      newState.services = data[1]
      newState.pointsOfInterest = data[2]
      this.setState(newState);
    })
  }

  findLocationById(id){
    const location = this.state.locations.find((location) => {
      return location.id = parseInt(id)
    })
    return location;
  }

  deleteLocation(location, type) {
    let request = new Request()
    let url = `/api/${type}/${location}`;
    request.delete(url).then(() => {
      window.location = '/admin'
    });
  }

  render(){
    return(
      <div id="admin-container">
      <div id="admin-header">
      <h1>Admin Page</h1>
      </div>
<button>Add Location</button>
      <LocationTable locations={this.state} deleteLocation={this.deleteLocation}/>

      </div>
    )
  }

}


export default AdminContainer;
