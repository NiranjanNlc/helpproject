import React from 'react'
import AuthenciationService from './AuthenciationService'
import { BrowserRouter as Router, Route, history, Redirect, Link } from 'react-router-dom'
import './login.css'
import $ from 'jquery'
// import Validation from './Validation'
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: {},
      errors: {}

      // rid: '',
      // psw: '',
      // sucessLogin: 'false',
      // failedLogin: '',
      // riderror: '',
      // pswerror: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitData = this.submitData.bind(this)
    this.checkLogin = this.checkLogin.bind(this)
    this.validateForm = this.validateForm.bind(this)
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
      usernameOrEmail: this.state.rid,
      password: this.state.psw
    };
    if (this.validateForm()) {
      AuthenciationService
        .executeJwtAuthenticationService(signIn)
        .then((response) => {
          console.log(response)
          console.log(response.data.accessToken)
          console.log(response.data.role)
          AuthenciationService.registerSuccessfulLoginForJwt(response.data.role, response.data.accessToken)
          console.log("trying to push ")

          this.props.history.push("/dash/")
          window.location.reload(false);
          //  window.location.reload(false);   

        }).catch(() => {
          console.log("error")
          this.setState({ showSuccessMessage: false })
          this.setState({ hasLoginFailed: true })
        })
    }
    return;
  }
  checkLogin() {
    if (AuthenciationService.isUserLoggedIn()) {
      console.log("trying to open login page")
      this.props.history.push("/dash/")
      window.location.reload(false);
    }
  }
  componentDidMount() {

  }




  render() {
    this.checkLogin()
    return (
      < section id="formWrap" >
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="formWrap">
                <h3>Welcome!</h3>
                <form>
                  <div className="form-group">
                    <div className="errorMessage">{this.state.errors.rid}</div>
                    <input type="text" name='rid' value={this.state.fields.rid} onChange={this.handleChange} className="form-control" placeholder="Username " required />
                    <div className="errorMessage">{this.state.errors.psw}</div>
                    <input type="password" name='psw' value={this.state.fields.psw} onChange={this.handleChange} className="form-control" placeholder="Password" required />
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
                  <p className="noac">Not member yet? <Link to="/sign/"><a href="#">Register Now</a></Link></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section >
    )

  }
}
export default Login;
