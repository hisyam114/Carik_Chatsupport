import React from 'react';
import './LoginAdmin.css';
import Textfield from './Textfield';
import './textfield.css';
import Logo from './Logo';
import { useHistory, withRouter} from "react-router-dom";
import image1 from '../Image/dppapp-white.png';
import image2 from '../Image/LOGO_PKK_ONLY-300x295.png';
import image3 from '../Image/Carik logo.png';
import axios from "axios";

function LoginAdmin(){

  let history = useHistory();
  const usernameRef = React.createRef();
  const passwordRef = React.createRef();
  
  const loginUser = (props) => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    props.preventDefault();
    axios
      .post("http://localhost:4000/operator/login-operator", {
        username,
        password,
      })
      .then((response) => {
        window.alert(response.data.message);
        localStorage.setItem("CC_Token", response.data.token);
        // window.alert("sucess login");
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
          window.alert("failed login");
      });
  };

  
  var inputtext = "Masukkan Username Anda";
  return (
    <div className="form-content-back">
     <div className="form-content-left">
      <form className="form">
        <h1>LOGIN</h1>
        <div className="form-input-label">
        <h4>Username :</h4>
        <label htmlFor="username" className="form-label">
        <input type="username" name="username" placeholder="username" id="username" className="form-input" ref={usernameRef}></input>
        </label>
        <h4>Password :</h4>
        <label htmlFor="password" className="form-label">
        <input type="password" name="password" placeholder="your password" id="password" className="form-input" ref={passwordRef}></input>
        </label>
        </div>
          <button className="form-input-btn" type="submit"  onClick={loginUser}>LOGIN</button>
      </form>
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

export default withRouter(LoginAdmin); 
