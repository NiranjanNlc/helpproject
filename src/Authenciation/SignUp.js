import React from 'react'
import { BrowserRouter as Router, Route, history, Redirect, Link } from 'react-router-dom'
import AuthenciationService from './AuthenciationService'
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'
import NavbarPage1 from "../HomePage/NavbarPage1"
import Place from './Place'
import LocationService from './LocationService'
import Autocomplete from 'react-autocomplete'
import Locat from './Locat'
// import Validation from './Validation'
class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: {},
      errors: {},
      check:false
      // box: {},
      // name: '',
      // sname: '',
      // email: '',
      // numb: '',
      // loc: '',
      // postcode: '',
      // rid: '',
      // psw: '',
      // city: '',
      // street: '',
      // phn: '',
      // hphn: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitData = this.submitData.bind(this)
    this.handleCo = this.handleCo.bind(this)
    this.onPlaceSelected = this.onPlaceSelected.bind(this)
    this.validateForm = this.validateForm.bind(this)
    this.getChildprops = this.getChildprops.bind(this)
    this.getInitialState = this.getInitialState.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
  }
  getChildprops(fields) {
    this.setState({ fields })
 //   console.log(this.state.fields)
  }
  onChange = (add) => {
   // console.log(add)
    this.setState({
      fields: {
        loc: add
      }
    })
   // console.log(this.state.fields.loc)
  }

