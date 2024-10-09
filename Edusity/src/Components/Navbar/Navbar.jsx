import React from 'react'
import './Navbar.css'
import'../../assets/logo.png'

const Navbar = () => {
  return (
    <nav>
    <img src={logo} alt="" />
    <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonals</li>
        <li>Contact us</li>
    </ul>
    </nav>
  )
}

export default Navbar