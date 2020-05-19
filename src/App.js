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
import Verify from './Authenciation/Verify';
import AuthenticatedRoute from './Authenciation/AuthenciatedRoute';

class App extends React.Component {
  
   render()
   {
  return ( 
    <div>


      <Router>
        <MenuComponent />
        <>
          <Switch>
            <Route path="/help/react/" exact component={Login}/>
            <Route path="/help/react/add/" component={SelectPlace} />
            <AuthenticatedRoute  path="/help/react/chose/" component={Choice} />
            <AuthenticatedRoute path="/help/react/dash/" component={DashBoard} />
            <Route path="/help/react/login/" component={Login} />
            <Route path="/help/react/sign/" component={SignUp} />
            <Route path="/help/react/thanks/" component={ThankYOu} />
            <Route path="/help/react/verify/" component={Verify} />

            <Route path="/help/react/Message/" component={Message} />
            <AuthenticatedRoute path="/help/react/Soon/" component={Soon} />
            <AuthenticatedRoute path="/help/react/Sorry/" component={Sorry} />
           />
        </Switch>
        </>

      </Router>
    </div> 
    );
}
}
export default App;
