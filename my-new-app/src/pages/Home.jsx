import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Card from '../components/card/Card'

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
      <h1>Accueil</h1>
        {logements?.map((logement)=>(
          <Card key={logement.id} title={logement.title} cover={logement.cover} />
          ))}
      <Footer/>
    </div>
  )
}
