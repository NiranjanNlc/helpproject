import axios from 'axios' 
const API_URL = 'http://dev3.pareva.umelimited.com/send/' 
const SUBMIT_URL = `${API_URL}`
export const TOKEN="token"
export const headers = { 
  'Authorization': 'Bearer '+localStorage.getItem(`${TOKEN}`)
}
class ChoiceService {
  
   ChoiceService(help)
   {
    console.log(help)
    console.log("let me check")
    console.log(headers)
     return  axios.post(`${SUBMIT_URL}`,help)
    
  }
  
   

  
}
export default new ChoiceService();