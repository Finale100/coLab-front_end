import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Search from './components/Search.js';
import UserContainer from './containers/UserContainer.js'

const URL = 'http://localhost:3000/api/v1/users'

class App extends Component {

  state = {
    allUsers: [],
    searchTerm: ""
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

  onSearchHandler = event => {
  this.setState({ searchTerm: event.target.value });
};

  render() {
    return (
      <div className="App">
        <Search  onChangeHandler={this.onSearchHandler} value={this.state.searchTerm}/>
        <UserContainer allUsersState={this.state.allUsers} filterTerm={this.state.searchTerm}/>
      </div>
    );
  }
}

export default App;
