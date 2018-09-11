import React from 'react'
import { Segment, Image, Grid, Button } from 'semantic-ui-react'
import UserCard from './UserCard.js'
import UserContainer from '../containers/UserContainer.js'

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projectTeam: [],
      buildTeam: false,
    }
    console.log(this.props.currentProject)
  }

componentDidMount = () =>{
  this.allAvailableUsers()
}

  buildATeam = () => {
    this.setState({
      buildTeam: true
    })
  }

  allAvailableUsers = () => {
    return this.props.allUsersState.filter(user => {
      if(user.availability === true) {
        return user
      }
    })
  }

  addTeam = (user) => {
    fetch("http://localhost:3000/api/v1/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: user.id,
        project_id: this.props.currentProject.id
      })
    })
    this.setState({
      projectTeam: [...this.state.projectTeam, user]
    })
  }

  render() {
    const availabile = this.allAvailableUsers();

    return (
      <Segment>
        <Grid>
          <Grid.Column width={3}>
            <h2>{this.props.currentProject.title}</h2>
            <Image src={this.props.currentProject.img_url} />
          </Grid.Column>
          <Grid.Column width={10}><h4>Description:</h4>
            <p>
              {this.props.currentProject.description}
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <h5>Start Date: {this.props.currentProject.start_date}</h5>
            <h5>End Date: {this.props.currentProject.end_date}</h5>
          </Grid.Column>
          <Grid.Column width={10}>
            <div><h4>Team Members: </h4>{this.props.currentProject.users.map(user => <span> {user.name} </span>)}
            </div>
          </Grid.Column>
        </Grid>
        <button className="ui medium button" size='huge' onClick={this.props.projectUnselect}>
          Go Back
        </button>
        <button className="ui medium button" size='huge' onClick={() => this.props.deleteProject(this.props.currentProject)}>
          Delete
        </button>
        <button className="ui medium button" size='huge' onClick={this.buildATeam}>
          Build A Team
        </button>
        <div>
        {this.state.buildTeam === true ? <UserContainer users={availabile} addTeam={this.addTeam}/> : null}
        </div>
      </Segment>
    )
  }
}
