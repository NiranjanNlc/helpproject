import React, { Component } from 'react'

import { connect } from "react-redux"
import { getAuthenticatedUser, login, logout } from "../Authenciation/Redux/Actions/Actions"
//import  httpResource from '../Authenciation/httpResource'
import './Home.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'
import httpResource from '../Authenciation/httpResource'
//import { getAuthenticatedUser, login, logout } from "../Authenciation/Redux/Actions/Actions"
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            fields: {},
            errors: {}
        };

        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.submitData = this.submitData.bind(this)
        this.checkLogin = this.checkLogin.bind(this)
        this.validateForm = this.validateForm.bind(this)
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handleChange(e) {
        console.log(e.target.value)
        // const { name, value } = event.target
        // this.setState({
        //   [name]: value
        // })

        let fields = this.state.fields;
        let errors = this.state.errors;
        fields[e.target.name] = e.target.value;
        errors[e.target.name] = ''
        this.setState({
            fields
        });
    }

    validateForm() {
        let formIsValid = true;
       // console.log(this.state.rid)
        let fields = this.state.fields;
        let errors = {};
        //    let formIsValid = true;

        if (!fields["rid"]) {
            formIsValid = false;
            errors["rid"] = "*Please enter your username.";
        }
        if (!fields["psw"]) {
            formIsValid = false;
            errors["psw"] = "*Please enter your password.";
        }
        this.setState({
            errors: errors
        })
        // if (!this.state.rid) {
        //   formIsValid = false;
        //   console.log("hello")
        //   this.setState({
        //     riderror: 'Please enter valid username'
        //   }, function () {
        //     console.log(this.state.riderror);
        //   })
        //   console.log(this.state.riderror)
        // }
        // if (!this.state.psw) {
        //   formIsValid = false;
        //   console.log("hello")
        //   this.setState({
        //     pswerror: 'Incorrect Password'
        //   }, function () {
        //     console.log(this.state.pswerror);
        //   })
        //   console.log(this.state.pswerror)
        // }

        return formIsValid;
    }


    submitData(event) {

        event.preventDefault();
       // console.log("hello hunny bunny ")
        const { name, value } = event.target
        // this.setState({
        //   [name]: value
        // })

        const signIn = {
            usernameOrEmail: this.state.fields.rid,
            password: this.state.fields.psw
        };
        if (this.validateForm()) {
            // AuthenciationService
            //   .executeJwtAuthenticationService(signIn)
            //   .then((response) => {
            //     console.log(response)
            //     console.log(response.data.accessToken)
            //     console.log(response.data.role)
            //     AuthenciationService.registerSuccessfulLoginForJwt(response.data.role, response.data.accessToken)
            //     console.log("trying to push ")

            //     this.props.history.push("/dash/")
            //     window.location.reload(false);
            //     //  window.location.reload(false);   

            //   }).catch(() => {

            //     let errors = {};
            //     errors["rid"] = "*Incorrect username or password";
            //     this.setState({
            //       errors: errors
            //     })
            //     console.log("error")
            //     this.setState({ showSuccessMessage: false })
            //     this.setState({ hasLoginFailed: true })

            //   })
            httpResource.post("/api/auth/login", signIn)
                .then((response) => {
                    if (response.status === 200) {
                        //     this.props.dispatch(getAuthenticatedUser());
                        // console.log("logged in ..")
                        // console.log("trying to open login page")
                        this.props.history.push("/dash/")
                        window.location.reload(false);
                    }
                }).catch(() => {
                    let errors = {};
                    errors["rid"] = "*Incorrect username or password";
                    this.setState({
                        errors: errors
                    })
                    console.log("error")
                    this.setState({ showSuccessMessage: false })
                    this.setState({ hasLoginFailed: true })
                })
            //   console.log(response)

        }
        return;
    }

    componentDidMount() {
        // this.checkLogin()

    }

    checkLogin() {
        // console.log(store.getState())
        console.log(this.props.data)
        if (this.props.data.isAuthenticated === true) {
            console.log("trying to open login page")
            this.props.history.push("/dash/")
            window.location.reload(false);
        }
    }


    render() {
        this.checkLogin()
        return (
            <div id="home">
                <section id="topRibbon">
                    <div className="container">
                        <div className="row ">
                            <div className="col-sm-12" align="center">
                                <Link to="#">Need urgent support? Get help from a crisis service →</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="mainFace">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 logo">
                                <Link to="/Home/">
                                    <img src={window.location.origin + '/images/logo.png'} className="img-fluid" alt="logo" />
                                </Link>
<<<<<<< HEAD
                                <a 
                               // href="#"
                                 onClick={this.toggle}>Log in</a>
=======
                                <a href="/login" onClick={this.toggle}>Log in</a>
>>>>>>> c5fcedff0d8f583ccad026d4da21932ddf34bfc6
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                    <ModalHeader toggle={this.toggle}>Log in</ModalHeader>
                                    <ModalBody>
                                        <section id="formWrap" >
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="formWrap">
                                                            <form>
                                                                <div className="form-group">
                                                                    <label>Username</label>
                                                                    <input type="text" name='rid' value={this.state.fields.rid} onChange={this.handleChange} className="form-control" placeholder="" required />
                                                                    <div className="errorMessage">{this.state.errors.rid}</div>
                                                                    <label>Password</label>
                                                                    <input type="password" name='psw' value={this.state.fields.psw} onChange={this.handleChange} className="form-control" placeholder="" required />
                                                                    <div className="errorMessage">{this.state.errors.psw}</div>

                                                                </div>
                                                                <div className="col-sm-12" align="center">
                                                                    <button type="submit" onClick={this.submitData} className="btn sub_help"> LOGIN </button>
                                                                </div>
                                                                <div className="cov-rem clearfix">
                                                                    <div className="rem">
                                                                        <input type="checkbox" required />
                                                                        <div class="invalid-feedback">
                                                                            Please provide your Name
                                                                </div>
                                                                        <label for="remember"> Remember Me?</label>
                                                                    </div>
                                                                    <div className="rem">
                                                                        <p className=" small"><Link to="/forgot">Forgot Password?</Link></p>
                                                                    </div>
                                                                </div>
                                                                <hr />
                                                                <p className="noac">Not member yet? <Link to="/sign/"><a>create an account</a></Link> to join </p>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section >
                                    </ModalBody>
                                </Modal>
                            </div>
                        </div>
                        <div className="row secGap">
                            <div className="col-sm-7">
                                <h1>
                                    Welcome to Klygo !
                                </h1>
                                <p>Free, safe and anonymous support</p>
                                <Link to="/sign/" className="btn vMore">Join Klygo</Link>
                            </div>
                            <div className="mobile">
                                <img src={window.location.origin + '/images/test2.png'} className="img-fluid" alt="logo" />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="offer" className="secGap">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 secTitle">
                                <h2>Just some of the things you'll find on Klygo</h2>
                            </div>
                            <div className="col-md-6 col-lg-3 col-sm-6 mobPad">
                                <i class="fas fa-utensils"></i>
                                <h3>Resturant</h3>
                                <p>
                                    Recommendation of the asian, chinese and contienental food
                                    based on your cost.
                                     </p>
                            </div>
                            <div className="col-md-6 col-lg-3 col-sm-6 mobPad">
                                <i class="fas fa-car"></i>
                                <h3>Garage</h3>
                                <p> Know about the nearest garage with the suggestion of the nearby user of ours</p>
                            </div>
                            <div className="col-md-6 col-lg-3 col-sm-6 mobPad">
                                <i class="fas fa-shopping-cart"></i>
                                <h3>Groceries</h3>
                                <p>
                                    Get the help and suggestion about the groccery nearby of any location
                                 </p>
                            </div>
                            <div className="col-md-6 col-lg-3 col-sm-6 mobPad">
                                <i class="fas fa-comment-alt"></i>
                                <h3>Other</h3>
                                <p>
                                    New to places,know about  chemist,takeaways,hotels and the other
                                    with the help of our user.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="testimonial">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 tImage">
                                <img src={window.location.origin + '/images/modal1.png'} className="img-fluid testiModal" alt="image" />
                            </div>
                            <div className="col-md-12 col-lg-6 col-sm-6">
                                <h4>What Does our Community Saying</h4>
                                <blockquote style={{
                                    backgroundImage: "url(" + "/images/marks.png" + ")",
                                    backgroundPosition: 'bottom 0 right 1.875rem',
                                    backgroundSize: '4.688rem 4.563rem',
                                    paddingBottom: '1.25rem',
                                    backgroundRepeat: 'no-repeat'
                                }}>"I really like how we can find help   and have help from others. It makes me feel to give and talk help from this platform. Great App Nice Job !"</blockquote>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="needTalk" className="secGap">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-7 col-lg-6 col-sm-6">
                                <h3>Our community is here to support you through anything in any location.Near or far.</h3>
                                <Link to="/sign" className="vMore">Join Us</Link>                            </div>
                            <div className="col-md-5 col-lg-6 col-sm-6 needTalk">
                                <img src={window.location.origin + '/images/needHelp.png'} className="img-fluid" alt="helpIcon" />
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <section id="footNav">
                        <div className="container">
                            <div className="row ">
                                <div className="col-sm-12">
                                    <ul>
                                        {/* <li><Link to="#">Meet the team</Link></li> */}
                                        <li><Link to="/policy">Privacy policy</Link></li>
                                        <li><Link to="/Terms">Terms of Use</Link></li>
                                        {/* <li><Link to="#">Confidentiality</Link></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="footBTM">
                        <div className="container">
                            <div className="row ">
                                <div className="col-sm-12">
                                    <p>© Klygo 2020</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </footer>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        data: state
    };
};

export default
    connect(mapStateToProps)(Home)
