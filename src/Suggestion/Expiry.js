import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom' 
import queryString from 'querystring'
import ExpiryNavbar from '../HomePage/ExpiryNavbar'
class Expiry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {

    }




    render() {
        // this.refreshHelpedOne()
        return (
            <div>
                <ExpiryNavbar></ExpiryNavbar>
                {/* <section id="topHeader">
                    <Link to="/home">
                        <img src={window.location.origin + '/images/logo.png'} className="img-fluid" alt="logo" />
                    </Link>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12" align="center">
                                <h1>Expired!</h1>
                            </div>
                        </div>
                    </div>
                </section>
                */}
                <section id="thanksWrap">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-sm-7">

                                <div class="formWrap" align="center">
                                    <div className="thanksWrap">
                                        <p className="thanks"><span></span></p>
                                        <p>The link you have clicked has been expired</p>
                                        <Link to="/dash" ><a href="#" className="btn back"><i class="fas fa-chevron-left"></i> Home</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )

    }
}

export default Expiry;