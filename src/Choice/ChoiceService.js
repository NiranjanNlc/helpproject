import axios from 'axios'
import {API_URL} from '../Constant' 

import httpService from '../Authenciation/Redux/httpService'
const SUBMIT_URL = `${API_URL}/send/`

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
     return  httpService.post("/send/",help)
    
  }
  
   

  
}
export default new ChoiceService();