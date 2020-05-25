import React, { Component } from 'react'
import './thanks.css'
import { Link, withRouter } from 'react-router-dom'
class Forgot extends Component {
    render() {
        return (
            <div>
                <section id="topHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12" align="center">
                                <h1>Set Your New Password</h1>
                            </div>
                        </div>
                    </div>
                    <img src={window.location.origin + '/images/logo.png'} className="img-fluid" alt="logo" />
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