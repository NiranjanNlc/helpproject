import React, { Component } from 'react'
import './Message.css'
class Message extends Component {
    render() {
        return (
            <section id="messageWrap">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="messageCov">
                                <h1>Thanks for Signing up, Niranjan . We'r glad you are here.</h1>
                                <div className="mail">
                                    <span><i class="fas fa-envelope"></i></span>
                                </div>
                                <p>An activation mail has been sent to your email.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Message