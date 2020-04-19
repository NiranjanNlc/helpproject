import   React  from 'react' 
import AuthenciationService from './AuthenciationService' 
import { BrowserRouter as Router, Route, history, Redirect ,Link} from 'react-router-dom'
import  './login.css'
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
class Login  extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
                rid:'',
                psw:'',
                sucessLogin: 'false',
                failedLogin: ''
          
          }  
          this.handleChange=this.handleChange.bind(this)
          this.submitData = this.submitData.bind(this)
          this.checkLogin = this.checkLogin.bind(this)
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
      event.preventDefault();
    console.log("hello hunny bunny " )
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
     const signIn = { 
      usernameOrEmail: this.state.rid,
      password: this.state.psw
    };     
    AuthenciationService
    .executeJwtAuthenticationService(signIn)
    .then((response) => {
      console.log(response)
      console.log( response.data.accessToken)
      AuthenciationService.registerSuccessfulLoginForJwt(this.state.uname, response.data.accessToken)
        console.log("trying to push ") 
        this.props.history.push("/dash")
        window.location.reload(false);   
    
    }).catch(() => {
        console.log("error")
        this.setState({ showSuccessMessage: false })
        this.setState({ hasLoginFailed: true })
    })
   
  }
    checkLogin()
    {
        if (AuthenciationService.isUserLoggedIn()) {
            console.log("trying to open login page")
            this.props.history.push("/chose/")
         //   window.location.reload(false);
           }
    }
   componentDidMount()
    {
    
    }
 
    
  
    
    render()
    { 
        this.checkLogin()
        return(
          <section id="formWrap">
            <div   className="container">
                <div   className="row">
                    <div   className="col-sm-12">

                        <div   className="formWrap">
                            <form>
                                <div   className="form-group">
                                    <input type="text" name ='rid' onChange={this.handleChange}   className="form-control" placeholder="Username or Email"/>
                                    <input type="password" name='psw' onChange={this.handleChange}   className="form-control" placeholder="Password"/>
                                </div>
                                <div   className="col-sm-12" align="center">
                                    <button type="submit" onClick={this.submitData}   className="btn sub_help"> LOGIN </button>
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
