import React from 'react';
import logo from './logo.svg';
import './App.css';
import Choice from './Choice/Choice';
import SelectPlace from './SelectPlace/SelectPlace';
import DashBoard from './DashBoard/DashBoard';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import SignUp from './Authenciation/SignUp';
import Login from './Authenciation/Login';
import MenuComponent from './NavBAr/MenuComponent';
import ThankYOu from './Authenciation/ThankYou';
import Message from './Authenciation/Message';

function App() {
  return (
    <div>


      <Router>
        <MenuComponent />
        <>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/add/" component={SelectPlace} />
            <Route path="/chose/" component={Choice} />
            <Route path="/dash/" component={DashBoard} />
            <Route path="/login/" component={Login} />
            <Route path="/sign/" component={SignUp} />
            <Route path="/thanks/" component={ThankYOu} />
            <Route path="/Message/" component={Message} />

           />
        </Switch>
        </>

      </Router>
    </div>
  );
}

export default App;
