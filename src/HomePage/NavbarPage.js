import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux"
import { performLogout, logout } from '../Authenciation/Redux/Actions/Actions'

class NavbarPage extends Component {
    state = {
        isOpen: false,
        username: ''
    };

    onSubmit = (event) => {
        { this.props.dispatch(logout()) }
    }
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }


    render() {
        const loggedIn = this.props.data.isAuthenticated
        console.log(loggedIn)
        return (
            // <Router>
            <header>
                <MDBNavbar color="default-color" light expand="md">
                    <MDBNavbarBrand>
                        <Link to="/home">
                            <img src={window.location.origin + '/images/logo.png'} className="img-fluid" alt="logo" />
                        </Link>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left className="cMenu">
                            <MDBNavItem active>
                                {/* <MDBNavLink to="/#/chose">Home</MDBNavLink> */}
                                {loggedIn && <Link className="nav-link" to="/home"><button className="nav-link"

                                >Home</button></Link>}
                            </MDBNavItem>
                            <MDBNavItem>
                                {/* <MDBNavLink to="#!">Ask Help</MDBNavLink> */}
                                {loggedIn && <Link className="nav-link" to="/chose" ><button className="nav-link"

                                >Chose </button></Link>}
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>

                            <MDBNavItem>
                                {loggedIn && <li><button className="nav-link user"
                                    onClick={this.onSubmit}
                                >Logout</button></li>}
                                {/* <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                            Username
                                    </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default">
                                            <MDBDropdownItem href="#!">Logout</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown> */}
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </header>
            // </Router>
        );
    }
}
const mapStateToProps = state => {
    return {
        data: state
    };
};

export default connect(mapStateToProps)(NavbarPage);