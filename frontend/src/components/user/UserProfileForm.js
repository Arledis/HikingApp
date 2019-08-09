import React from 'react';

const UserProfileForm = (props) => {

  const options = props.locations.map((favourites, index) => {
    return <option key={index} value={favourites._links.self.href}>{favourites.name}</option>
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    const userProfile = {
      "firstName": event.target.name.value,
      "favourites": event.target.favourites.value,
      "route": event.target.route.value
    }
    props.handleUserProfilePost(userProfile);
  }

  return (
    <div class="form-popup" id="myForm">
      <form onSubmit={handleSubmit} class="form-container">
      <input type="text" placeholder="Name" name="name"/>
      <input type="text" placeholder="Favourites" name="favourites"/>
      <select name="favourites">
        {options}
      </select>
      <button type="submit">Save</button>
      <button type="submit" class="btn cancel" onclick="closeForm()">Cancel</button>
      </form>
      </div>
    )
}

export default UserProfileForm;
