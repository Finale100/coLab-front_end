import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Search from './components/Search.js'
import UserContainer from './containers/UserContainer.js'
import ProjectContainer from './containers/ProjectContainer.js'
import ProjectDetail from './components/ProjectDetail.js'


const URL = 'http://localhost:3000/api/v1/users'
const PROJECT = 'http://localhost:3000/api/v1/projects'

class App extends Component {

  state = {
    allUsers: [],
    searchTerm: "",
    allProjects: [],
    selectedProject: null
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

  fetchProjects() {
   fetch(PROJECT)
   .then(response => response.json())
   .then(projects => {
     this.setState ({
       allProjects: projects
     })
   })
  }

  componentDidMount = () => {
    this.fetchUsers()
    this.fetchProjects()
  }

  onSearchHandler = event => {
  this.setState({ searchTerm: event.target.value })
}

  projectHandleClick = (project) => {
    this.setState({
      selectedProject: project
    })
  }

  projectUnselect = () => {
    this.setState({
      selectedProject: null
    })
  }

  render() {
    return (
      <div className="App">
        <Search onChangeHandler={this.onSearchHandler} value={this.state.searchTerm}/>
        <UserContainer allUsersState={this.state.allUsers} filterTerm={this.state.searchTerm}/>
        <div className="project">
        {this.state.selectedProject === null ? <ProjectContainer allProjects={this.state.allProjects} projectHandleClick={this.projectHandleClick}/> : <ProjectDetail currentProject={this.state.selectedProject} projectUnselect={this.projectUnselect}/>}
        </div>

      </div>
    );
  }
}

export default App;
