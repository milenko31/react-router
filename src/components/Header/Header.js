import React from 'react'

import { NavLink } from 'react-router-dom'
import '/Header'
function Header() {
  return (
    <header className="header">
      <ul>
        <img src="LOGO.png" alt="logo de KASA" />
        <NavLink end to="/">
          HomePage
        </NavLink>
        <NavLink to="/about">About</NavLink>
      </ul>
    </header>
  )
}

export default Header
