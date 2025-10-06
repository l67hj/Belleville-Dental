import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <>
    <div>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to='/' className="nav-link active " aria-current="page" href="#">Home</NavLink>
        </li>
         <li className="nav-item dropdown">
          <NavLink to='/professional' className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Professional Education
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink to='/related' className="dropdown-item" href="#">Related course</NavLink></li>
            <li><NavLink to='/help' className="dropdown-item" href="#">Help Documents</NavLink></li>
            <li><NavLink to='/faculty' className="dropdown-item" href="#">Faculty Resources</NavLink></li>
            <li><NavLink to='/case' className="dropdown-item" href="#">Case Studie</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink to='/patient' className="nav-link" href="#">Patient Education</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/research' className="nav-link" href="#">Research</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='products' className="nav-link" href="#">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/about' className="nav-link" href="#">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/contact' className="nav-link" href="#">Contact Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/gallary' className="nav-link" href="#">Gallery</NavLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
   
    </>
  )
}

export default Navbar