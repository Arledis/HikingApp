import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import AdminContainer from './containers/AdminContainer';



class App extends Component {

 render() {
   return (
     <div>
     <Router>
      <Switch>
          <Route exact path="/map" render={() =>{
            return <MainContainer />
          }} />
          <Route exact path="/admin" render={() =>{
            return <AdminContainer />
          }} />
            <>
            <Link to="/map">Map</Link>
            <Link to="/admin">Admin</Link>
            </>
      </Switch>
     </Router>
     </div>
   );
 }
}

export default App;
