import React from 'react'
import './footer.scss'
import LOGOFOOTER from '../../assets/logo/LOGO-footer.png'

export default function Footer() {
  return (
    <div className="footer">
      <img src={LOGOFOOTER} alt="Logo Kasa" />
      <p>2020 Kasa. Tous droits réservés</p>
    </div>
  )
}
