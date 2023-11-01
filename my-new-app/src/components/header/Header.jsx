import React from 'react'
import './header.scss'
import Logo from '../../assets/logo/LOGO.png'

export default function Header() {
  return (
<div className="container">
      <div className="logo">
      <img src={Logo} alt="logo-kasa" />
      </div>
      <div className="text">
        <h1 className="premier">Accueil</h1>
        <h1 className="deuxieme">A Propos</h1>

      <nav>

      </nav>
    </div>
    </div>

  )
}
