import axios from 'axios' 
import {API_URL} from '../Constant' 
const HELP_URL =  `${API_URL}/send/getHelpedNumber`
const DATA_URL =  `${API_URL}/send/get`
 export const TOKEN="token"
 export const headers = { 
  'Authorization': 'Bearer '+localStorage.getItem(TOKEN)
}
class DashService {
  retrieveValue() {
   // console.log("getting the value................")
    return axios.get(`${HELP_URL}`,{headers :headers});
  }
  getData(user )
  {
    // console.log("getting the value................")
    // console.log(user)
   // console.log(localStorage.getItem('authenticatedUser'))
    return axios.post(`${DATA_URL}`,user)
    // {headers:
    //    {"Content-Type": "text/plain" , 
    //     'Authorization': 'Bearer '+localStorage.getItem(TOKEN)
    //   }
    //   });

  }
  
}
export default new DashService()