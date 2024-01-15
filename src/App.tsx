import { useEffect, useState } from 'react'
import axios from 'axios'
import './app.scss'
import Header from './components/header'
import { Frontpage } from './components/frontpage'

function App() {

  // useEffect(() => {
  //   axios.get('http://localhost:3333/api/song', {headers: {'Access-Control-Allow-Origin': 'localhost:3333'}}).then(res => {
  //     console.log(res.data)
  //   })
  // }, []
  // )

  return (
    <>
    <Header/>
    <Frontpage/>
    
    </>
  )
}

export default App
