import React from 'react'
import Textfield from '../Components/Textfield'
import './PilihKategori.css'
import image1 from '../Image/dppapp-white.png'
import image2 from '../Image/LOGO_PKK_ONLY-300x295.png'
// import image3 from './Image/Carik logo.png'
import {CarikLogo} from '../Image/index'
import { useHistory } from 'react-router'
import Form from 'react-bootstrap/Form'



const PilihKategori = () => { 
    let history = useHistory()
    const Pilih = () => {
        history.push("/chatkader")
    }
    return (
        <div className="form-content-back">
            <div className="form-content-left">
                <form className="form">
                    <div className="headers" style={{marginBottom:"-30px", marginTop:"-55px"}}>
                        <h3 style={{fontSize:"25px", textAlign:"center"}}><b>Pilih Kategori Layanan</b></h3>
                    </div>
                    <div className="form-input-label">
                        <form className="form">
                            <Form.Group>
                                    <div className="inputGroup">
                                    <Form.Check 
                                            type="radio"
                                            id="radio1"
                                            name = "kategori"
                                            label="Keluarga"
                                    />
                                </div>
                                <div className="inputGroup">
                                    <Form.Check 
                                        type="radio"
                                        id="radio2"
                                        name = "kategori"
                                        label="KRT"
                                    />
                                </div>
                                <div className="inputGroup">
                                    <Form.Check 
                                        type="radio"
                                        id="radio3"
                                        name = "kategori"
                                        label="Individu"
                                    />
                                </div>
                                <div className="inputGroup">
                                    <Form.Check 
                                        type="radio"
                                        id="radio4"
                                        name = "kategori"
                                        label="Bangunan"
                                    />
                                </div>
                                <div className="inputGroup">
                                    <Form.Check 
                                        type="radio"
                                        id="radio5"
                                        name = "kategori"
                                        label="Kelompok"
                                    />
                                </div>
                                <div className="inputGroup">
                                    <Form.Check 
                                        type="radio"
                                        id="radio6"
                                        name = "kategori"
                                        label="Lain-lain"
                                    />
                                </div>
                            </Form.Group>
                        </form>
                    </div>
                    <button className="form-input-btn" type="button" onClick={()=>Pilih()}>Selanjutnya</button>
                </form>
            </div>
        <div className="image-content-right">
        </div>
        <div className="image-content-right">
            <img className="logo-dppapp" src={image1}></img>
            <img className="logo-pkk" src={image2}></img>
            <img className="logo-carik" src={CarikLogo}></img>
            <p className="p-awal">Bantuan Layanan Kader</p>
        </div>
    </div>
    )
}

export default PilihKategori
