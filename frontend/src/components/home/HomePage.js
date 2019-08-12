import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './HomePage.css'
import InfoBox from './InfoBox'
import Footer from './Footer'
import LargeTextBox from './LargeTextBox'
import MainContainer from '../../containers/MainContainer'
import AdminContainer from '../../containers/AdminContainer'

  const HomePage = ({user}) => {

    return(
      <Router>
      <Switch>

    <div>


      <div id="home-page">

        <div class="hero-text">
          <h1 class="title">Scottish National Trail</h1>
          <p class="blurb">Walk the 864km long distance walking route running the length of Scotland from Kirk Yetholm to Cape Wrath</p>

          <button class="button">
            <Route exact path="/map" render={() =>{
              return <MainContainer user={ user } />
            }} />
              <Link to="/map">User</Link>
          </button>

          <button class="button">
            <Route exact path="/admin" render={() =>{
              return <AdminContainer />
            }} />
              <Link to="/admin">Admin</Link>
          </button>

        </div>
      </div>

      <div class="info-boxes">
        <InfoBox title="Title" blurb="This is a blurb" pic=""/>
        <InfoBox title="title" blurb="This is another blurb" pic="./images/map.png"/>
        <InfoBox title="tytle" blurb="this is a third blurd" pic=""/>
      </div>

        <LargeTextBox />
        <Footer />


    </div>
    </Switch>
    </Router>

    )
  }


export default HomePage;
