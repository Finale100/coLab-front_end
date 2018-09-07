import React, {Component} from 'react'
import UserCard from '../components/UserCard.js'
import UserProfile from '../components/UserProfile.js'

class UserContainer extends Component {
  render() {
    return (
      <div>
        User Container
      <UserCard />
      </div>
    );
  }
}

export default UserContainer;
