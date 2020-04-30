import axios from 'axios' 
const API_URL = 'http://localhost:8080/send' 
const HELP_URL = `/send/getHelpedNumber`
const DATA_URL = `/send/get`
 export const TOKEN="token"
 export const headers = { 
  'Authorization': 'Bearer '+localStorage.getItem(TOKEN)
}
class DashService {
  retrieveValue() {
    console.log("getting the value................")
    return axios.get(`${HELP_URL}`,{headers :headers});
  }
  getData()
  {
    console.log("getting the value................")
    console.log(localStorage.getItem('authenticatedUser'))
    return axios.post(`${DATA_URL}`, localStorage.getItem('authenticatedUser'),
    {headers:
       {"Content-Type": "text/plain" , 
        'Authorization': 'Bearer '+localStorage.getItem(TOKEN)
      }
      });

  }
  
}
export default new DashService()