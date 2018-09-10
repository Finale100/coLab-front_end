import React, {Component} from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

class UserCard extends Component {
  render() {
    return (
        <Card>
          <Image src={this.props.user.img_url} />
          <Card.Content>
            <Card.Header>{this.props.user.name}</Card.Header>
            <Card.Meta>
              <span className='date'>{this.props.user.skill}</span>
            </Card.Meta>
            <Card.Description>
              {this.props.user.bio}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <span className="right floated">
                <Button primary size='mini'>Add to Team</Button>
            </span>
              {this.props.user.availability
                ?
                <a>
                <Icon name='calendar check outline'/>Available
                </a>
                :
                <a>
                <Icon name='calendar times outline'/>Unavailable
                </a>
              }
          </Card.Content>
        </Card>

    );
  }
}

export default UserCard;
