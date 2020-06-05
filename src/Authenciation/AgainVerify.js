import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenciationService from './AuthenciationService'
import queryString from 'querystring'
import Loading from '../HomePage/Loading'
import WelcomeNavbar from '../HomePage/WelcomeNavbar'
import httpRessource from "./httpResource"
class AgainVerify extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user:'',
            connected:false,
            verifed: ''

        }

    }
    componentDidMount() 
    {
       this.setState({user: this.props.location.detail})
        this.setState({connected:true})
    }
    onReject = (event) => 
    { 
        window.location.replace("https://klygo.app/")
    }
    onLogin = (event) => { 
        httpRessource.post("/help/getVerify",this.state.user)
        .then((response) =>
        {
            this.props.history.push('/againverifys')  
        })
         
     }
    render() {
        console.log(this.props.location)
        if (this.state.connected === false) {
            return <Loading></Loading>
        }
        

        return (
            <div>
                <WelcomeNavbar></WelcomeNavbar>
                {/* <section id="topHeader">
                    <Link to="/home">
                        <img src={window.location.origin + '/images/logo.png'} className="img-fluid" alt="logo" />
                    </Link>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12" align="center">
                                <h1>Welcome !</h1>
                            </div>
                        </div>
                    </div>
                </section>
               */}
                <section id="messageWrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="messageCov">
                                    <h1>You are already registerd but need to be verified </h1>
                                    <div className="mail">
                                        <span><i class="fas fa-envelope"></i></span>
                                    </div>
                                    <p>Do you want to get verification message again?</p>
                                    <b><center>
                                        <button className="nav-link user"
                                    onClick={this.onLogin}
                                ><h6><u>Get message again</u></h6></button>
                                          </center></b>
                                          <br/>
                                          <b><center>
                                        <button className="nav-link user"
                                    onClick={this.onReject}
                                ><h6><u>No need </u></h6></button>
                                          </center></b>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )

    }
}

export default withRouter(AgainVerify)