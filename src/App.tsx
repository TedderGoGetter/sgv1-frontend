import { useEffect, useState } from 'react'
import axios from 'axios'
import './app.scss'
import Header from './components/Header'
import { Frontpage } from './components/Frontpage'

function App() {

  useEffect(() => {
    axios.get('http://localhost:3333/song', {headers: {'Access-Control-Allow-Origin': 'localhost:3333'}}).then(res => {
      console.log('attempted get')
      console.log(res.data)
      
    })
  }, [])

  return (
    <>
    <Header/>
    <Frontpage/>
    
    </>
  )
}

export default App
