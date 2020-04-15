import   React  from 'react' 
import { BrowserRouter as Router, Route, history, Redirect ,Link} from 'react-router-dom'
import  './register.css'
import AuthenciationService from './AuthenciationService'
class SignUp extends React.Component {
    constructor(props) {
      super(props)
      this.state = { 
            name: '',
            sname: '',
            email: '' ,
            numb: '',
            postcode :'',
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
      submitData(event) {

        console.log(this.state.sname)
        const signup = {
          firstName: this.state.name,
          surname: this.state.sname,
          email: this.state.email ,
          phoneNumber: this.state.number,
          postalCode :this.state.postcode,
          rId:this.state.rid,
          psw:this.state.psw
        };
        AuthenciationService.signUpRequest(signup);
      } 
    
  
    
    render()
    {
     // this.refreshHelpedOne()
        return(
            <section id="formWrap">
            <div   className="container">
            <div   className="row">
                    <div   className="col-sm-12">

                        <div   className="formWrap">
                        <form>
                                <div   className="profile_photo">
                                    <img src="help.png"   className="rounded-circle" alt="profile_photo"/>
                                </div>
                                <div   className="form-group">
                                    <input type="text" onChange={this.handleChange} name="name"   className="form-control" placeholder="Name"/>
                                    <input type="text" onChange={this.handleChange}  name="surname"   className="form-control" placeholder="Surname"/>
                                    <input type="email" onChange={this.handleChange}  name="email"   className="form-control" placeholder="Email"/>
                                    <input type="number" onChange={this.handleChange}  name="number"   className="form-control" placeholder="Number"/>
                                    <input type="text" onChange={this.handleChange} name="postcode"   className="form-control" placeholder="PostCode"/>
                                    <input type="text" placeholder="Enter Registration id"   className="form-control" name="rid" onChange={this.handleChange} required />
                                     <input type="password" placeholder="Enter Password" name="psw"   className="form-control" required onChange={this.handleChange}  required/>

                                
                                </div>
                                <div   className="col-sm-12" align="center">
                                    <button type="submit"   className="btn sub_help" onClick={this.submitData}> Submit </button>
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
export default SignUp
