import React, {Component} from 'react';
import MainContainer from './containers/MainContainer';
import MapBox from './components/user/MapBox';




class App extends Component {

 render() {
   return (
     <div>
     <MainContainer />
     <MapBox />
     </div>
   );
 }
}

export default App;
