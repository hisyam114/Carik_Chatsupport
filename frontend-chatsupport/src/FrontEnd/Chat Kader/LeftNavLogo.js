import React from 'react'
import image1 from '../Image/dppapp-white.png';
import image2 from '../Image/LOGO_PKK_ONLY-300x295.png';
import image3 from '../Image/Carik logo.png';
import './chatkader.css'

 function LeftNavLogo() {
    return (
        <div className="form-content-logo">
            <img className="logo-dppapp2" src={image1}></img>
            <img className="logo-pkk2" src={image2}></img>
            <img className="logo-carik2" src={image3}></img>
            <label className="welcome">Selamat Datang di Bantuan Layanan Kader</label>
        </div>
    )
}
export default LeftNavLogo
