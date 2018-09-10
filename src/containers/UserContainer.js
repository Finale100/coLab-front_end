import React, {Component} from 'react'
import UserCard from '../components/UserCard.js'
import UserProfile from '../components/UserProfile.js'

const UserContainer = ({filterTerm, allUsersState}) => {

  let filteredUsers = allUsersState.filter(user =>
  user.name.toLowerCase().includes(filterTerm.toLowerCase())
)
    return filteredUsers.map(user => (
          <UserCard user={user} key={user.id}/>
        ))
}

export default UserContainer;
