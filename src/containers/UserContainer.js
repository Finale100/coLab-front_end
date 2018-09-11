import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'
import UserCard from '../components/UserCard.js'
import UserProfile from '../components/UserProfile.js'


const UserContainer = ({clickedUserState, clickedUserFunction, filterTerm, users, addTeam}) => {
    return(
      <div>
        <h3>Users:</h3>
        <Card.Group>
      {users.map(user => {
          return <UserCard
          user={user}
          key={user.id}
          clickedUserFunction={clickedUserFunction}
          addTeam={addTeam}
        />}
      )}
      </Card.Group>
      </div>
    )
  }

export default UserContainer
