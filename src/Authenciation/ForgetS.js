import React, { Component } from 'react'
import '../Authenciation/Message.css'
import { Link, withRouter } from 'react-router-dom'
class ForgetS extends Component {
    render() {
        return (
            <section id="messageWrap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-6">
                            <div className="soonCov">
                                <div className="mail">
                                    <span>Congrats!</span>
                                 </div>
                                 <p>Password changed sucessfully</p>
                                <Link to="/home" className="btn back"><i class="fas fa-chevron-left"></i>Back to home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default withRouter(ForgetS)