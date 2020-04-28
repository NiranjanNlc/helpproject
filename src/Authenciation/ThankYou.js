import   React  from 'react' 
import { BrowserRouter as Router, Route, history, Redirect ,Link} from 'react-router-dom'
import './thanks.css'
class ThankYOu extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        
      }  
    }
   componentDidMount() {
    
      }
 
    
  
    
    render()
    {
     // this.refreshHelpedOne()
        return( 
          <section id="main">
          <section id="formWrap">
              <div class="container">
                  <div class="row">
                      <div class="col-sm-12">

                          <div class="formWrap" align="center">
                              <p><strong>Thanks a lot !</strong></p>
                              <p>You have been of great help . One step to bring a master in your area.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </section>
        )   
        
    }
}
export default ThankYOu;
