import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.module.scss'

function Header() {
  return (
    <header>
      <nav className="header">
        <img className="kasa" src="LOGO.png" alt="logo de KASA" />
        <NavLink className="homepage" end to="/">
          Accueil
        </NavLink>
        <NavLink className="about" to="/about">
          A propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
