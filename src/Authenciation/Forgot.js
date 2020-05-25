import React, { Component } from 'react'
import './thanks.css'
import { Link, withRouter } from 'react-router-dom'
import AuthenciationService from './AuthenciationService'
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
        console.log(fields)
      }
      submitData(event) {
        event.preventDefault()
         const loc1 =this.state.fields.loc
        if(this.validateForm(event))
       {
    
    const signup = {
          phoneNumber: this.state.fields.numb,
          rId: this.state.fields.rid,
          psw: this.state.fields.psw,
           
        }
        console.log(signup)
        AuthenciationService.forgetpassword(signup)
          .then((response) => {
          console.log(response.data.success)
          if(response.data.success==="false")
          {
          this.props.history.push({
          pathname: '/message/',
          // search: '?query=abc',
          detail: this.state.fields.name,
          message:response.data.message,
          success:response.data.success
          })
        }
          else
          {
            this.props.history.push({
              pathname: '/message/',
              // search: '?query=abc',
              detail: this.state.fields.name,
              message:response.data.message,
             success:response.data.success
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
        return (
            <div>
                <section id="topHeader">
                    <img src={window.location.origin + '/images/logo.png'} className="img-fluid" alt="logo" />
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12" align="center">
<<<<<<< HEAD
                                <h1>Reset Password...</h1>
=======
                                <h1>Set Your New Password</h1>
>>>>>>> 196d055fe491454ff6d667325879582ebe7425da
                            </div>
                        </div>
                    </div>
                </section>
                <section id="forgetForm" className="secGap">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-6">
                                <form>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" name='rid' className="form-control" placeholder="" required />
                                        <div className="errorMessage"></div>
                                        <label>Phone Number</label>
                                        <input type="number" className="form-control" placeholder="" required />
                                        <div className="errorMessage"></div>
                                        <label>New Password</label>
                                        <input type="password" className="form-control" placeholder="" required />
                                        <div className="errorMessage"></div>
                                        <label>Confirm Password</label>
                                        <input type="password" name='psw' className="form-control" placeholder="" required />
                                        <div className="errorMessage"></div>
                                    </div>
                                    <div className="col-sm-12" align="center">
                                        <button type="submit" className="btn sub_help"> CONTINUE</button>
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