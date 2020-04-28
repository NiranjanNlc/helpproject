import   React  from 'react'
import Geocode from "react-geocode";
import axios from 'axios' 
import { BrowserRouter as Router, Route, history, Redirect ,Link} from 'react-router-dom'
import  './styleMedia.css'
import  './styleCommon.css'
import ChoiceService from './ChoiceService'
import Place from '../Authenciation/Place'

class Choice extends React.Component {
    constructor(props) 
    {
      super(props)
      this.state = {
        var1:'role1',
        var2:'role1',
        var3:'role1' ,
        lat:'',
        lang:'',
        location:'',
        city:'',
        state:'',
        area :''

      }
      this.handleChange = this.handleChange.bind(this)
       this.getpostal=this.getpostal.bind(this)
    this.submitData=this.submitData.bind(this)
 this.getLocation=this.getLocation.bind(this)
this.handleCo = this.handleCo.bind(this)}

handleCo(cordinate) { 
    this.setState({
      location : cordinate
    })
  }
    componentDidMount() {
    /*    console.log('Component did mount!')
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
            this.setState({lat: position.coords.latitude,
            lang: position.coords.longitude });

        }, (error) => {
            alert(JSON.stringify(error))
        }, {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000
        });
        console.log( this.state.lat )*/
      //  this.getLocation();       
        }
     getLocation()
    {
        Geocode.fromLatLng( this.state.lat , this.state.lang ).then(
            response => {
                const address = response.results[0].formatted_address,
                      addressArray =  response.results[0].address_components,
                       postal_code =this.getpostal(addressArray)
                console.log(postal_code) 
                this.setState( {
                    location:postal_code 
                } )
            },
            error => {
                console.error( error );
            }
        );
       
    }
    getpostal(addressArray)
    {
        let city = '';
		for( let i = 0; i < addressArray.length; i++ ) {
			if ( addressArray[ i ].types[0] && 'postal_code' === addressArray[ i ].types[0] ) {
				city = addressArray[ i ].long_name;
				return city;
			}
		}
    }
    handleChange(event) { 
        const { name, value } = event.target
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
          [name]: value
        })
    console.log(this.state.var3)
    this.getLocation();   
    }
    
  submitData(event) {
  //  this.getLocation()
  event.preventDefault()
    console.log("hello hunny bunny ") 
    const { name, value } = event.target
        this.setState({
          [name]: value
        })
    const help={
        var1: this.state.var1,
        var2:this.state.var2,
        var3:this.state.var3,
        location:this.state.location
    }
    console.log(help)
    
     ChoiceService.ChoiceService (help)
   .then((response) => {
     console.log(response) 
     this.props.history.push("/chose/")
      }).catch(() => {
     console.log("error in adding ") 
  })
 
  }  
    
    render()
    {
        return(
          <section id="detailWrap">
          <div className="container">
              <div className="row">
                  <div className="col-sm-12">
                      <div className="row">
                          <div className="col-sm-12 help_cov">
                             <Link to = "/dash"> <a className="btn help" href="#">Home</a></Link>
                          </div>
                      </div>
                      <div className="detailBlock">
                          <div className="look">
                              <span>I am looking for</span>
                          </div>
                          <form>
                              <select name="var1" onChange={this.handleChange} className="form-control input-lg">
                                  <option value="1">.......</option>
                                  <option value="Resturant">Resturant</option>
                                  <option value="Things To Do">Things To Do</option>  
                              </select>
                              <select name="var2" onChange={this.handleChange} className="form-control input-lg">
                              <option value="Park">Park </option>
                                  <option value="Club">Club </option>
                                  <option value="Muesum">Muesum</option>
                                  <option value="Affordable">Affordable</option>
                                  <option value="Mid-Range">Mid-Range </option>
                                  <option value="HighEnd">HighEnd</option> 
                              </select>
                              <select name='var3' className="form-control input-lg" onChange={this.handleChange}>
                              <option value="Meat">Meat </option>
                                  <option value="Fish">Fish </option>
                                  <option value="Vegeterian">Vegeterian</option> 
                                  <option value="Free">Free</option>
                                  <option value="Limited Edition">Limited Edition</option>
                                  <option value="Affordable">Affordable</option>
                                  <option value="6"></option>
                                  </select>
                                               <b>in the location</b>   
                                  <Place 
                                     
                                     onSelect={this.handleCo}   name="postcode"   className="form-control"  />
                               <button type="submit" 
                              className="btn sub_help"
                              onClick={(e)=>this.submitData(e)}> Help </button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  
        )
    }
}
export default Choice;