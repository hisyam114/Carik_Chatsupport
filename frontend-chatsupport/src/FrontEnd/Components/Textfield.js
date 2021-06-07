import React from 'react'

const Textfield = () => {
    let value = ""
    return (
        <div className="form-inputs-2">
            <label className="form-label">
                <input type="text" name="textfield" className="form-input" placeholder={value}></input>
            </label>
        </div>
    )
}

export default Textfield
