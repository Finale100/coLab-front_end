import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Search from './components/Search.js';
import UserContainer from './containers/UserContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <UserContainer />
      </div>
    );
  }
}

export default App;
