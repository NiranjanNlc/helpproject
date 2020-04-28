import React from 'react'
import { BrowserRouter as Router, Route, history, Redirect, Link } from 'react-router-dom'
import './register.css'
import AuthenciationService from './AuthenciationService'
import Autocomplete from 'react-autocomplete'
import Place from './Place'
class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      sname: '',
      email: '',
      numb: '',
      postcode: '',
      rid: '',
      psw: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitData = this.submitData.bind(this)
    this.handleCo = this.handleCo.bind(this)
  }
  handleChange(event) {
    console.log(event.target.value)
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }
  handleCo(cordinate) {
    this.setState({
      postcode: cordinate
    })
  }
  submitData(event) {
    event.preventDefault()
    console.log(this.state.sname)
    const signup = {
      firstName: this.state.name,
      surname: this.state.sname,
      email: this.state.email,
      phoneNumber: this.state.number,
      postalCode: this.state.postcode,
      rId: this.state.rid,
      psw: this.state.psw
    };
    AuthenciationService.signUpRequest(signup)
      .then((response) => {
        console.log("trying to push ")
        this.props.history.push("/login/")
        //  window.location.reload(false);   
        //  window.location.reload(false);   

      }).catch(() => {
        console.log("error in adding")

        // this.props.history.push("/login/")
        this.setState({ showSuccessMessage: false })
        this.setState({ hasLoginFailed: true })
      })

  }



  render() {
    // this.refreshHelpedOne()
    return (
      <section id="signUpWrap">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <div className="formWrap">
                <form>
                  <div className="form-group">
                    <h3>Create an Account</h3>
                    <div className="form-divider">
                      <div className="feild_title">
                        <h4>Your Details</h4>
                      </div>
                      <div className="feildCov">
                        <div className="row feild_entry">
                          <div className="col-sm-4 label">
                            <label>First Name</label>
                          </div>
                          <div className="col-sm-8 feild">
                            <input type="text" onChange={this.handleChange} name="name" className="form-control" />
                          </div>
                        </div>
                        <div className="row feild_entry">
                          <div className="col-sm-4 label">
                            <label>Last Name</label>
                          </div>
                          <div className="col-sm-8 feild">
                            <input type="text" onChange={this.handleChange} name="surname" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-divider">
                      <div className="feild_title">
                        <h4>Email and password</h4>
                      </div>
                      <div className="feildCov">
                        <div className="row feild_entry">
                          <div className="col-sm-4 label">
                            <label>Email address</label>
                          </div>
                          <div className="col-sm-8 feild">
                            <input type="email" onChange={this.handleChange} name="email" className="form-control" />
                          </div>
                        </div>
                        <div className="row feild_entry">
                          <div className="col-sm-4 label">
                            <label>Password</label>
                          </div>
                          <div className="col-sm-8 feild">
                            <input type="password" name="psw" className="form-control" required onChange={this.handleChange} required />
                          </div>
                        </div>
                        <div className="row feild_entry">
                          <div className="col-sm-4 label">
                            <label>Confirm Password</label>
                          </div>
                          <div className="col-sm-8 feild">
                            <input type="password" name="psw" className="form-control" required onChange={this.handleChange} required />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-divider">
                      <div className="feild_title">
                        <h4>Your address</h4>
                      </div>
                      <div className="feildCov">
                        <div className="row feild_entry">
                          <div className="col-sm-4 label">
                            <label>Street</label>
                          </div>
                          <div className="col-sm-8 feild">
                            <input type="text" onChange={this.handleChange} name="street" className="form-control" />
                          </div>
                        </div>
                        <div className="row feild_entry">
                          <div className="col-sm-4 label">
                            <label>City or Town</label>
                          </div>
                          <div className="col-sm-8 feild">
                            <input type="text" name="City" className="form-control" required onChange={this.handleChange} required />
                          </div>
                        </div>
                        <div className="row feild_entry">
                          <div className="col-sm-4 label">
                            <label>Post Code</label>
                          </div>
                          <div className="col-sm-8 feild">
                            <input type="text" name="post code" className="form-control" required onChange={this.handleChange} required />
                          </div>
                        </div>
                        <div className="row feild_entry">
                          <div className="col-sm-4 label">
                            <label>Country</label>
                          </div>
                          <div className="col-sm-8 feild">
                            <select class="form-control input-lg">
                              <option>USA</option>
                              <option>UK</option>
                              <option selected="selected">SPAIN</option>
                              <option>GERMANY</option>
                              <option>POLAND</option>
                            </select>
                          </div>
                        </div>
                        <div className="row feild_entry">
                          <div className="col-sm-4 label">
                            <label>Phone Number</label>
                          </div>
                          <div className="col-sm-8 feild">
                            <input type="number" name="post code" className="form-control" required onChange={this.handleChange} required />
                          </div>
                        </div>
                        <div className="row feild_entry">
                          <div className="col-sm-4 label">
                            <label>Home Phone Number</label>
                          </div>
                          <div className="col-sm-8 feild">
                            <input type="number" name="post code" className="form-control" required onChange={this.handleChange} required />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-divider">
                      <div className="feild_title">
                        <h4>Keeping you informed</h4>
                      </div>
                      <div className="row feild_entry">
                        <div className="col-sm-12 text">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</p>
                        </div>
                        <div className="col-sm-12 checkBox">
                          <ul>
                            <li>
                              <input type="checkbox" /><label for="remember"> Post</label>
                            </li>
                            <li>
                              <input type="checkbox" /><label for="remember"> Telephone</label>
                            </li>
                            <li>
                              <input type="checkbox" /><label for="remember"> Email</label>
                            </li>
                            <li>
                              <input type="checkbox" /><label for="remember"> Text</label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>



                    {/*<input type="text" onChange={this.handleChange} name="postcode"   className="form-control" placeholder="PostCode"/>
                                    */}
                    {/* <Place

                        onSelect={this.handleCo} name="postcode" className="form-control" /> */}




                  </div>
                  <div className="col-sm-12 submitBtn" >
                    <button type="submit" className="btn sub_help" onClick={this.submitData}> Register </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default SignUp
