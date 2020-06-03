import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            success: false,
            loading: false
        }
    }
    componentDidMount() {
        if (this.props.location.success != null) {
            console.log(this.props.location.success)
            if (this.props.location.success === true) {
                this.setState(
                    { success: true }
                )
            }
            else {

            }
        }
        this.setState(
            { loading: true }
        )
    }
    render() {
        console.log(this.props.location)
        console.log(this.props.location.message)

        if (this.state.loading == false) {
            return (<div></div>)
        }
        return (
            <div>
                <section id="topHeader">

                    <Link to="/home"> <img src={window.location.origin + '/images/logo.png'} className="img-fluid" alt="logo" />
                    </Link> <div className="container">
                        <div className="row">
                            <div className="col-sm-12" align="center">
                                <h1>Reset</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="messageWrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="messageCov">

                                    {this.state.success ? <div>
                                        <h1>Thanks for Signing up, {this.props.location.detail}
                                     . </h1>
                                        <div className="mail">
                                            <span><i class="fas fa-envelope"></i></span>
                                        </div>
                                        <p>Verification Sms  has been sent to you  </p>
                                        <b><h6><u>Check your message</u></h6></b>
                                    </div> :
                                        <div>
                                            <h1>{this.props.location.message}</h1>
                                            <h2></h2>
                                            <Link to="/Forgot" >
                                                <a href="#" className="btn back">
                                                    <i class="fas fa-chevron-left"></i>
                                            Reset password.
                                           </a>
                                            </Link>
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

export default withRouter(Message)