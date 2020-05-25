import React, { Component } from 'react'
import './Home.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'
import httpResource from '../Authenciation/httpResource'
import { getAuthenticatedUser, login, logout } from "../Authenciation/Redux/Actions/Actions"
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
        console.log(this.state.rid)
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
        console.log("hello hunny bunny ")
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
                        this.props.dispatch(getAuthenticatedUser());
                        console.log("logged in ..")
                        console.log("trying to open login page")
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
    checkLogin() {
        // console.log(store.getState())
        if (this.props.data.isAuthenticated === true) {
            console.log("trying to open login page")
            this.props.history.push("/dash/")
            window.location.reload(false);
        }
    }
    componentDidMount() {
        // this.checkLogin()

    }




    render() {
        return (
            <div id="home">
                <section id="topRibbon">
                    <div className="container">
                        <div className="row ">
                            <div className="col-sm-12" align="center">
                                <a href="#">Need urgent support? Get help from a crisis service →</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="mainFace">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 logo">
                                <a href="#">
                                    <img src={window.location.origin + '/images/logo.png'} className="img-fluid" alt="logo" />
                                </a>
                                <a href="#" onClick={this.toggle}>Log in</a>
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
                                                                        <p className=" small"><a href="#">Forgot Password?</a></p>
                                                                    </div>
                                                                </div>
                                                                <hr />
                                                                <p className="noac">Not member yet? <Link to="/sign/"><a href="#">create an account</a></Link> to join </p>
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
                                    Welcome to the help app !
                                </h1>
                                <p>Free, safe and anonymous support</p>
                                <a href="#" className="btn vMore watch"><i class="fas fa-play"></i> Watch our Video</a>
                                <a href="#" className="btn vMore">Learn More</a>
                            </div>
                            <div className="mobile">
                                <img src={window.location.origin + '/images/mobile.png'} className="img-fluid" alt="logo" />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="offer" className="secGap">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 secTitle">
                                <h2>Just some of the things you'll find on Help App</h2>
                            </div>
                            <div className="col-md-6 col-lg-3 col-sm-6 mobPad">
                                <i class="far fa-newspaper"></i>
                                <h3>Magazine</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer .</p>
                            </div>
                            <div className="col-md-6 col-lg-3 col-sm-6 mobPad">
                                <i class="fas fa-users"></i>
                                <h3>Discussion Boards</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer .</p>
                            </div>
                            <div className="col-md-6 col-lg-3 col-sm-6 mobPad">
                                <i class="fas fa-comment-alt"></i>
                                <h3>Chat with the team</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer .</p>
                            </div>
                            <div className="col-md-6 col-lg-3 col-sm-6 mobPad">
                                <i class="fas fa-book-open"></i>
                                <h3>Daily Journal</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer .</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="testimonial">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 tImage">
                                <img src={window.location.origin + '/images/modal.png'} className="img-fluid testiModal" alt="image" />
                            </div>
                            <div className="col-md-12 col-lg-6 col-sm-6">
                                <h4>What Does our Community Saying</h4>
                                <blockquote style={{
                                    backgroundImage: "url(" + "/images/marks.png" + ")",
                                    backgroundPosition: 'bottom 0 right 1.875rem',
                                    backgroundSize: '4.688rem 4.563rem',
                                    paddingBottom: '1.25rem',
                                    backgroundRepeat: 'no-repeat'
                                }}>"I really like how we can find help anonymously and have help from others. It makes me feel accepted and that people will not judge me. Great App Nice Job !"</blockquote>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="needTalk" className="secGap">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-7 col-lg-6 col-sm-6">
                                <h3>Our community is here to support you through anything. Big or small.</h3>
                                <a href="#" className="vMore">Join Us</a>                            </div>
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
                                        <li><a href="#">Meet the team</a></li>
                                        <li><a href="#">Privacy and Safety</a></li>
                                        <li><a href="#">Terms of Use</a></li>
                                        <li><a href="#">Confidentiality</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="footBTM">
                        <div className="container">
                            <div className="row ">
                                <div className="col-sm-12">
                                    <p>© Help App 2020</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </footer>
            </div>
        )
    }
}

export default Home
