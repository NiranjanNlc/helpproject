import React, { Component } from 'react';
import LocationPicker from 'react-location-picker';
import Map from './Map'
import queryString from 'querystring'
/* Default position */
import Geocode from "react-geocode"
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
      rid:''
    }
  }
  componentDidMount() {
    console.log('Component did mount!')
    console.log(this.props)
    const query = this.props.location.search
    console.log(this.props.location.search)
    const values = queryString.parse(query.substr(1))
    console.log(values)
    console.log(values.id)
    this.setState(
      {
        var1: values.var1,
        var2: values.var2,
        var3: values.var3,
        lat: parseFloat(values.lat),
        lng: parseFloat(values.lng)
      })
      this.setState({rid: values.id})
    console.log(this.state.var1)
    console.log(this.state.var2, this.state.var3)
    Geocode.fromLatLng(values.lat, values.lng).then(
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
      return "loading";
    }
    else {
      return (
        <div id="mapWrap">
          <div className="container">
            <Map
              google={this.props.google}
              center={{ lat: this.state.lat, lng: this.state.lng }}
              //   center={{ lat: 18.5204, lng: 73.8567 }}
              var1={this.state.var1}
              var2={this.state.var2}
              var3={this.state.var3}
              loc={this.state.loc}
              rid={this.state.rid}
              zoom={15}
            />
          </div>
        </div>
      )
    }
  }
}
export default SelectPlace;