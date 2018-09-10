import React, {Component} from 'react'
import { Form, Radio } from 'semantic-ui-react'

class SignUp extends Component {

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
      <div>Sign Up Component
      <Form
        onSubmit={ e => {
          e.preventDefault()
          this.props.handleNewUserForm(this.state.value)
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
        <Form.Button>Submit</Form.Button>
      </Form>
      </div>
    )
  }

}

export default SignUp
