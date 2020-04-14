import axios from 'axios'
import { BrowserRouter as Router, Route, history, Redirect ,Link} from 'react-router-dom'
const API_URL = 'http://localhost:9001'
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
}
export default new AuthenticationService()