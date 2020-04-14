import React from 'react';
import logo from './logo.svg';
import './App.css';
import Choice from './Choice/Choice';
import SelectPlace from './SelectPlace/SelectPlace';
import DashBoard from './DashBoard/DashBoard';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import SignUp from './Authenciation/SignUp';
import Login from './Authenciation/Login';


function App() {
  return (
    <div>
    <Router>
        <>
        <Switch>
          <Route path="/" exact component={Login} />
           <Route path="/add/" component={SelectPlace} />
          <Route path="/chose/" component={Choice} />
        </Switch>
      </>

    </Router>
</div>
  );
}

export default App;
