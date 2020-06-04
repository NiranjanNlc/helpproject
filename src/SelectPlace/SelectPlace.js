import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import LocationPicker from 'react-location-picker';
import Map from './Map'
import httpRessource from '../Authenciation/httpResource' 
import queryString from 'querystring'
/* Default position */
import Geocode from "react-geocode"
import Loading from '../HomePage/Loading';
Geocode.setApiKey("AIzaSyD6SFZcoYyCDs21kC_MV5mI12OeyjWyxFc");
Geocode.enableDebug();
const defaultPosition = {
  lat: 27.9878,
  lng: 86.9250
};


class SelectPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      var1: '',
      var2: '',
      var3: '',
      lat: 18.5204,
      lng: 73.8567,
      loc: '',
      loading: true,
      rid: '',
      hid: '',
      city:''
    }
  }
 async componentDidMount() {
  const query = this.props.location.search
    const values = queryString.parse(query.substr(1))
    console.log(values)
    console.log(values.id)
     await httpRessource.post("/help/getinfo",values.id)
     .then((response) =>
     {
         console.log(response)
         if(response.data==="expired")
         {
             this.props.history.push("/expiry")
         }
         else
         {
          this.setState(
            {
              var1: response.data.var1,
              var2: response.data.var2,
              var3: response.data.var3,
              lat: parseFloat(response.data.lat),
              lng: parseFloat(response.data.lng)
            })
          this.setState({ city:response.data.city })
          this.setState({ hid: values.hid }) 
         }
     })
     .catch(() => {
         console.log("error in geting suggestion")
     }) 
       Geocode.fromLatLng(this.state.lat,this.state.lng).then(
      response => {
        const address = response.results[0].formatted_address;
        this.setState(
          { loc: address }
        )
        this.setState(
          { loading: false }
        )
        console.log(address);
      },
      error => {
        console.error(error);
      }
    );

  }
  render() {
    if (this.state.loading === true) {
      return <Loading></Loading>;
    }
    else {
      return (
        <div>
          <section id="topHeader">
            <Link to="/">
              <img src={window.location.origin + '/images/logo.png'} className="img-fluid" alt="logo" />
            </Link>
            <div className="container">
              <div className="row">
                <div className="col-sm-12" align="center">
                  <h1>Need Help</h1>
                </div>
              </div>
            </div>
          </section>
          <section id="mapWrap" className="secGap">
            <div className="container">
              <Map
                google={this.props.google}
                center={{ lat: this.state.lat, lng: this.state.lng }}
                //   center={{ lat: 18.5204, lng: 73.8567 }}
                var1={this.state.var1}
                var2={this.state.var2}
                var3={this.state.var3}
                loc={this.state.loc}
                city={this.state.city}
                hid={this.state.hid}
                zoom={15}
              />
            </div>
          </section>
        </div>
      )
    }
  }
}
export default SelectPlace;