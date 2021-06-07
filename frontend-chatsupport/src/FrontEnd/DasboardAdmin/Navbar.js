import React from 'react'
import './navbar.css'
import image1 from '../Image/dppapp-white.png';
import image2 from '../Image/LOGO_PKK_ONLY-300x295.png';
import image3 from '../Image/Carik logo.png';
import {navbar, Dropdown} from 'react-bootstrap';   


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light justify-content-between ">
            <div className="Logo">
            <img className="logo-dppapp1" src={image1}></img>
             <img className="logo-pkk1" src={image2}></img>
             <img className="logo-carik1" src={image3}></img>
            </div>
            <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" id="dropdon" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Admin 1</a>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#">SignOut</a>
      <a className="dropdown-item" href="#">Change Password</a>
      <a className="dropdown-item" href="#">Edit Profile</a>
    </div>
  </li>
</nav>
        // <div className="Navbar">
        //     <img className="logo-dppapp1" src={image1}></img>
        //     <img className="logo-pkk1" src={image2}></img>
        //     <img className="logo-carik1" src={image3}></img>
        // </div>
    )
}

export default Navbar
