import React, { Component } from 'react';
import LocationPicker from 'react-location-picker';
import Map from './Map'
/* Default position */
const defaultPosition = {
  lat: 27.9878,
  lng: 86.9250
};


class SelectPlace extends Component {
  render() {
    return (
      <div id="mapWrap">
        <div className="container">
          <Map
            google={this.props.google}
            center={{ lat: 18.5204, lng: 73.8567 }}
            height='auto'
            zoom={15}
          />
        </div>

      </div>
    )
  }
}
export default SelectPlace;