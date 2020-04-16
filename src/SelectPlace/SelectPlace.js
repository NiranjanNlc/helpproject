import React, { Component } from 'react';
import LocationPicker from 'react-location-picker';
import Map from './Map'
/* Default position */
const defaultPosition = {
  lat: 27.9878,
  lng: 86.9250
};


class SelectPlace extends Component {
   render () {
    return ( 
      <div style={{ margin: '100px' }}>
				<Map
					google={this.props.google}
					center={{lat: 18.5204, lng: 73.8567}}
					height='300px'
					zoom={15}
				/>
        
			</div>
    )
  }
}
export default SelectPlace;