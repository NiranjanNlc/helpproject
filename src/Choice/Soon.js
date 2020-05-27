import React, { Component } from 'react'
import '../Authenciation/Message.css'
import NavbarPage from '../HomePage/NavbarPage';
import { Link, withRouter } from 'react-router-dom'
class Soon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            number: 0,
            online: false
        }
    }

    componentDidMount() {
        console.log(this.props.location.success)
        this.setState(
            {
                number: this.props.location.success
            })
        if (this.props.location.success !== 0) {
            this.setState(
                { online: true }
            )
        }
        this.setState(
            { loading: false }
        )

    }
    render() {
        if (this.state.loading === true) {
            return (<div></div>)
        }
        return (
            <div>
                <NavbarPage />
                <section id="messageWrap">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-8">
                                <div className="soonCov">
                                    {this.state.online
                                        ?
                                        <div>
                                            <div className="mail">
                                                <span>Thank You !</span>
                                            </div>
                                            <p>You will soon get help from out of {this.state.number} people</p>
                                        </div>
                                        :
                                        <div>
                                            <div className="mail">
                                                <span>Sorry !</span>
                                            </div>
                                            <p>No Helper online from this location, Please try another location</p>

                                        </div>
                                    }

                                    <Link to="/dash" ><a href="#" className="btn back"><i class="fas fa-chevron-left"></i> Home</a>
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

export default withRouter(Soon)