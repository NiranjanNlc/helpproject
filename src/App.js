import React from 'react';
import logo from './logo.svg';
import './App.css';
import Choice from './Choice/Choice';
import SelectPlace from './SelectPlace/SelectPlace';
import DashBoard from './DashBoard/DashBoard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUp from './Authenciation/SignUp';
import Login from './Authenciation/Login';
import MenuComponent from './NavBAr/MenuComponent';
import ThankYOu from './Authenciation/ThankYou';
import Message from './Authenciation/Message';
import Soon from './Choice/Soon';
import Sorry from './Choice/Sorry';
import Home from './HomePage/Home';
import Policy from './HomePage/Terms';
import Terms from './HomePage/Policy';

import ForgetS from './Authenciation/ForgetS';
import Forgot from './Authenciation/Forgot';
import Verify from './Authenciation/Verify';
import AuthenticatedRoute from './Authenciation/AuthenciatedRoute';
import { createBrowserHistory } from "history";
import Options from './Suggestion/Options';
import Expiry from './Suggestion/Expiry';
import Loading from './HomePage/Loading';
import  AgainVerify from './Authenciation/AgainVerify';
import AgainVerifyS from './Authenciation/AgainVerifyS';
import Contact from './HomePage/Contact';
import Contacts from './HomePage/Contacts';

class App extends React.Component {

  render() {
    const hist = createBrowserHistory();
    return (
      <div>
        <Router >
          {/* <MenuComponent /> */}
          <>
            <Switch>
              <AuthenticatedRoute path="/" exact component={DashBoard} />
              <Route path="/add/" component={SelectPlace} />
              <AuthenticatedRoute path="/chose/" component={Choice} />
              <AuthenticatedRoute path="/dash/" component={DashBoard} />
              <Route path="/login/" component={Login} />
              <Route path="/sign/" component={SignUp} />
              <Route path="/thanks/" component={ThankYOu} />
              <Route path="/verification/" component={Verify} />

              <Route path="/Message/" component={Message} />
              <Route path="/Soon/" component={Soon} />
              <Route path="/Sorry/" component={Sorry} />
              <Route path="/Home/" component={Home} />
              {/* <Route path="/policy/" component={Policy} /> */}
              <Route path="/policy/" component={Terms} />
              <Route path="/Terms/" component={Policy} />
              <Route path="/Forgot/" component={Forgot} />
              <Route path="/forgets/" component={ForgetS} />
              <Route path="/options/" component={Options} />
              <Route path="/expiry/" component={Expiry} />
              <Route path="/load/" component={Loading} />
              <Route path="/againverify/" component={AgainVerify} />

              <Route path="/againverifys/" component={AgainVerifyS} />
              <Route path="/Contact/" component={Contact} />
              <Route path="/contacts/" component={Contacts} />
              {/* <Route path="/terms/" component={Terms} /> */}

              {/* /> */}
            </Switch>
          </>

        </Router>
      </div>
    );
  }
}
export default App;
