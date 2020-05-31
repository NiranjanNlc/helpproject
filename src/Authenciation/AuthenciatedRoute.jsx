import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import hutils from './hutils'
import { connect } from "react-redux"
import { getAuthenticatedUser } from "./Redux/Actions/Actions"
import Home from '../HomePage/Home'
import { refreshTokenInternal, login } from "./Redux/Actions/Actions"
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'


class AuthenticatedRoute extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
        this.getAuth = this.getAuth.bind(this)
    }
    async componentDidMount() {
        console.log(this.props.data)
        await this.props.dispatch(getAuthenticatedUser())

        this.setState(
            { loading: false }
        )
    }
    getAuth() {
        this.setState(
            { loading: false }
        )
    }
    render() {
        console.log(this.props.data.loading)
        if (this.state.loading === true) {
            console.log(this.props.data.loading)

            return (<div></div>)
        }
        console.log(this.props.data)
        if (this.props.data.isAuthenticated === false) {
            // return  <Redirect to='/home' /> 
            return <Route path="/" component={Home} />
        }
        else {
            return <Route {...this.props} />

        }

    }
}
const mapStateToProps = state => {
    return {
        data: state
    };
};

export default
    connect(mapStateToProps)(AuthenticatedRoute)