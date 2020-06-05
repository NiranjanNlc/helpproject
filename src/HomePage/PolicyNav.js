import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux"
import { performLogout, logout, getAuthenticatedUser } from '../Authenciation/Redux/Actions/Actions'

class PolicyNav extends Component {
    state = {
        isOpen: false
    };
    async componentDidMount() {
        //  console.log(this.props.data)
        await this.props.dispatch(getAuthenticatedUser())
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    onLogin = (event) => {
        // window.location.replace("/home/")  
        return this.props.history.push({
            pathname: '/home/',
            detail: true
        });
    }
    onSubmit = (event) => {
        { this.props.dispatch(logout()) }
        //  window.location.reload(false);
        // this.props.history.push("/dash/")
        //      return <Redirect push to="/" />;    
    }

    render() {
        const loggedIn = this.props.data.isAuthenticated
        console.log(loggedIn)
        return (
            //   <Router>
            <MDBNavbar id="newNav" color="default-color" light expand="md">
                <MDBNavbarBrand>
                    <Link to="/home">
                        <img src={window.location.origin + '/images/logo.png'} className="img-fluid" alt="logo" />
                    </Link>
                    <h1>Privacy Policy</h1>

                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            {/* <MDBNavLink to="#!">Home</MDBNavLink> */}
                            <Link className="nav-link" to="/home"><button className="nav-link"

                            >Home</button></Link>
                        </MDBNavItem>

                        <MDBNavItem>
                            {/* <MDBNavLink to="#!">Sign up</MDBNavLink> */}
                            {!loggedIn && <Link className="nav-link" to="/sign"><button className="nav-link"

                            >SignUp</button></Link>}
                        </MDBNavItem>
                        <MDBNavItem>

                            {/* <MDBNavLink to="#!">Privacy policy</MDBNavLink> */}
                            <Link className="nav-link" to="/policy">
                                <button className="nav-link">Privacy Policy </button></Link>

                        </MDBNavItem>
                        <MDBNavItem>
                            <Link className="nav-link" to="/terms">
                                <button className="nav-link">Terms of use  </button></Link>

                            {/* <MDBNavLink to="#!">Terms of Use</MDBNavLink> */}
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link className="nav-link" to="/Contact">
                                <button className="nav-link">Contact Us  </button></Link>

                            {/* <MDBNavLink to="#!">Terms of Use</MDBNavLink> */}
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            {loggedIn && <li><button className="nav-link user"
                                onClick={this.onSubmit}
                            >Logout</button></li>}
                            {!loggedIn && <li><button className="nav-link user"
                                onClick={this.onLogin}
                            >Login</button></li>}
                            {/* <MDBNavLink to="#!">login</MDBNavLink> */}
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
            // </Router>
        );
    }
}
const mapStateToProps = state => {
    return {
        data: state
    };
};

export default connect(mapStateToProps)(withRouter(PolicyNav));