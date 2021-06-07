import React from 'react'
import './dashboard.css'
import Penambahan from './Penambahan'

function Dashboard() {
    return (
        <div className="dashboard">
            <h1 className="title">OPERATOR CHATSUPPORT</h1>
             <div id="box-items">
               <table className="table">
                 <thead>
                   <tr>
                     <th scope="col">Nama Operator</th>
                     <th scope="col">Username</th>
                     <th scope="col">Password</th>
                     <th scope="col">Edit</th>
                     <th scope="col">Delete</th>
                   </tr>
                 </thead>
                 <tbody>
                 <Penambahan/>
                 </tbody>
                   
                 
               </table>
            </div>
        </div>
       
    )
}

export default Dashboard
