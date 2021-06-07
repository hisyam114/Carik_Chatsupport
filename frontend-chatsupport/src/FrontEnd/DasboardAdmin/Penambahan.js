import React from 'react'
import './penambahan.css'
import Editlogo from '../Image/edit.PNG'
import Deletelogo from '../Image/delete-removebg-preview.png'


function Penambahan() {
    return (
            <tr>
            <td>Operator 1</td>
            <td>username_1</td>
            <td>passworduser1</td>
            <td><button className="btn btn-outline-primary"><img className="edit-logo" src={Editlogo}/>Edit</button></td>
            <td><button type="button" class="btn btn-outline-danger"><img className="edit-logo" src={Deletelogo}/>delete</button></td>
            </tr>
           
    )
}

export default Penambahan