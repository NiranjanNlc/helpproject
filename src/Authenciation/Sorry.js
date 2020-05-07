import React, { Component } from 'react'
import './Message.css'
import { Link, withRouter } from 'react-router-dom'
class Sorry extends Component {
    render() {
        return (
            <section id="messageWrap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-6">
                            <div className="soonCov">
                                <div className="mail">
                                    <span>Sorry !</span>
                                </div>
                                <p>No Helper online from this location, Please try another location</p>
                                <a href="#" className="btn back"><i class="fas fa-chevron-left"></i> Go back</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default withRouter(Sorry)