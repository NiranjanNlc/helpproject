import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux"
import { performLogout, logout } from '../Authenciation/Redux/Actions/Actions'

class NavbarPage2 extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }


    render() {
        return (
            <Router>
                <MDBNavbar id="newNav" color="default-color" light expand="md">
                    <MDBNavbarBrand>
                        <Link to="/home">
                            <img src={window.location.origin + '/images/logo.png'} className="img-fluid" alt="logo" />
                        </Link>
                        <h1>Reset</h1>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem active>
                                <MDBNavLink to="#!">Home</MDBNavLink>
                            </MDBNavItem>

                            <MDBNavItem>
                                <MDBNavLink to="#!">Sign up</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!">Privacy policy</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!">Terms of Use</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBNavLink to="#!">login</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </Router>
        );
    }
}

export default (NavbarPage2);