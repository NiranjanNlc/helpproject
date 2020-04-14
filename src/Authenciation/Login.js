import   React  from 'react' 
import AuthenciationService from './AuthenciationService'
import { BrowserRouter as Router, Route, history, Redirect ,Link} from 'react-router-dom'
class Login  extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
                rid:'',
                psw:''
          }  
          this.handleChange=this.handleChange.bind(this)
          this.submitData = this.submitData.bind(this)
        }
    handleChange(event) {
    console.log(event.target.value)
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
    }
    
    submitData(event)
    {
    console.log("hello hunny bunny " )
     const signIn = { 
      usernameOrEmail: this.state.rid,
      password: this.state.psw
    };    
    AuthenciationService
    .executeJwtAuthenticationService(signIn)
   
  }
   componentDidMount() {
    
      }
 
    
  
    
    render()
    {
     // this.refreshHelpedOne()
        return(
          <section id="formWrap">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">

                        <div class="formWrap">
                            <form>
                                <div class="form-group">
                                    <input type="text" name ='rid' onChange={this.handleChange} class="form-control" placeholder="Username or Email"/>
                                    <input type="password" name='psw' onChange={this.handleChange} class="form-control" placeholder="Password"/>
                                </div>
                                <div class="col-sm-12" align="center">
                                    <button type="submit" onClick={this.submitData} class="btn sub_help"> LOGIN </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )   
        
    }
}
export default Login;
