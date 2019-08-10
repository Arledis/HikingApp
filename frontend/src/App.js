import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import AdminContainer from './containers/AdminContainer';
import Request from './helpers/request';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    const request = new Request()
    request.get('api/users')
    .then((data) => {
      this.setState({
        users: data._embedded.users
      })
    })
  }

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
