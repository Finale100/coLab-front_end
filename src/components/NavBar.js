import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = props => {
  return (
    <div className={`ui inverted ${props.color} menu navbar`}>
     <a className="item">
       <h2 className="ui header">
         <i className={`${props.icon} icon`} />
         <div className="content">{props.title}</div>
         <div className="sub header">{props.subtitle}</div>
       </h2>
     </a>
     <NavLink
       exact
       to="/signup"
       // align='right'
       activeClassName="ui active item"
       className="ui item">
       Sign Up
     </NavLink>

     <NavLink
       exact
       to="/"
       className="ui item"
       activeClassName="ui active item">
       Home
     </NavLink>

     <NavLink
       exact
       to="/projects"
       activeClassName="ui active item"
       className="ui item">
       Projects
     </NavLink>
   </div>
  )
}

export default NavBar
