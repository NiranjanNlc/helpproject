import React, { Component } from 'react'
import {Route, Redirect } from 'react-router-dom' 

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
 

class AuthenticatedRoute extends Component {
    render() {
        if ((localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME) === null ))
        {
            return  <Redirect to='/login' /> 
        }
         else 
        
        { 
        
            return    <Route {...this.props} />
           
        }

    }
}

export default AuthenticatedRoute