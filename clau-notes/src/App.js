import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import  Container  from './components/Container';



function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/mynotes" component={Container} />
      </Switch>
    </Router>

    
  );
}

export default App;
