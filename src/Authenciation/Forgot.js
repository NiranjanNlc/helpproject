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
                                <h1>Sign up</h1>
                            </div>
                        </div>
                    </div>
                    <img src="help.png" className="img-fluid" alt="Logo" />
                </section>
                <section id="forgetForm" className="secGap">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-6">
                                <form>
                                    <div className="form-group">
                                        <div className="errorMessage"></div>
                                        <input type="text" name='rid' className="form-control" placeholder="Username " required />
                                        <div className="errorMessage"></div>
                                        <input type="number" className="form-control" placeholder="Phone Number" required />
                                        <div className="errorMessage"></div>
                                        <input type="password" className="form-control" placeholder="New Password" required />
                                        <div className="errorMessage"></div>
                                        <input type="password" name='psw' className="form-control" placeholder="Confirm Password" required />
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