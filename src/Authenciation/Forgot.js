import React, { Component } from 'react'
import './thanks.css'
import { Link, withRouter } from 'react-router-dom'
class Forgot extends Component {
    render() {
        return (
            <div>
                <section id="topHeader">
                    <img src={window.location.origin + '/images/logo.png'} className="img-fluid" alt="logo" />
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12" align="center">
                                <h1>login</h1>
                            </div>
                        </div>
                    </div>
                </section>
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
                                                        <label>Username</label>
                                                    </div>
                                                    <div className="col-sm-8 feild">
                                                        <input type="text" name='rid' className="form-control" placeholder="" required />
                                                        <div className="errorMessage"></div>
                                                    </div>
                                                </div>
                                                <div className="row feild_entry">
                                                    <div className="col-sm-4 label">
                                                        <label>Phone Number</label>
                                                    </div>
                                                    <div className="col-sm-8 feild">
                                                        <input type="number" className="form-control" placeholder="" required />
                                                        <div className="errorMessage"></div>
                                                    </div>
                                                </div>
                                                <div className="row feild_entry">
                                                    <div className="col-sm-4 label">
                                                        <label>New Password</label>
                                                    </div>
                                                    <div className="col-sm-8 feild">
                                                        <input type="password" className="form-control" placeholder="" required />
                                                        <div className="errorMessage"></div>
                                                    </div>
                                                </div>
                                                <div className="row feild_entry">
                                                    <div className="col-sm-4 label">
                                                        <label>Confirm Password</label>
                                                    </div>
                                                    <div className="col-sm-8 feild">
                                                        <input type="password" name='psw' className="form-control" placeholder="" required />
                                                        <div className="errorMessage"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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