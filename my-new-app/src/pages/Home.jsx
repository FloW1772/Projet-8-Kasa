import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Card from '../components/card/Card'
import Section from '../assets/images/_Section_1.png'
import './home.scss'
import Redcard from '../../assets/icones/card.jpg'




export default function Home() {
  const [logements, setLogements] = useState([])

  useEffect(()=>{
  fetch("/data.json")
    .then((datas)=>{
      return datas.json()
    }).then((jsondata)=>{
      setLogements(jsondata)
    }).catch((error)=>console.log(error))
  },[])

  return (
    <div>
      <Header/>
      <div>
      <img src={Section} alt="Section-kasa" class={Section} />
    </div>

        {logements?.map((logement)=>(
          <Card key={logement.id} title={logement.title} cover={logement.cover} />
          
          ))}
      <Footer/>
    </div>
  )
}
