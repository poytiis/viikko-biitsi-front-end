import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LogIn from './components/LogIn/LogIn';
import Results from './components/Results/Results';

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path='/viikon-tulokset' component={Results}/>
        <Route exact path='/' component={LogIn} />

      </Switch>
    </Router>
  );
}

export default App;
