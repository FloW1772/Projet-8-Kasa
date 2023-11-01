import React from 'react'
import './header.scss'
import Logo from '../../assets/logo/LOGO.png'
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={Logo} alt="logo-kasa" />
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/a-propos"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              A-propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>

  )
}
