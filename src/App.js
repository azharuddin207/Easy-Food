import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import { from } from 'rxjs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
        <div className="container">
        <NavbarBrand href="/">Restorane confusion</NavbarBrand>
        </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
