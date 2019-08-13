import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './HomePage.css'
import InfoBox from './InfoBox'
import Footer from './Footer'
import LargeTextBox from './LargeTextBox'
import MainContainer from '../../containers/MainContainer'
import AdminContainer from '../../containers/AdminContainer'

  const HomePage = ({user, clickMap}) => {

    const handleMapClick = () => {
      clickMap();
    }


    return(
      <Router>
      <Switch>

    <div>


      <div id="home-page">

        <div class="hero-text">
          <h1 class="title">Scottish National Trail</h1>
          <p class="blurb">Walk the 864km long distance walking route running the length of Scotland from Kirk Yetholm to Cape Wrath</p>

          <button class="button" onClick={() => handleMapClick()}>User</button>



          <button class="button">
            <Route exact path="/admin" render={() =>{
              return <AdminContainer />
            }} />
              <Link to="/admin">Admin</Link>
          </button>

        </div>
      </div>

      <div class="info-boxes">
        <InfoBox title="Title" blurb="The Scottish National Trail is an 864 kilometre-long long distance walking route running the length of Scotland from Kirk Yetholm to Cape Wrath.Devised by outdoors writer and broadcaster Cameron McNeish, the Trail offers very varied walking, following long-established footpaths for much of the distance but becoming progressively more difficult as it heads north, finishing with a tough stretch of backpacking - with some pathless and demanding terrain - on the final stretch of the Cape Wrath Trail." pic=""/>
        <InfoBox title="title" blurb="The Trail begins at Kirk Yetholm in the Scottish Borders - the end point of the Pennine Way. It follows part of St Cuthbert's Way northwards to the town of Melrose with its picturesque Abbey, and then traces the course of the Southern Upland Way to Traquair.The route runs by the River Tweed up to Peebles before climbing over the Meldon Hills and then the Pentlands to reach the capital city, Edinburgh. Towpaths give very easy walking alongside the Union Canal to Linlithgow and on to the amazing Falkirk Wheel. The Forth and Clyde Canal carries the route to the northern fringes of Glasgow before it strikes north to join the West Highland Way at Milngavie. At Drymen the trail switches to follow the Rob Roy Way to Callander, before a wilder stretch passes through Comrie and over the hills and glens of Perthshire to Aberfeldy and then Pitlochy." pic="./images/map.png"/>
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
