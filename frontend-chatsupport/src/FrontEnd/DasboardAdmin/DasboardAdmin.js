import React from 'react'
import Dashboard from './Dashboard'
import LogOperator from './LogOperator'
import Navbar from './Navbar'
import NavbarSamping from './NavbarSamping'
import TambahOperator from './TambahOperator'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function DasboardAdmin() {
    return (
        
        <div className="row">
        <Router>
           <Navbar/>
           <div>
           <NavbarSamping/>
           </div>
           <Switch>
               <Route path="/dashboardadmin/tambahoperator">
                    <TambahOperator/>
                </Route>
                <Route path="/dashboardadmin/logoperator">
                    <LogOperator/>         
                </Route>
            </Switch>
        </Router>
        </div>
        
    )
}

export default DasboardAdmin
