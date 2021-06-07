import React from 'react'
import './LoginKader.css'
import image1 from '../Image/dppapp-white.png'
import image2 from '../Image/LOGO_PKK_ONLY-300x295.png'
import image3 from '../Image/Carik logo.png'
import Textfield from '../Components/Textfield.js'
import { Router } from 'react-router'
import { useHistory } from "react-router-dom";


const LoginKader = () => {
    let history = useHistory();
    const Login = ()=> {
          history.push("/kategori");
    }
    return (
        <div className="form-content-back">
            <div className="form-content-left">
            <form className="form">
                <div className="headers">
                    <h2 style={{fontSize:"40px"}}><b>Masuk</b></h2>
                    <h5>Silahkan masuk untuk melanjutkan</h5>
                </div>
                <div className="form-input-label">
                    <Textfield />
                </div>
                <button className="form-input-btn" type="button" onClick={()=> Login()}>Selanjutnya</button>
            </form>
            </div>
        <div className="image-content-right">
        </div>
        <div className="image-content-right">
            <img className="logo-dppapp" src={image1}></img>
            <img className="logo-pkk" src={image2}></img>
            <img className="logo-carik" src={image3}></img>
            <p className="p-awal">Bantuan Layanan Kader</p>
        </div>
    </div>
    )
}

export default LoginKader
