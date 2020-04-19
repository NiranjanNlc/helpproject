import axios from 'axios' 
const API_URL = '/send/' 
const SUBMIT_URL = `${API_URL}`
export const TOKEN="token"
 export const headers = { 
  'Authorization': 'Bearer '+localStorage.getItem(TOKEN)
}
class ChoiceService {
  
   ChoiceService(help)
   {
    console.log(help)
    console.log("let me check")
     return  axios.post(`${SUBMIT_URL}`,help,{headers})
    
  }
   

  
}
export default new ChoiceService();