
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

import Patient from './pages/Patient'
import Research from './pages/Research'
import Products from './pages/Products'
import Navbar from './component/Navbar'
import Professional from './pages/Professional'
import Footer from './component/footer/Footer'


import Footer from './component/footer/Footer'
import FooterTicker from './component/Ticker'


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' index   element={<Home/>}/>
      <Route path='/professional' element={<Professional/>}/>
      <Route path='/patient'  element={<Patient/>}/>
      <Route path='/research' element={<Research/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/about'    element={<About/>}/>
      <Route path='/gallery'  element={<Gallery/>}/>
      <Route path='/contact'   element={<Contact/>}/>
    </Routes>
    <FooterTicker />
    <Footer />
    </>
  )
}

export default App;