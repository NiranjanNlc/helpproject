import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import WelcomeNavbar from '../HomePage/WelcomeNavbar'
class ForgetS extends Component {
    render() {
        return (
            <div>
                 <WelcomeNavbar></WelcomeNavbar>
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