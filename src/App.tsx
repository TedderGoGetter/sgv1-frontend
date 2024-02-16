import { useEffect, useState } from 'react'
import axios from 'axios'
import './app.scss'
import Header from './components/Header'
import { Frontpage } from './pages/Frontpage'
import { createBrowserRouter, Route, NavLink, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import RootLayout from './layouts/RootLayout'
import Browse from './pages/Browse'
import RequireAuth from './components/RequireAuth'
import { Banner } from './components/Banner'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<Banner/>}/>
      {/* <Route index element={<Frontpage/>}/>
      <Route element={<RequireAuth />} >
        <Route path="browse" element={<Browse/>}/>
      </Route>
      <Route path="about" element={<About/>}/> */}
    </Route>
  )
)

function App() {

  // useEffect(() => {
  //   axios.get('http://localhost:3333/song', {headers: {'Access-Control-Allow-Origin': 'localhost:3333'}}).then(res => {
  //     console.log('attempted get')
  //     console.log(res.data)
      
  //   })
  // }, [])

  return (
      <RouterProvider router={router}/>
  )
}

export default App
