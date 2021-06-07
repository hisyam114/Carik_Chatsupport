import './textfield.css';
import React, {useState} from 'react';

function Textfield(){
  return (
    <div className="form-inputs">
        <label htmlFor="textfield" className="form-label">
        <input type="text" name="textfield" className="form-input"></input>
        </label>
      </div>
    );
}

export default Textfield
