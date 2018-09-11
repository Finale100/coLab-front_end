import React from 'react'
import { Segment, Image, Grid, Button } from 'semantic-ui-react'

const TeamDetail = (props) => {
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
      <button className="ui medium button" size='huge' onClick={() => {
        this.state.selectedProject !== null ? <TeamDetail users={this.props.allUsersState}/> : null}}>
        Build A Team
      </button>
    </Segment>
  )
}

export default TeamDetail
