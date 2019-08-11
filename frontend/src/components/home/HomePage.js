import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './HomePage.css'

  const HomePage = () => {

    return(
      <div id="home-page">

        <div id="hero-text">
          <h1>Scottish National Trail</h1>
          <p>The craziest trail evaaa!</p>
          <button>
          <Router>
            <Link to="/map">Map</Link>
          </Router>
          </button>
        </div>

      </div>
    )
  }


export default HomePage;
