import React, {Component} from 'react'
import { Segment, Image, Grid, Form, Radio, Button } from 'semantic-ui-react'
// import {withRouter} from 'react-router-dom';

class UserProfile extends Component {

  state = {
    value: {
      name:'',
      image_url: '',
      skill: '',
      availability: '',
      bio: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      value: {
        ...this.state.value,
        [e.target.name]: e.target.value
      }
    })
  }

  handleBoolean = (e) => {
    let availabilityValue = e.target.parentNode.querySelector('input').value
    this.setState({
      value: {
        ...this.state.value,
        availability: availabilityValue
      }
    })
  }

  render() {
    return (
      <Segment>
         <Grid>
           <Grid.Column width={3}>
             <h2>{this.props.clickedUserState.name}</h2>
             <Image src={this.props.clickedUserState.img_url} />
           </Grid.Column>
           <Grid.Column width={10}><h4>Bio:</h4>
             <p>
               {this.props.clickedUserState.bio}
             </p>
           </Grid.Column>
           <Grid.Column width={2}>
             <h5>Skill: {this.props.clickedUserState.skill}</h5>
           </Grid.Column>
           <Grid.Column width={10}>
             <div><h4>Projects: </h4>{this.props.clickedUserState.projects.map(project => <span> {project.title} </span>)}
             </div>
           </Grid.Column>
         </Grid>
         <div><h5>Edit User Profie:</h5>
         <Form
           onSubmit={ e => {
             e.preventDefault()
             this.props.handleEditUserForm(this.state.value)
             this.props.userUnselect()
           }}>
           <Form.Group widths='equal'>
             <Form.Input
               name='name'
               value={this.state.value.name}
               onChange={this.handleChange}
               fluid label='Name'
               placeholder='Name' />
             <Form.Input
               name='image_url'
               value={this.state.value.image_url}
               onChange={this.handleChange}
               fluid label='Image Url'
               placeholder='Image Url' />
             <Form.Input
               name='skill'
               value={this.state.value.skill}
               onChange={this.handleChange}
               fluid label='Skill'
               placeholder='Skill' />
           </Form.Group>
           <Form.Group inline>
             <label>Availability</label>
             <Form.Field
               control={Radio}
               label='Available'
               name='availability'
               value='true'
               checked={this.state.value.availability === 'true'}
               onChange={this.handleBoolean}
             />
             <Form.Field
               control={Radio}
               label='Unavailable'
               name='availability'
               value='false'
               checked={this.state.value.availability === 'false'}
               onChange={this.handleBoolean}
             />
           </Form.Group>
           <Form.TextArea
             name='bio'
             value={this.state.value.bio}
             onChange={this.handleChange}
             label='Bio'
             placeholder='Tell us more about you...' />
           <Form.Checkbox
             label='I agree to the Terms and Conditions' />
           <Form.Button>Edit</Form.Button>
         </Form>
         </div>
         <Button
           primary
           onClick={() => {
             this.props.handleDeleteUserButton(this.props.clickedUserState)
           }}
           >Delete Profile</Button>
           <Button
             primary
             onClick={this.props.userUnselect}
            >Go Back</Button>
       </Segment>
    );
  }
}

export default UserProfile
