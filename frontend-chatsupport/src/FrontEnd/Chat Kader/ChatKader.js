import React from 'react'
import Chatbox from './Chatbox'
import './chatkader.css'
import Footer from './Footer'
import LeftNavLogo from './LeftNavLogo'
import NavbarChat from './NavbarChat'

const ChatKader = () => {
    return (
        <div className="form-content">
           <LeftNavLogo/>
           <div>
           <NavbarChat/>
           </div>
           <Chatbox/>
           <Footer/>
           
        </div>
    )
}

export default ChatKader
