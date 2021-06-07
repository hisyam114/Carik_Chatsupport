import React from 'react'
import './navbarstyle.css'
import LogoOperator from '../Image/Capture-removebg-preview.png'
import LogoDashboard from '../Image/Capture.PNG'
import LogoTambah from '../Image/Capture1.PNG'
import Dashboard from './Dashboard'
import { useHistory } from 'react-router'


function NavbarSamping() {
    let history = useHistory()
    const TambahOpr = (tanda)=>{
        if(tanda == 1){
        history.push("/dashboardadmin/tambahoperator")
        }else if(tanda == 2){
            history.push("/dashboardadmin")
        }else{
            history.push("/dashboardadmin/logoprerator")
        }
    }
    return (
        <nav className="navs-left">
            <div className="col-3">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" onClick={()=>TambahOpr(2)} role="tab" aria-selected="true"><img className="logo" src={LogoDashboard}></img>Dashboard</a>
                    <a className="nav-link" id="v-pills-profil-tab" data-toggle="pill" onClick={()=>TambahOpr(1)} role="tab"  aria-selected="false"><img className="logo" src={LogoOperator}></img>Tambah Operator</a>
                    <a className="nav-link" id="v-pills-kontak-tab" data-toggle="pill" onClick={()=>TambahOpr(3)} role="tab"  aria-selected="false"><img className="logo" src={LogoTambah}></img><div/>Log Operator</a>
                </div>
            </div>
        </nav>
    )
}

export default NavbarSamping