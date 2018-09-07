import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Search from './components/Search.js';
import UserContainer from './containers/UserContainer.js'

const URL = 'http://localhost:3000/api/v1/users'

class App extends Component {

  state = {
    allUsers: []
  }

  fetchUsers = () => {
   fetch(URL)
   .then(response => response.json())
   .then(users => {
     this.setState({
       allUsers: users
     }, () => console.log(users))
   })
  }

  componentDidMount = () => {
    this.fetchUsers()
  }

  render() {
    return (
      <div className="App">
        <Search />
        <UserContainer allUsersState={this.state.allUsers}/>
      </div>
    );
  }
}

export default App;
