import React from 'react'
import Geocode from "react-geocode";
import axios from 'axios'
import { BrowserRouter as Router, Route, history, Redirect, Link } from 'react-router-dom'
import './styleMedia.css'
import { refresh } from '../Authenciation/Redux/Actions/Actions'
import { withRouter } from 'react-router';
import MenuComponent from '../NavBAr/MenuComponent';
import './styleCommon.css'
import ChoiceService from './ChoiceService'
import NavbarPage from '../HomePage/NavbarPage';
import Place from '../Authenciation/Place'
import { connect } from "react-redux"
import AuthenciationService from '../Authenciation/AuthenciationService'
import Locat from '../Authenciation/Locat';
import LocationService from '../Authenciation/LocationService';
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
class Choice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      var1: ' ',
      var2: '',
      var3: '',
      lat: '',
      lang: '',
      location: '',
      city: '',
      state: '',
      area: '',
      postal_code: '',
      helpedone: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.getpostal = this.getpostal.bind(this)
    this.submitData = this.submitData.bind(this)
    this.getLocation = this.getLocation.bind(this)
    this.handleCo = this.handleCo.bind(this)
    this.checkLogin = this.checkLogin.bind(this)
    this.getArea = this.getArea.bind(this)
  }


  handleCo(cordinate) {
    this.setState({
      location: cordinate
    })
    Geocode.fromAddress(cordinate).then(
      response => {
        console.log(response)
        const { lat, lng } = response.results[0].geometry.location;
        this.setState(
          {
            lat: lat,
            lang: lng
          })
        var city = LocationService.getArea(response.results[0].address_components)
        this.setState(
          { city: city }
        )
        this.getLocation(lat, lng)
        console.log(this.state.lat)
        console.log(this.state.lng);
      },
      error => {
        console.error(error);
      }
    );
  }
  componentDidMount() {
    this.props.dispatch(refresh())
    const helpedone = this.props.data.currentUser
    this.setState(
      { helpedone: helpedone }
    )
    console.log(helpedone)
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
  getLocation(lat, lang) {
    Geocode.fromLatLng(lat, lang).then(
      response => {
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          postal_code = this.getpostal(addressArray)
        //    city=LocationService.getArea(addressArray)
        //    console.log(city)
        console.log(postal_code)
        this.setState({
          postal_code: postal_code
        })
        //   this.setState( { 
        //     city:city
        // } )
      },
      error => {
        console.error(error);
      }
    );

  }
  getArea(addressArray) {
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray[i].types.length; j++) {
          if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
            var area = addressArray[i].long_name;
            this.setState({ city: area })
            console.log(area)
          }
        }
      }

    }
  }
  getpostal(addressArray) {
    let city = '';
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0] && 'postal_code' === addressArray[i].types[0]) {
        city = addressArray[i].long_name;
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
    }, function () {
      console.log(this.state.var1)
    })
    console.log(this.state.var3)
    //  this.getLocation();   
  }

  submitData(event) {
    //  this.getLocation()
    event.preventDefault()
    console.log("hello hunny bunny ")
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
    const help = {
      var1: this.state.var1,
      var2: this.state.var2,
      var3: this.state.var3,
      location: this.state.location,
      lat: this.state.lat,
      lng: this.state.lang,
      helpedone: this.state.helpedone,
      postcode: this.state.postal_code,
      city: this.state.city,
    }
    console.log(help)

    ChoiceService.ChoiceService(help)
      .then((response) => {
        console.log(response)
        this.props.history.push({
          pathname: '/soon/',
          // search: '?query=abc', 
          success: response.data
        })
        //  this.checkLogin()
      }).catch(() => {
        console.log("error in adding ")
      })

  }
  checkLogin() {
    console.log("trying to open login page")
    this.props.history.push("/dash/")
    window.location.reload(false);

  }

  render() {

    if (this.state.var1 === 'Resturant' || this.state.var1 === 'Takeaways') {
      var map = (<div>
        <select name="var2" onChange={this.handleChange} className="form-control input-lg">
          <option value="1">.......</option>

          <option value="Chinese"> Chinese </option>
          <option value="Nepalese">Nepalese </option>
          <option value="Top Rated">Top Rated</option>
          <option value="Contenential">Continental</option>
        </select>
        <select name='var3' className="form-control input-lg" onChange={this.handleChange}>
          <option value="1">.......</option>

          <option value="Meat">Meat </option>
          <option value="Fish">Fish </option>
          <option value="Vegeterian">Vegeterian</option>
        </select>
      </div>
      )
    }
    else if (this.state.var1 === "Groceries") {
      var map = (<div>
        <select name="var2" onChange={this.handleChange} className="form-control input-lg">
          <option value="1">.......</option>

          <option value="Chinese"> Chinese </option>
          <option value="Asian">Asian </option>
          <option value="Top Rated">Top Rated</option>
        </select>
        <select name='var3' className="form-control input-lg" onChange={this.handleChange}>
          <option value="1">.......</option>

          <option value="Open now">Open now</option>

        </select>
      </div>
      )
    }
    else if (this.state.var1 === "Petrol Pump") {
      var map = (<div>
        <select name="var2" onChange={this.handleChange} className="form-control input-lg">
          <option value="1">.......</option>
          <option value="Open Now">Open now</option>
        </select>
        <select name='var3' className="form-control input-lg" onChange={this.handleChange}>
          <option value="1">.......</option>

          <option value="Open now">Open now</option>
        </select>
      </div>
      )
    }
    else if (this.state.var1 === "Chemist") {
      var map = (<div>
        <select name="var2" onChange={this.handleChange} className="form-control input-lg">
          <option value="1">.......</option>

          <option value="Top rated">Top Rated</option>
        </select>
        <select name='var3' className="form-control input-lg" onChange={this.handleChange}>
          <option value="1">.......</option>

          <option value="Open now">Open now</option>
        </select>
      </div>)
    }
    else if (this.state.var1 === "Hotels") {
      var map = (<div>
        <select name="var2" onChange={this.handleChange} className="form-control input-lg">
          <option value="1">.......</option>

          <option value="Top rated">Top Rated</option>
          <option value="Bed and  Breakfast">Bed and  Breakfast</option>
          <option value="Brand">Brand</option>
        </select>
        <select name='var3' className="form-control input-lg" onChange={this.handleChange}>
          <option value="1">.......</option>

          <option value="Affordable">Affordable</option>
          <option value="Offers">Offers</option>
        </select>
      </div>
      )
    }
    else if (this.state.var1 === "Garage") {
      var map = (<div>
        <select name="var2" onChange={this.handleChange} className="form-control input-lg">
          <option value="1">.......</option>

          <option value="Car Wash<">Car Wash</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Bike Wash">Bike Wash</option>
        </select>
        <select name='var3' className="form-control input-lg" onChange={this.handleChange}>
          <option value="1">.......</option>

          <option value="Average">Average</option>
          <option value="Top Rated">Top Rated</option>
        </select>
      </div>
      )
    }
    else if (this.state.var1 === "clothestore") {
      var map = (<div>
        <select name="var2" onChange={this.handleChange} className="form-control input-lg">
          <option value="1">.......</option>

          <option value="Ladies">Ladies</option>
          <option value="Gents">Gents</option>
          <option value="All kind">All kind</option>
        </select>
        <select name='var3' className="form-control input-lg" onChange={this.handleChange}>
          <option value="1">.......</option>

          <option value="Average">Average</option>
          <option value="Top Rated">Top Rated</option>
        </select>
      </div>
      )
    }
    else {
      var map = (<div>
        <select name="var2" onChange={this.handleChange} className="form-control input-lg">
          <option value="1">.......</option>
          <option value="Park">Park </option>
          <option value="Club">Club </option>
          <option value="Muesum">Muesum</option>
        </select>
        <select name='var3' className="form-control input-lg" onChange={this.handleChange}>
          <option value="6"></option>
          <option value="Free">Free</option>
          <option value="Limited Edition">Limited Edition</option>
          <option value="Affordable">Affordable</option>
        </select>
      </div>
      )
    }

    return (
      <div>
        <NavbarPage />
        <section id="detailWrap" className="secGap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-6">
                <div className="detailBlock">
                  <div className="look">
                    <span>I am looking for</span>
                  </div>
                  <form>
                    <div>                              <select name="var1" onChange={this.handleChange} className="form-control input-lg">
                      <option value="1">.......</option>
                      <option value="Resturant">Resturant</option>
                      <option value="Things To Do">Things To Do</option>
                      <option value="Garage">Garage </option>
                      <option value="clothestore">Clothe Store</option>
                      <option value="Takeaways">Takeaways</option>
                      <option value="Hotels">Hotels</option>
                      <option value="Chemist">Chemist</option>
                      <option value="Groceries">Groceries</option>
                      <option value="Petrol Pump">Petrol Pump</option>
                    </select>
                    </div>
                    {map}



                    <b>in the location</b>
                    <Place

                      onSelect={this.handleCo} name="postcode" className="form-control" />
                    <button type="submit"
                      className="btn sub_help"
                      onClick={(e) => this.submitData(e)}> Help </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    data: state
  };
};

export default
  connect(mapStateToProps)(withRouter(Choice));