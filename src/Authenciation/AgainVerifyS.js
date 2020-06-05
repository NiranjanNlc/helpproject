import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import WelcomeNavbar from '../HomePage/WelcomeNavbar'
import Loading from '../HomePage/Loading'
class AgainVerifyS extends Component {
    constructor(props) {
        super(props)
        this.state = {
            success: false,
            loading: false
        }
    }
    componentDidMount() {
         
        this.setState(
            { loading: true }
        )
    }
    render() {
         
        if (this.state.loading == false) {
            return  (<Loading></Loading>)
        }
        return (
            <div>
                <WelcomeNavbar></WelcomeNavbar>
                 <section id="messageWrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="messageCov">
                                  <div>
                                        <h1>Thanks for  the request
                                      </h1>
                                        <div className="mail">
                                            <span><i class="fas fa-envelope"></i></span>
                                        </div>
                                        <p>Verification Sms  has been sent to you  </p>
                                        <b><h6><u>Check your message</u></h6></b>
                                    </div> 
                                     }

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default withRouter(AgainVerifyS)