import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenciationService from '../Authenciation/AuthenciationService'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../HomePage/Home.css'
// import Link from '@material-ui/core/Link';
import './Bootstrap.css'

class MenuComponent extends Component {

    render() {
        const loggedIn = AuthenciationService.isUserLoggedIn();
           console.log(loggedIn)
        return (
            <header>>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">

                    <AppBar>
                        <Toolbar>
                            <div><a href="#" className="navbar-brand">KlyGo</a></div>
                            <ul className="navbar-nav">
                                {loggedIn && <li><Link className="nav-link" to="/add">Select Place</Link></li>}
                                {loggedIn && <li><Link className="nav-link" to="/chose">Ask for help</Link></li>}
                                {loggedIn && <li><Link className="nav-link" to="/dash">DashBoard</Link></li>}
                                {/* 
                     {loggedIn &&   <li><Link className="nav-link" to="/add">TeacherForm</Link></li>}
                     {loggedIn &&   <li><Link className="nav-link" to="/register">RegisterSchool</Link></li>} */}

                            </ul>
                            <ul className="navbar-nav navbar-collapse justify-content-end">
                                {!loggedIn && <li><Link className="nav-link" to="/login/">Login</Link></li>}
                                {!loggedIn && <li><Link className="nav-link" to="/sign">SignUp </Link></li>}
                                {loggedIn && <li><Link className="nav-link" to="/" onClick={AuthenciationService.logout}>Logout</Link></li>}
                             {/* {loggedIn && <li><Link className="nav-link" to="/Message">Message </Link></li>}
                            */} 
                           </ul>

                        </Toolbar>
                    </AppBar>
                </nav>
            </header>
        )
    }
}

export default withRouter(MenuComponent)