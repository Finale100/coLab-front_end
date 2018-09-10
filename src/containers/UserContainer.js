import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'
import UserCard from '../components/UserCard.js'
import UserProfile from '../components/UserProfile.js'


const UserContainer = ({filterTerm, allUsersState}) => {

  let filteredUsers = allUsersState.filter(user =>
  user.name.toLowerCase().includes(filterTerm.toLowerCase())
)
    return(
      <div>
        User Container
        <Card.Group>
      {filteredUsers.map(user => <UserCard user={user} key={user.id}/>)}
      </Card.Group>
      </div>
    )
    // {this.props.allUsersState.map( user => <UserCard user={user} key={user.id}/>)}

  //   );
  }
export default UserContainer
