import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'
import UserCard from '../components/UserCard.js'
import UserProfile from '../components/UserProfile.js'

class UserContainer extends Component {
  render() {
    return (
      <div>
        User Container
        {/* <div className="ui link cards"> */}
        <Card.Group>
          {this.props.allUsersState.map( user => <UserCard user={user} key={user.id}/>)}
        {/* </div> */}
      </Card.Group>
      </div>
    );
  }
}

export default UserContainer;
