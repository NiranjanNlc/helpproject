import React from 'react'
import { BrowserRouter as Router, Route, history, Redirect, Link } from 'react-router-dom'
import NavbarPage from '../HomePage/NavbarPage'
//import { Navbar } from 'reactstrap'
import { performLogout, logout,getAuthenticatedUser } from '../Authenciation/Redux/Actions/Actions'
import { connect } from "react-redux"
class ThankYOu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    async componentDidMount() {
        //  console.log(this.props.data)
          await this.props.dispatch(getAuthenticatedUser())
    }



    render() {
        // this.refreshHelpedOne()
        return (
            <div>
                {/* <section id="topHeader">
                    <Link to="/home">
                        <img src={window.location.origin + '/images/logo.png'} className="img-fluid" alt="logo" />
                    </Link>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12" align="center">
                                <h1>Thank You !</h1>
                            </div>
                        </div>
                    </div>
                </section>
                */} 
                <NavbarPage></NavbarPage>
                <section id="thanksWrap">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-sm-7">

                                <div class="formWrap" align="center">
                                    <div className="thanksWrap">
                                        <p className="thanks"><span></span></p>
                                        <p>You have been of great help . One step to bring a master in your area.</p>
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
}const mapStateToProps = state => {
    return {
        data: state
    };
};

export default connect(mapStateToProps)(ThankYOu);
