import React from 'react'
import './chatkader.css'
import DasboardAdmin from '../DasboardAdmin/DasboardAdmin'
import { Avatar } from 'react-chat-elements'
import image3 from '../Image/Carik logo.png';
import { Button } from 'bootstrap';

function NavbarChat() {
    return (
        <nav className="navbar" id="navbarchat">
            <img className="icon rounded-circle" src={image3}></img>
            <span className="navbar-brand mb-0 h1">Operator 1<br/><a class="category">Keluarga</a></span>
            <button type="button" className="buttons">Akhiri Percakapan</button>
        </nav>
    )
}

export default NavbarChat
