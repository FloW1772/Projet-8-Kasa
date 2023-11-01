import React from 'react'
import './card.scss'
import { Link } from 'react-router-dom'


export default function Card({ id, title, cover }) {
  return (
    <Link to={`fiche-logement/${id}`} className='card'>
      <div className="card-image-container">
        <img src={cover} alt={title} />
      </div>
      <h2>{title}</h2>
    </Link>
  )
}
