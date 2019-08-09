import React from 'react';


const UserProfileEditForm = (props) => {
  if(!props.userProfile){
    return "Loading..."
  }
  const locationOptions = props.favourites.map((location, index) => {
    return <option key={index} value={location._links.self.href}>{location.name}</option>
  })
  const userProfileHasRoutes = (routes) => {
    return props.userProfile.route.some((userProfileRoutes) => {
      return userProfileRoutes.name === routes.name
    })
  }
  const routesOptions = props.route.map((routes, index) => {
    return <option key={index} value={location._links.self.href}>{routes.name}</option>
  })
  const findLocationLink = () => {
    const foundLocation = props.favourites.find((location) => {
      return location.name === props.userProfile.location.name
    })
    return foundLocation._links.self.href;
  }
  const findRoutesLink = () => {
    const userProfileRoute = props.route.filter((routes) => {
      return userProfileHasRoutes(routes);
    })
    return userProfileRoute.map((routes) => {
      return routes._links.self.href;
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const route = [...event.target.route.options].filter((options) => {
      return option.selected
    })
    const userProfile = {
      "name":event.target.name.value,
      "favourites":event.target.favourites.value,
      "route":event.target.route.value
    }
    props.handleUserProfileUpdate(userProfile)
  }
  return (
    <div class="form-popup" id="myForm">
    <form onSubmit={handleSubmit} class="form-container">
        <input type="text" name="firstName" defaultValue={props.userProfile.name}/>

        <select multiple={true} name="favourites" defaultValue={findLocationLink()}>
          {locationOptions}
        </select>

        <select multiple={true} name="route" defaultValue={findRoutesLinks()}>
        {routesOptions}
        </select>

    <button type="submit">Save</button>
    <button type="submit" class="btn cancel" onclick="closeForm()">Cancel</button>
    </form>
    </div>
  )
}


export default UserProfileEditForm;
