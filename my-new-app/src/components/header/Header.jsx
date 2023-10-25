import React from 'react'
import './header.scss'
import Logo from '../../assets/logo/LOGO.png'
import Section from '../../assets/images/_Section_1.png'

export default function Header() {
  return (
    <div>
      <img src={Logo} alt="logo-kasa" />

      <div>
        <img src={Section} alt="Section-kasa" />
      </div>
      <nav>

      </nav>
    </div>
  )
}
