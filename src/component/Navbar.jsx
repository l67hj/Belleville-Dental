import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [count, setCount] = useState(0)


  // for removing rect strict mode of counting twice

    const Incremented = useRef(false); 


  useEffect(()=> {

     if (Incremented.current) return;
    Incremented.current = true;

    const visits = localStorage.getItem("visitCount");

    if (visits) {
      const newCount = parseInt(visits) + 1;
      setCount(newCount);
      localStorage.setItem("visitCount", newCount);
    } else {
      setCount(1);
      localStorage.setItem("visitCount", 1);
    }
  }, [])

  // adding a shadow to the background of navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // to close navbar dropdown or hamburger menu onclick
  const closeNavbar = () => {
    const navbar = document.getElementById("navbarSupportedContent");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg position-fixed py-3 w-100 z-3 ${
        scroll ? "scroll" : "bg-white"
      }`}
    >
      <div className="container ">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="/logo.png"
            alt="BelleVille Dentals"
            style={{ maxHeight: "60px" }}
          />
        </Link>

        {/* Hamburger menu*/}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links centered */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={closeNavbar}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" onClick={closeNavbar}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" onClick={closeNavbar}>
                Contact
              </NavLink>
            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown">
              <NavLink
                to="/prodessional"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                
              >
                Education
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    to="/patient"
                    className="dropdown-item"
                    onClick={closeNavbar}
                  >
                    Patient Education
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/professional"
                    className="dropdown-item"
                    onClick={closeNavbar}
                  >
                    Professional Education
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink to="/research" className="nav-link" onClick={closeNavbar}>
                Research
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link" onClick={closeNavbar}>
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/gallery" className="nav-link" onClick={closeNavbar}>
                Gallery
              </NavLink>
            </li>
          </ul>

          {/* Counter */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/counter"
                className="button nav-link bg-primary text-white rounded px-3"
                onClick={closeNavbar}
              >
                {count}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
