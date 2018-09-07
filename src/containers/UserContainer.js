import React, {Component} from 'react'
import UserCard from '../components/UserCard.js'
import UserProfile from '../components/UserProfile.js'

class UserContainer extends Component {
  render() {
    return (
      <div>
        User Container
        <div className="ui link cards">
          {this.props.allUsersState.map( user => <UserCard user={user} key={user.id}/>
          )}
        </div>
      </div>
    );
  }
}

export default UserContainer;
