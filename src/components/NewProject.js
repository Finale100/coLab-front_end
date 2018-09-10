import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'


const NewProject = (props) => {
  return (
  <Form>
    <Form.Field>
      <label>Title</label>
      <input placeholder='Title' />
    </Form.Field>
    <Form.Field>
      <label>Img URL</label>
      <input placeholder='Img URL' />
    </Form.Field>
    <Form.Field>
      <label>Start Date</label>
      <input placeholder='Start Date'/>
    </Form.Field>
    <Form.Field>
      <label>End Date</label>
      <input placeholder='End Date'/>
    </Form.Field>
    <Form.Field>
      <label>Members Needed</label>
      <input placeholder='Number Of Members Needed'/>
    </Form.Field>
    <Form.TextArea label='Description' placeholder='Description'/>
    <Button type='submit' onClick={(e) => props.postProject(e)}>Submit</Button>
  </Form>
  )
}

export default NewProject
