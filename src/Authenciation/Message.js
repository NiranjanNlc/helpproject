import React, { Component } from 'react'
import './Message.css'
import { Link ,withRouter} from 'react-router-dom'
class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            success:true,
            loading:false
        }
    }    
    componentDidMount() 
    {
        if(this.props.location.message!=null)
        {
            this.setState(
                {success:false}
            )
        }
        this.setState(
            {loading:true}
        )
    }
    render() {
        console.log (this.props.location)
       console.log (this.props.location.message)
      
       if(this.state.location==true)
       {
           return(<div></div>)
       }
        return (
            <section id="messageWrap">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="messageCov">
                              
                               {this.state.success?<div>
                                <h1>Thanks for Signing up, {this.props.location.detail}
                                     . </h1>
                                <div className="mail">
                                    <span><i class="fas fa-envelope"></i></span>
                                </div>
                                <p>Verification email has been sent to you  </p>
                                <b><h6><u>Check your inbox</u></h6></b>
                               </div>:
                               <div>
                                   {this.props.location.message}
                               </div>
                               }
                                
                             </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default withRouter(Message)