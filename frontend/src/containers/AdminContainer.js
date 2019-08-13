import React, {Component} from 'react';
import './AdminContainer.css'
import LocationTable from '../components/admin/LocationTable'
import Request from '../helpers/request';
<<<<<<< HEAD
=======
import LocationForm from '../components/admin/LocationForm'
>>>>>>> eda1ec860e6242f65a3cae81a937cd813a266a67
import Modal from '../components/general/Modal'

class AdminContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      accommodation: null,
      services: null,
      pointsOfInterest: null,
<<<<<<< HEAD
      showModal: false,
      modalType: null
=======
      showModal: false
>>>>>>> eda1ec860e6242f65a3cae81a937cd813a266a67
    }
    this.fetchLocations = this.fetchLocations.bind(this)
    this.findLocationById = this.findLocationById.bind(this)
    this.deleteLocation = this.deleteLocation.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
<<<<<<< HEAD
    this.handleLocationPost = this.handleLocationPost.bind(this)
=======
>>>>>>> eda1ec860e6242f65a3cae81a937cd813a266a67
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

  showModal() {
<<<<<<< HEAD
    if(this.state.showModal) {
      return(
        <Modal
          handleLocationPost={this.handleLocationPost}
          type={this.state.modalType}
          toggleModal={this.toggleModal}/>
      )
    }
  }

  toggleModal(type) {
    let newState = Object.assign({}, this.state)
    newState.showModal = !this.state.showModal
    newState.modalType = type
=======
    if(this.state.showModal) { return <Modal locationForm={LocationForm} /> }
  }

  toggleModal() {
    let newState = Object.assign({}, this.state)
    newState.showModal = true
    this.setState(newState)
  }

  untoggleModal(){
    let newState = Object.assign({}, this.state)
    newState.showModal = false
>>>>>>> eda1ec860e6242f65a3cae81a937cd813a266a67
    this.setState(newState)
  }

  untoggleModal(){
    let newState = Object.assign({}, this.state)
    newState.showModal = false
    this.setState(newState)
  }

  handleLocationPost(location, type){
    const url = `/api/${type}`
    const request = new Request();
    request.post(url, location)
  }


  render(){
    return(
      <div id="admin-container">
      <div id="admin-header">
      <h1>Admin Page</h1>
      </div>

<<<<<<< HEAD
      <button onClick={() => this.toggleModal("accommodations")}>Add Accommodation</button>
      <button onClick={() => this.toggleModal("services")}>Add Service</button>
      <button onClick={() => this.toggleModal("pointOfInterests")}>Add Point of Interest</button>
=======
      <button onClick={this.toggleModal}>Add Location</button>
>>>>>>> eda1ec860e6242f65a3cae81a937cd813a266a67

      <LocationTable locations={this.state} deleteLocation={this.deleteLocation}/>
      {this.showModal()}
      </div>
    )
  }

}


export default AdminContainer;
