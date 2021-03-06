import React, { Component } from 'react'
import NavbarPage from '../HomePage/NavbarPage';
import { Link, withRouter } from 'react-router-dom'
class Sorry extends Component {
    render() {
        return (
            <div>
                <NavbarPage />
                <section id="messageWrap">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-8">
                                <div className="soonCov">
                                    <div className="mail">
                                        <span>Sorry !</span>
                                    </div>
                                    <p>No Helper online from this location, Please try another location</p>
                                    <Link to="#"><a className="btn back"><i class="fas fa-chevron-left"></i> Go back</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default withRouter(Sorry)