handleCheck(event)
{     
//  console.log("Checkbox status ")
  let errors = this.state.errors;
  this.setState({check:!this.state.check});
  errors["check"]='' 
}
  handleChange(e) {
  //  console.log(e.target.value)
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
    //console.log(fields)
  }
  getInitialState() {
    return { checked: true }
  }
  // handleCheck() {
  //   this.setState({ checked: !this.state.checked });
  // }
  validateForm() {
    let formIsValid = true;
    // console.log("hello here")
    // console.log(this.state.fields.loc)
    let fields = this.state.fields;
    let errors = {};
    //    let formIsValid = true;
    // if (!this.state.checked == true) {
    //   formIsValid = true;
    // } else {
    //   formIsValid = false;
    //   errors["box"] = "*Try Please Work";
    // }
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "*Please provide your First Name.";
    }
    if (!fields["sname"]) {
      formIsValid = false;
      errors["sname"] = "*Please provide your Last Name.";
    }
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your Email-ID.";
    }
    if (typeof fields["email"] !== "undefined") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please provide valid Email-ID.";
      }
    }
    if (!fields["rid"]) {
      formIsValid = false;
      errors["rid"] = "*Please enter Username.";
    }
    if (!fields["country"]) {
      formIsValid = false;
      errors["country"] = "*required.";
    }
    if (typeof fields["rid"] !== "undefined") {

      if (fields["rid"].length < 6) {
        formIsValid = false;
        errors["rid"] = "*At Least 6 Character.";
      }
    }
    if (!fields["psw"]) {
      formIsValid = false;
      errors["psw"] = "*Set your Password.";
    }
    if (typeof fields["psw"] !== "undefined") {
      if (fields["psw"].length < 6) {
        formIsValid = false;
        errors["psw"] = "*Please enter secure and strong password.";
      }
    }
    if (!fields["psw1"]) {
      formIsValid = false;
      errors["psw1"] = "*Required";
    }
    if (typeof fields["psw1"] !== "undefined") {
      if (fields["psw1"] !== fields["psw"]) {
        formIsValid = false;
        errors["psw1"] = "*Confirm your Password.";
      }
    }
    if (!fields["street"]) {
      formIsValid = false;
      errors["street"] = "*Required";
    }
    if (!fields["city"]) {
      formIsValid = false;
      errors["city"] = "*Required";
    }

    if (!fields["postcode"]) {
      formIsValid = false;
      errors["postcode"] = "*Required";
    }
    if (!fields["numb"]) {
      formIsValid = false;
      errors["numb"] = "*Required";
    }
    //console.log(this.state.check)
    if(!this.state.check)
    {
      formIsValid = false;
      errors["check"] = "*Agreee the terms and condition before proceeding";
    }
    if (typeof fields["numb"] !== "undefined") {
      // if (!fields["numb"].match(/^[0-9]{10}$/)) {
      //   formIsValid = false;
      //   errors["numb"] = "*Please enter valid mobile no.";
      // }
    }
    // if (!fields["loc"]) {
    //   formIsValid = false;
    //   errors["loc"] = "*Required";
    // }
    this.setState({
      errors: errors
    })

    return formIsValid;
  }

  handleCo(cordinate) {
    this.setState({
      postcode: cordinate
    })
  }
  onPlaceSelected(loc) {
    console.log(loc)
    var nlc = this.state.fields
    console.log(this.state.fields)
    console.log(this.state.fields.loc)
    geocodeByAddress(loc)
      .then(results => {
        const addressArray = results[0].address_components
        console.log(addressArray)
        const cit = LocationService.getArea(addressArray)
        const postal = LocationService.getpostal(addressArray)
        const street = LocationService.getStreet(addressArray)
        console.log(postal)
        console.log(results[0].formatted_address)
        this.setState({
          fields: {
            postcode: postal,
            city: cit,
            psw: nlc.psw,
            rid: nlc.rid,
            psw1: nlc.psw1,
            name: nlc.name,
            sname: nlc.sname,
            email: nlc.email,
            street: street,
            country: nlc.country,
            hphn: nlc.hphn,
            loc: results[0].formatted_address
          }
        });
        console.log(this.state.fields)
        this.setState(
          {
            postcode: postal,
            city: cit
          })
      })
      .catch(error => {
        console.error('Error', error)


      })
    console.log(this.state.fields.loc)
    console.log("In place select ")
  }
  submitData(event) {
    event.preventDefault()
    const loc1 = this.state.fields.loc
    if (this.validateForm(event)) {

      const signup = {
        firstName: this.state.fields.name,
        surname: this.state.fields.sname,
        email: this.state.fields.email,
        phoneNumber: this.state.fields.numb,
        postalCode: this.state.fields.postcode,
        rId: this.state.fields.rid,
        psw: this.state.fields.psw,
        loc: loc1,
        street: this.state.fields.street,
        city: this.state.fields.city,
        country: this.state.fields.country,
        homephone: this.state.fields.hphn
      }
      console.log(signup)
      AuthenciationService.signUpRequest(signup)
        .then((response) => {
         // console.log(response.data.success)
          if (response.data.success === "false") {
            this.props.history.push({
              pathname: '/message/',
              // search: '?query=abc',
              detail: this.state.fields.name,
              message: response.data.message,
              success: response.data.success
            })
          }
          else {
            this.props.history.push({
              pathname: '/message/',
              // search: '?query=abc',
              detail: this.state.fields.name,
              message: response.data.message,
              success: response.data.success
            })
          }

        }).catch((error) => {
          console.log("error in adding")
          // this.props.history.push("/login/")
          this.setState({ showSuccessMessage: false })
          this.setState({ hasLoginFailed: true })
        })
    }

  }

  render() {
    // this.refreshHelpedOne()
    return (
      <div>
        <NavbarPage1/>
         <section id="signUpWrap" className="secGap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-8">
                <div className="formWrap">
                  <form>
                    <div className="form-group">
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
                              <div className="errorMessage">{this.state.errors.name}</div>
                              <input type="text" onChange={this.handleChange} name="name" value={this.state.fields.name} className="form-control" />
                            </div>
                          </div>
                          <div className="row feild_entry">
                            <div className="col-sm-4 label">
                              <label>Last Name</label>
                            </div>
                            <div className="col-sm-8 feild">
                              <div className="errorMessage">{this.state.errors.sname}</div>
                              <input type="text" onChange={this.handleChange} name="sname" value={this.state.fields.sname} className="form-control" />
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
                              <div className="errorMessage">{this.state.errors.email}</div>
                              <input type="email" value={this.state.fields.email} placeholder="example@gmail.com" onChange={this.handleChange} name="email" className="form-control" />
                            </div>
                          </div>
                          <div className="row feild_entry">
                            <div className="col-sm-4 label">
                              <label>UserName</label>
                            </div>
                            <div className="col-sm-8 feild">
                              <div className="errorMessage">{this.state.errors.rid}</div>
                              <input type="text" value={this.state.fields.rid} onChange={this.handleChange} name="rid" className="form-control" />
                            </div>
                          </div>
                          <div className="row feild_entry">
                            <div className="col-sm-4 label">
                              <label>Password</label>
                            </div>
                            <div className="col-sm-8 feild">
                              <div className="errorMessage">{this.state.errors.psw}</div>
                              <input type="password" name="psw" value={this.state.fields.psw} className="form-control" required onChange={this.handleChange} required />
                            </div>
                          </div>
                          <div className="row feild_entry">
                            <div className="col-sm-4 label">
                              <label>Confirm Password</label>
                            </div>
                            <div className="col-sm-8 feild">
                              <div className="errorMessage">{this.state.errors.psw1}</div>
                              <input type="password" name="psw1" value={this.state.fields.psw1} className="form-control" required onChange={this.handleChange} required />
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
                              <label>* Location</label>
                            </div>
                            <div className="col-sm-8 feild">
                              <div className="errorMessage">{this.state.errors.loc}</div>
                              <Locat className="col-sm-8 feild"
                                name="loc"
                                value={this.state.fields.loc}
                                className={"form-control"}
                                // onChange={this.onChange}
                                //  onClick={this.onChange}
                                fields={this.state.fields}
                                callbackFromParent={this.getChildprops}
                                onSelect={
                                  this.onPlaceSelected
                                }
                              />

                              {/* <Locat
                              name="loc" 
                              value={this.state.fields.loc} 
                              className="form-control" 
                              onSelect={this.onPlaceSelected} 
                              /> */}


                            </div>
                          </div>
                          <div className="row feild_entry">
                            <div className="col-sm-4 label">
                              <label>Street</label>
                            </div>
                            <div className="col-sm-8 feild">
                              <div className="errorMessage">{this.state.errors.street}</div>
                              <input type="text" value={this.state.fields.street} onChange={this.handleChange} name="street" className="form-control" />
                            </div>
                          </div>
                          <div className="row feild_entry">
                            <div className="col-sm-4 label">
                              <label>City or Town</label>
                            </div>
                            <div className="col-sm-8 feild">
                              <div className="errorMessage">{this.state.errors.city}</div>
                              <input type="text" value={this.state.fields.city} name="city"
                                //  defaultValue={this.state.city} 
                                className="form-control" required onChange={this.handleChange} required />
                            </div>
                          </div>
                          <div className="row feild_entry">
                            <div className="col-sm-4 label">
                              <label>Post Code</label>
                            </div>
                            <div className="col-sm-8 feild">
                              <div className="errorMessage">{this.state.errors.postcode}</div>
                              <input type="text" value={this.state.fields.postcode} name="postcode"
                                //    defaultValue={this.state.postcode} 
                                className="form-control" onChange={this.handleChange} required />
                            </div>
                          </div>
                          <div className="row feild_entry">
                            <div className="col-sm-4 label">
                              <label>Country</label>
                            </div>
                            <div className="col-sm-8 feild">
                              <div className="errorMessage">{this.state.errors.country}</div>
                              <select class="form-control input-lg"
                                onChange={this.handleChange}
                                name="country"
                                value={this.state.fields.country}>
                                <option>USA</option>
                                <option>UK</option>

                                <option selected="selected">......</option>
                                <option  >SPAIN</option>
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
                              <div className="errorMessage">{this.state.errors.numb}</div>
                              <input type="number" value={this.state.fields.numb} placeholder="*country code required--" name="numb" className="form-control" required onChange={this.handleChange} required />
                            </div>
                          </div>
                          <div className="row feild_entry">
                            <div className="col-sm-4 label">
                              <label>Home Phone Number</label>
                            </div>
                            <div className="col-sm-8 feild">
                              <input type="number" name="hphn" className="form-control" required onChange={this.handleChange} required />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-divider">
                        <div className="feild_title">
                          <h4>Keeping you informed</h4>
                        </div>
                        <div className="feildCov">
                          <div className="row feild_entry">
                            <div className="col-sm-12 text">
                              <p> You will be recieving the text message whenever the
                              new user tries to seek the places or recommendation near
                              the address you have registered .
                              By signing up  you agreed to our privacy policy and
                              allows us to send sms in the provided number as per needed  .

                          </p>
                            </div>
                            <div className="col-sm-12 checkBox">
                              <ul>
                                <li>
                                  <label for="remember">
                                    <div className="errorMessage">{this.state.errors.check}</div>
                                    <input type="checkbox" 
                                    value={this.state.check}
                                    name="check" 
                                 //   onCheckboxChange={this.handleCheck}

                                   onChange={this.handleCheck}
                                    />
                                I agree to the <Link to="/Terms">terms and conditions</Link> and <Link to="/Policy">privacy policy</Link> statement </label>
                                </li>
                                {/*      <li>
                              <input type="checkbox" /><label for="remember"> Telephone</label>
                            </li>
                            <li>
                              <input type="checkbox" /><label for="remember"> Email</label>
                            </li>
                            <li>
                              <input type="checkbox" /><label for="remember"> Text</label>
                            </li>
                            */}
                              </ul>
                            </div>
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
      </div>
    )
  }
}
export default SignUp