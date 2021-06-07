import React, { useState } from 'react'
import './tambahoperator.css'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

function TambahOperator(){

    let history = useHistory()
  const fnameRef = React.createRef();
  const lnameRef = React.createRef();
  const usernameRef = React.createRef();
  const nikRef = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

    const registerUser = (props) => {
    const fname = fnameRef.current.value;
    const lname = lnameRef.current.value;
    const username = usernameRef.current.value;
    const nik = nikRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    axios
      .post("http://localhost:4000/operator/add-operator", {
        fname,
        lname,
        username,
        password,
        email,
        nik,
        
      })
      .then((response) => {
        window.alert("sucess");
        history.push("/dashboardadmin");
      })
      .catch((err) => {
        // console.log(err);
        if (
          err &&
          err.response &&
          err.response.data &&
          err.response.data.message
        )
          window.alert("failed");
      });
  };

    return (
        <div className="dashboard">
            <h1 className="title">TAMBAH OPERATOR</h1>
            <div className="box-items">
                <div className="form-row">
                    <div className="form-group col-md-6" >
                       <h6>Firstname : </h6>
                       <input className="inputname" id="inputfirstname" placeholder="First Operator" ref={fnameRef}/>
                    </div>
                    <div className="form-group col-md-6">
                        <h6>Lastname : </h6>
                        <input type="lastname" className="inputname" id="inputlastname" placeholder="Last Name Operator" ref={lnameRef}/>
                    </div>
                </div>
                <div className="form-group">
                    <h6>Username :</h6>
                    <input type="text" className="form-control1" id="inputAddress" placeholder="Username Operator" ref={usernameRef}/>
                </div>
                <div className="form-group">
                    <h6>Email :</h6>
                    <input type="email" className="form-control1" id="inputAddress3" placeholder="Email Operator" ref={emailRef}/>
                </div>
                <div className="form-group">
                    <h6>Password :</h6>
                    <input type="password" className="form-control1" id="inputAddress2" placeholder="Password Operator" ref={passwordRef}/>
                </div>
                <div className="form-group">
                    <h6>NIK :</h6>
                    <input type="text" className="form-control1" id="inputAddress3" placeholder="NIK Operator" ref={nikRef}/>
                </div>
                <button type="submit" className="btn btn-primary btn-lg active" onClick={registerUser}>Sign in</button>
            </div>
            
        </div>
    )
}

export default TambahOperator
