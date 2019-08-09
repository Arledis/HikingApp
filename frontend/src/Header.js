import React from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../Header.js';


const Header = (props) => {
  return (
    <header>
    <ul>
    <li className="navLink">
          <Link to="/Login">Login</Link>
        </li>
        <li className="navLink">
          <Link to="/route/new">Plan Your Route</Link>
        </li>
        <li className="navLink">
          <Link to="/admin">As Administrator</Link>
        </li>
    </ul>
    </header>
  )
}




export default Header;
