import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Gallary from './pages/Gallary'
import Contact from './pages/Contact'

import Professional from './pages/Professional'
import Patient from './pages/Patient'
import Research from './pages/Research'
import Products from './pages/Products'
import Navbar from './component/NAVBAR/Navbar'

function App() {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <Routes>
      <Route path='/' index element={<Home/>}/>
      <Route path='/professional' element={<Professional/>}/>
      <Route path='/patient' element={<Patient/>}/>
      <Route path='/research' element={<Research/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/gallary' element={<Gallary/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App