import React, {Component} from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'


export default class ProjectCard extends Component {
  render() {
    return (
      <Card onClick={() => this.props.onClick(this.props.project)}>
        <Image src={this.props.project.img_url} />
        <Card.Content>
          <Card.Header>{this.props.project.title}</Card.Header>
          <br></br>
          <Card.Meta>
            <div className='start date'>Start: {this.props.project.start_date}</div>
            <div className='end date'>End: {this.props.project.end_date}</div>
          </Card.Meta>
          <Card.Description>{this.props.project.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            Members Needed: {this.props.project.max_member - this.props.project.users.length}
          </a>
        </Card.Content>
      </Card>
    )
  }
}
