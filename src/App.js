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
import Soon from './Choice/Soon';
import Sorry from './Choice/Sorry';
import Home from './HomePage/Home';

import ForgetS from './Authenciation/ForgetS';
import Forgot from './Authenciation/Forgot';
import Verify from './Authenciation/Verify';
import AuthenticatedRoute from './Authenciation/AuthenciatedRoute';
import { createBrowserHistory } from "history";

class App extends React.Component {

  render() {
    const hist = createBrowserHistory();
    return (
      <div>
        <Router history={hist}>
          {/* <MenuComponent /> */}
          <>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/add/" component={SelectPlace} />
              <Route path="/chose/" component={Choice} />
              <AuthenticatedRoute path="/dash/" component={DashBoard} />
              <Route path="/login/" component={Login} />
              <Route path="/sign/" component={SignUp} />
              <Route path="/thanks/" component={ThankYOu} />
              <Route path="/verify/" component={Verify} />

              <Route path="/Message/" component={Message} />
              <AuthenticatedRoute path="/Soon/" component={Soon} />
              <AuthenticatedRoute path="/Sorry/" component={Sorry} />
              <Route path="/Home/" component={Home} />
              <Route path="/Forgot/" component={Forgot} />
              <Route path="/forgets/" component={ForgetS} />
           
           />
        </Switch>
          </>

        </Router>
      </div>
    );
  }
}
export default App;
