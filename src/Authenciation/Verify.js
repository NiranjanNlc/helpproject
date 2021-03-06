import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenciationService from './AuthenciationService'
import queryString from 'querystring'
import Loading from '../HomePage/Loading'
import WelcomeNavbar from '../HomePage/WelcomeNavbar'
class Verify extends Component {

    constructor(props) {
        super(props)
        this.state = {
            connected:false,
            verifed: ''

        }

    }
    componentDidMount() {
        // console.log('Component did mount!')
        // console.log(this.props)
        const query = this.props.location.search
       // console.log(this.props.location.search)
        const values = queryString.parse(query.substr(1))
       // console.log(values)
       // console.log(values.token)
        AuthenciationService.verifyUser(values.token)
            .then((response) => {
                console.log(response)
                if (response.data === "success") {
                    this.setState({
                        verifed: true,
                        connected: true
                    })
                }
                else {
                    this.setState({
                        verifed: false,
                        connected: true
                    })

                }
            }).catch(() => {
                console.log("error in verifying ")
            })
        this.setState(
            {

            })
    }
    onLogin = (event) => { 
        // window.location.replace("/home/") 
        return this.props.history.push({ 
         pathname: '/home/',
         detail: true
      });   
     }
    render() {
        console.log(this.props.location)
        if (this.state.connected === false) {
            return <Loading></Loading>
        }
        if (this.state.verifed === false) {
            return (<h3>Could not verify User</h3>)
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
                                    <h1>You have been verified </h1>
                                    <div className="mail">
                                        <span><i class="fas fa-envelope"></i></span>
                                    </div>
                                    <p>Enjoy our platform </p>
                                    <b><center>
                                        <button className="nav-link user"
                                    onClick={this.onLogin}
                                ><h6><u>click to login</u></h6></button>
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

export default withRouter(Verify)