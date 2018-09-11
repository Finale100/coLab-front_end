import React from 'react'
import { Segment, Image, Grid, Button } from 'semantic-ui-react'

const ProjectDetail = props => {


  return (
    <Segment>
      <Grid>
        <Grid.Column width={3}>
          <h2>{props.currentProject.title}</h2>
          <Image src={props.currentProject.img_url} />
        </Grid.Column>
        <Grid.Column width={10}><h4>Description:</h4>
          <p>
            {props.currentProject.description}
          </p>
        </Grid.Column>
        <Grid.Column width={2}>
          <h5>Start Date: {props.currentProject.start_date}</h5>
          <h5>End Date: {props.currentProject.end_date}</h5>
        </Grid.Column>
        <Grid.Column width={10}>
          <div><h4>Team Members: </h4>{props.currentProject.users.map(user => <span> {user.name} </span>)}
          </div>
        </Grid.Column>
      </Grid>
      <button className="ui button fluid" size='huge' onClick={props.projectUnselect}>
        Go Back
      </button>
      <button className="ui button fluid" size='huge' onClick={() => props.deleteProject(props.currentProject)}>
        Delete
      </button>
    </Segment>
  )
}

export default ProjectDetail
