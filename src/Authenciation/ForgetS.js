import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
class ForgetS extends Component {
    render() {
        return (
            <div>
                <section id="topHeader">
                    <Link to="/home">
                        <img src={window.location.origin + '/images/logo.png'} className="img-fluid" alt="logo" />
                    </Link>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12" align="center">
                                <h1>Welcome !</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="messageWrap">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-7">
                                <div className="soonCov">
                                    <div className="mail">
                                        <span>Congrats!</span>
                                    </div>
                                    <p>Password changed successfully</p>
                                    <Link to="/home" className="btn back"><i class="fas fa-chevron-left"></i>Back to home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default withRouter(ForgetS)