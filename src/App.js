import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


import UserProfile from './components/UserProfile.js'
import SignUp from './components/SignUp.js'
import Search from './components/Search.js';
import UserContainer from './containers/UserContainer.js'
import ProjectContainer from './containers/ProjectContainer.js'
import ProjectDetail from './components/ProjectDetail.js'


const URL = 'http://localhost:3000/api/v1/users'
const PROJECT = 'http://localhost:3000/api/v1/projects'

class App extends Component {

  state = {
    allUsers: [],
    searchTerm: "",
    clickedUser: null,
    clickedUserId: null,
    allProjects: [],
    selectedProject: null
  }

  fetchUsers = () => {
   fetch(URL)
   .then(response => response.json())
   .then(users => {
     this.setState({
       allUsers: users
     })
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
    this.setState({ searchTerm: event.target.value });
  };

  handleNewUser = (value) => {
    // console.log(value);
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: value.name,
        skill: value.skill,
        img_url: value.image_url,
        bio: value.bio,
        availability: value.availability
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      // this.setState({
      //   ...this.state.allUsers,
      //   allUsers: data
      // })
    })
  }

  handleClickedUser = (user) => {
    // console.log(user)
    this.setState({
      clickedUser: user,
      clickedUserId: user.id
    })
  }

  handleEditUser = (value) => {
    // console.log(value)
    let id = this.state.clickedUserId
    fetch(URL + `/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: value.name,
        skill: value.skill,
        img_url: value.image_url,
        bio: value.bio,
        availability: value.availability
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      // this.setState({
      //   ...this.state.allUsers,
      //   allUsers: data
      // })
    })
  }

  handleDeleteUser = (e) => {
    e.preventDefault()
    let id = this.state.clickedUserId
    fetch(URL + `/${id}`, {
    method: "DELETE"
  })
  .then(response => response.json())
  .then(data => {
    // console.log(data)
    this.setState({
      // ...this.state.allUsers,
      allUsers: this.state.allUsers
    })
  })
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

  updateProject = (project) => {
    this.setState({
      allProjects: [...this.state.allProjects, project]
    })
  }

  deleteProject = (project) => {
    let arr = [...this.state.allProjects]
    let index = arr.indexOf(project)
    arr.splice(index, 1)
    fetch(`${PROJECT}/${project.id}`, {
      method: 'DELETE'
    })
    this.setState({
      allProjects: arr
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.clickedUser === null ? <UserContainer allUsersState={this.state.allUsers} filterTerm={this.state.searchTerm}
        clickedUserFunction={this.handleClickedUser}/> : <UserProfile clickedUserState={this.state.clickedUser}
        handleEditUserForm={this.handleEditUser}
        handleDeleteUserButton={this.handleDeleteUser}/>}
        <SignUp handleNewUserForm={this.handleNewUser}/>
        <Search  onChangeHandler={this.onSearchHandler} value={this.state.searchTerm}/>
        <UserContainer
          allUsersState={this.state.allUsers} filterTerm={this.state.searchTerm}
          clickedUserFunction={this.handleClickedUser}/>
        <div className="project">
        {this.state.selectedProject === null ? <ProjectContainer allProjects={this.state.allProjects} projectHandleClick={this.projectHandleClick} updateProject={this.updateProject}/> : <ProjectDetail currentProject={this.state.selectedProject} projectUnselect={this.projectUnselect} deleteProject={this.deleteProject}/>}
        </div>
      </div>
    );
  }
}

export default App;
