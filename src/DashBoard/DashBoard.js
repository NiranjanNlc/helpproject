import   React  from 'react' 
import { BrowserRouter as Router, Route, history, Redirect ,Link} from 'react-router-dom'

import  './styleMedia.css'
import  './styleCommon.css'
import DashService from './DashService'

class DashBoard extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        name:'Raju Tamang daii ',
        email:'raju_123@gmail.com',
        phone:'9867745342',
        helped:'12'
      }  
    }
   componentDidMount() {
    console.log('Component did mount!')
    DashService.retrieveValue()
    .then(
      response => {
        console.log(response);
       this.setState({helped: response.data })
      
    } 
    )
    DashService.getData(this.state.name)
    .then(
        response => {
          console.log(response);
         this.setState({helped: response.data })
        
      } 
      )
       
 }
 
    
  
    
    render()
    {
     // this.refreshHelpedOne()
        return(
           
          <section id="detailWrap">
             <div class="container">
                  <div class="row">
                      <div class="col-sm-12">
                          <div class="row">
                              <div class="col-sm-12 help_cov">
                                  <a class="btn help" href="#">
                                  <Link to="/chose">
                                    Ask help
                                    </Link>
                                    </a>
                              </div>
                          </div>
                          <div class="detailBlock">
                              <div class="profile_photo">
                                  <img src="help.png" class="rounded-circle" alt="profile_photo"/>
                              </div>
                              <div class="no_people">
                             <span>Number of people Helped :
                              <b> {this.state.helped}</b>   </span>
                              </div>
                              <ul class="info">
                                  <li>{this.state.name}</li>
                                  <li>{this.state.email}</li>
                                  <li>{this.state.phone}</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
             

          
       )
    }
}
export default DashBoard;
