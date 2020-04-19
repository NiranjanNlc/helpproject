import axios from 'axios'
import { BrowserRouter as Router, Route, history, Redirect ,Link} from 'react-router-dom'
const API_URL = ''
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
        return axios.post(`${API_URL}/api/auth/signin`,$signin)
    } 
    registerSuccessfulLoginForJwt(username, token,role) {
      console.log(token)
      console.log(role)
      console.log(username)
      
      localStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
      localStorage.setItem(TOKEN,token)
      this.setupAxiosInterceptors(this.createJWTToken(token))
  }

   signUpRequest($signup) {
        console.log(($signup))
        //  console.log($school+$subjet+$time)
        axios.post(`${API_URL}/api/auth/signup`,$signup)
          .then(function (response) {
          
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      isUserLoggedIn() {
        let user = localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }
    setupAxiosInterceptors(token) {
      console.log(token)
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