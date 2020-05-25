import React, { Component } from 'react'
import {Route, Redirect } from 'react-router-dom' 
import hutils from './hutils'
import {connect} from "react-redux"
import {getAuthenticatedUser } from "./Redux/Actions/Actions"

import {refreshTokenInternal,login } from "./Redux/Actions/Actions"
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
 
// function mapDispatchToProps(dispatch) {
//     return
//     {
//       addArticle: article => dispatch(addArticle(article))
//     };
//   }

class AuthenticatedRoute extends Component
{
    constructor(props) 
    {
        super(props)
        this.state={
            loading:true
        }
    }
    async componentDidMount(){
        console.log(this.props.data)
        await this.props.dispatch(getAuthenticatedUser())
   
        this.setState(
           { loading:false}
        )
    }
    render() {
        console.log(this.props.data.loading)
        if(this.state.loading===true)
        {
        console.log(this.props.data.loading)
            return(<div></div>)
        }
       console.log(this.props.data)
        if (this.props.data.isAuthenticated===false)
        {
            return  <Redirect to='/login' /> 
        }
         else 
        { 
        
            return    <Route {...this.props} />
           
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