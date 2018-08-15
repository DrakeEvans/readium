import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div id='navbar' className='row'>
      <NavLink activeClassName='active' to="/stories"> Go to stories </NavLink>
      <NavLink activeClassName='active' to="/authors"> Authors </NavLink>
    </div>
  )
}

export default Navbar
