import React, { Component } from 'react'
import './Message.css'
import { Link ,withRouter} from 'react-router-dom'
class Message extends Component {
    render() {
       console.log (this.props.location)
        return (
            <section id="messageWrap">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="messageCov">
                                <h1>Thanks for Signing up, {this.props.location.detail}
                                     . We'r glad you are here.</h1>
                                <div className="mail">
                                    <span><i class="fas fa-envelope"></i></span>
                                </div>
                                <p>An activation mail has been sent to your email.</p>
                                <b><Link to="/login/"> <h6><u>click to login</u></h6></Link></b>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default withRouter(Message)