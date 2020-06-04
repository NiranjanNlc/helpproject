import axios from 'axios'
import { BrowserRouter as Router, Route, history, Redirect ,Link} from 'react-router-dom' 
import {API_URL} from '../Constant'
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
export const SCHOOL_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedSchool'
export const TOKEN="token"
export const headers = { 
    'Authorization': 'Bearer '+localStorage.getItem(TOKEN)
  }
 
class AuthenticationService 
{
    executeJwtAuthenticationService($signin)
     {
        return axios.post(`${API_URL}/api/auth/login`,$signin)
    } 
    registerSuccessfulLoginForJwt(username, token,role) {
       
      localStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
      localStorage.setItem(TOKEN,token)
      this.setupAxiosInterceptors(this.createJWTToken(token))
  }

   signUpRequest($signup) {
       // console.log(($signup))
        //  console.log($school+$subjet+$time)
      return   axios.post(`${API_URL}/api/auth/signup`,$signup)
       
      }
      forgetpassword($signup) {
       // console.log(($signup))
        //  console.log($school+$subjet+$time)
      return   axios.post(`${API_URL}/api/auth/forget`,$signup)
       
      }
      isUserLoggedIn() {
        let user = localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }
    logout() {
      localStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
      localStorage.removeItem(SCHOOL_NAME_SESSION_ATTRIBUTE_NAME); 
      localStorage.removeItem(TOKEN);
    //  this.props.history.push(`/login`)
  }
    getToken()
    {
      return localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
    }
    verifyUser(token)
    {
    //  console.log(token)
      return   axios.post(`${API_URL}/api/auth/verify`,String(token))
    }
    setupAxiosInterceptors(token) {
      //console.log(token)
      axios.interceptors.request.use(
          (config) => {
              if (token) {
                  config.headers.authorization = token
              }
              return config
          }
      )
  }
}
export default new AuthenticationService()