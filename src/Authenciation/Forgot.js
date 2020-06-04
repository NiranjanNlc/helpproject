import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenciationService from './AuthenciationService'
import NavbarPage2 from '../HomePage/NavbarPage2';
class Forgot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: {},
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitData = this.submitData.bind(this)
    this.validateForm = this.validateForm.bind(this)
  }
  validateForm() {
    let formIsValid = true;
   // console.log(this.state.rid)
    let fields = this.state.fields;
    let errors = {};
    //    let formIsValid = true;

    // if (!fields["rid"]) {
    //   formIsValid = false;
    //   errors["rid"] = "*Please enter your username.";
    // }
    if (!fields["psw"]) {
      formIsValid = false;
      errors["psw"] = "*Please enter your password.";
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
    if (!fields["numb"]) {
      formIsValid = false;
      errors["numb"] = "*Required";
    }
    this.setState({
      errors: errors
    })
    return formIsValid;
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
  //  console.log(fields)
  }
  submitData(event) {
    event.preventDefault()
    const loc1 = this.state.fields.loc
    if (this.validateForm(event)) {
     // console.log("Validated")
      const signup = {
        phoneNumber: this.state.fields.numb,
        // rId: this.state.fields.rid,
        psw: this.state.fields.psw,

      }
     // console.log(signup)
      AuthenciationService.forgetpassword(signup)
        .then((response) => {
          // console.log(response)
          // console.log(response.data.success)
          if (response.data === "Success") {
            this.props.history.push("/forgets")
          }
          else {
            let errors = {};
            errors["numb"] = "Phonenumber not Found";
            this.setState({
              errors: errors
            })
          }

        }).catch((error) => {
          console.log("error in adding")
          let errors = {};
          errors["rid"] = "User not found with given phone number and username";
          this.setState({
            errors: errors
          })
        })
    }
  }
  render() {
    return (
      <div>
        <NavbarPage2 />
        <section id="forgetForm" className="secGap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-8">
                <form>
                  <div className="form-group">
                    <div className="form-divider">
                      <div className="feild_title">
                        <h4>Set Your New Password</h4>
                      </div>
                      <div className="feildCov">
                        <div className="row feild_entry">
                          <div className="col-sm-4 label">
                            <label>Phone Number</label>
                          </div>
                          <div className="col-sm-8 feild">
                            <div className="errorMessage">{this.state.errors.numb}</div>
                            <input type="text" name='numb' value={this.state.fields.numb} onChange={this.handleChange} className="form-control" placeholder="" required />
                          </div>
                        </div>

                        <div className="row feild_entry">
                          <div className="col-sm-4 label">
                            <label>New Password</label>
                          </div>
                          <div className="col-sm-8 feild">
                            <div className="errorMessage">{this.state.errors.psw}</div>
                            <input type="password" name='psw' value={this.state.fields.psw} onChange={this.handleChange} className="form-control" placeholder="" required />
                          </div>
                        </div>

                        <div className="row feild_entry">
                          <div className="col-sm-4 label">
                            <label>Confirm Password</label>
                          </div>
                          <div className="col-sm-8 feild">
                            <div className="errorMessage">{this.state.errors.psw1}</div>
                            <input type="password" name='psw1' value={this.state.fields.psw1} onChange={this.handleChange} className="form-control" placeholder="" required />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12" align="center">
                    <button type="submit" className="btn sub_help" onClick={this.submitData} > CONTINUE</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Forgot