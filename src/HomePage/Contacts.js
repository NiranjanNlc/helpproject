import React, { Component } from 'react' 
import { Link, withRouter } from 'react-router-dom'
import ContactNav from './ContactNav'
class Contacts extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }

     
    render() {
         
        return (
            <div>
                <ContactNav/>
                <section id="messageWrap">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-8">
                                <div className="soonCov">
                                        <div>
                                            <div className="mail">
                                                <span>Thanks</span>
                                            </div>
                                            <p>We will get back to you soon </p>

                                        </div>
                                

                                    <Link to="/" ><a className="btn back"><i class="fas fa-chevron-left"></i> Home</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default withRouter(Contacts)