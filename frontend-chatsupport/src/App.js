import './App.css';
import DasboardAdmin from './FrontEnd/DasboardAdmin/DasboardAdmin';
import LoginAdmin from './FrontEnd/Login/LoginAdmin';
import ChatKader from './FrontEnd/Chat Kader/ChatKader'
import LoginKader from './FrontEnd/LoginKader/LoginKader';
import PilihKategori from './FrontEnd/LoginKader/PilihKategori';

import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TambahOperator from './FrontEnd/DasboardAdmin/TambahOperator';
import LogOperator from './FrontEnd/DasboardAdmin/LogOperator';


function App() {
  return (
    <Router>
    <div className="App">
      {/* <LoginKader/> */}
    </div>
    <Switch>
      <Route exact path="/">
          <LoginKader />
        </Route>
        <Route exact path="/admin">
          <LoginAdmin/>
        </Route>
        <Route path="/kategori">
          <PilihKategori />
        </Route>
        <Route path="/chatkader">
          <ChatKader />
        </Route>
        <Route path="/dashboardadmin">
          <DasboardAdmin/>
        </Route>
    </Switch> 
    </Router>
  );
}

export default App;
