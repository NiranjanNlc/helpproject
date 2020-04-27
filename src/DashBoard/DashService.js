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
    return axios.get(`${HELP_URL}`,{headers});
  }
  getData(user)
  {
    console.log("getting the value................")
    return axios.get(`${DATA_URL}`,user,{headers});

  }
  
}
export default new DashService()