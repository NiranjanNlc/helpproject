import React, { Component } from 'react'
import './Message.css'
import { Link, withRouter } from 'react-router-dom'
class Soon extends Component {
    render() {
        return (
            <section id="messageWrap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-6">
                            <div className="soonCov">
                                <div className="mail">
                                    <span>Thank You !</span>
                                </div>
                                <p>You will soon get help from out of 50 people</p>
                                <a href="#" className="btn back"><i class="fas fa-chevron-left"></i> Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default withRouter(Soon)