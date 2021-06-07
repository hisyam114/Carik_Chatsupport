import React from 'react'
import image1 from '../Image/dppapp-white.png';
import image2 from '../Image/LOGO_PKK_ONLY-300x295.png';
import image3 from '../Image/Carik logo.png';
import './LoginAdmin.css'

function Logo() {
    return (
        <div className="logo">
            <img className="logo-dppapp" src={image1}></img>
            <img className="logo-pkk" src={image2}></img>
            <img className="logo-carik" src={image3}></img>
            <p className="text-item"> Bantuan Layanan Kader</p>
        </div>
    )
}

export default Logo
