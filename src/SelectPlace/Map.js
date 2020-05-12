import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'
import Axios from 'axios';
import { withRouter } from 'react-router';
import './Map.css'  
import LocationSearchInput from './LocationSearchInput';
const API_URL = '/send/suggestion'
const SUBMIT_URL = `${API_URL}`
//Geocode.setApiKey("AIzaSyD6SFZcoYyCDs21kC_MV5mI12OeyjWyxFc");
//Geocode.enableDebug();
export const TOKEN = "token"
const google = window.google
export const headers = {
	'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)
}
class Map extends Component {

	constructor(props) {
		super(props);
		this.state = {
			address: '',
			city: '',
			area: '',
			state: '',
			sugg: '',
			add:'',
			mapPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			},
			markerPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			},
			var1: this.props.var1,
			var2: this.props.var2,
			var3: this.props.var3,
			loc: this.props.loc,
			rid:this.props.rid,
			hid:this.props.hid

		}
		this.onSuggestion = this.onSuggestion.bind(this)
	}

	onSuggestion(event) {
		this.setState({ [event.target.name]: event.target.value });
		console.log(this.state.sugg)
	}
	/**
	 * Get the current address from the default map position and set those values in the state
	*/
	componentDidMount() {
		console.log(this.state.var1)
		console.log(this.state.var2)
		console.log(this.state.var3)
		Geocode.fromLatLng(this.state.mapPosition.lat, this.state.mapPosition.lng).then(
			response => {
				const address = response.results[0].formatted_address,
					addressArray = response.results[0].address_components;

				this.setState({
					address: (address) ? address : ''
				})
			},
			error => {
				console.error(error);
			}
		);
	};
	/**
	 * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
	 *
	 * @param nextProps
	 * @param nextState
	 * @return {boolean}
	 */
	shouldComponentUpdate(nextProps, nextState) {
		if (
			this.state.markerPosition.lat !== this.props.center.lat ||
			this.state.address !== nextState.address ||
			this.state.city !== nextState.city ||
			this.state.area !== nextState.area ||
			this.state.state !== nextState.state
		) {
			return true
		} else if (this.props.center.lat === nextProps.center.lat) {
			return false
		}
	}
	/**
	 * Get the city and set the city input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	*/
	getCity = (addressArray) => {
		let city = '';
		for (let i = 0; i < addressArray.length; i++) {
			if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
				city = addressArray[i].long_name;
				return city;
			}
		}
	};
	/**
	 * Get the area and set the area input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	 */
	getArea = (addressArray) => {
		let area = '';
		for (let i = 0; i < addressArray.length; i++) {
			if (addressArray[i].types[0]) {
				for (let j = 0; j < addressArray[i].types.length; j++) {
					if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
						area = addressArray[i].long_name;
						return area;
					}
				}
			}
		}
	};
	/**
	 * Get the address and set the address input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	 */
	getState = (addressArray) => {
		let state = '';
		for (let i = 0; i < addressArray.length; i++) {
			for (let i = 0; i < addressArray.length; i++) {
				if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
					state = addressArray[i].long_name;
					return state;
				}
			}
		}
	};
	/**
	 * And function for city,state and address input
	 * @param event
	 */
	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
		this.refs.inputOfName.value = event.target.value
		console.log(this.state.add)
		
	};
	handleChange = (add) => {
		this.setState({ add })
		console.log(this.state.add)
	  }
	/**
	 * This Event triggers when the marker window is closed
	 *
	 * @param event
	 */
	onInfoWindowClose = (event) => {

	};

	/**
	 * When the marker is dragged you get the lat and long using the functions available from event object.
	 * Use geocode to get the address, city, area and state from the lat and lng positions.
	 * And then set those values in the state.
	 *
	 * @param event
	 */
	onMarkerDragEnd = (event) => {
		let newLat = event.latLng.lat(),
			newLng = event.latLng.lng();

		Geocode.fromLatLng(newLat, newLng).then(
			response => {
				const address = response.results[0].formatted_address,
					addressArray = response.results[0].address_components,
					city = this.getCity(addressArray),
					area = this.getArea(addressArray),
					state = this.getState(addressArray);
				this.setState({
					address: (address) ? address : '',
					area: (area) ? area : '',
					city: (city) ? city : '',
					state: (state) ? state : '',
					markerPosition: {
						lat: newLat,
						lng: newLng
					},
					mapPosition: {
						lat: newLat,
						lng: newLng
					},
				})
			},
			error => {
				console.error(error);
			}
		);
	};

	/**
	 * When the user types an address in the search box
	 * @param place
	*/
	onPlaceSelected = (place) => {
	//	this.onChange()
		console.log('plc', place);
		const address = place.formatted_address,
			addressArray = place.address_components
		console.log(address)
		this.setState({ address: address })
		Geocode.fromAddress(address).then(
			response => {
				console.log(response)
				const { lat, lng } = response.results[0].geometry.location;
				this.setState({
					address: (address) ? address : '',

					markerPosition: {
						lat: parseFloat(lat),
						lng: parseFloat(lng)
					},
					mapPosition: {
						lat: parseFloat(lat),
						lng: parseFloat(lng)
					},
				},function(){
					console.log(lat, lng)})
				console.log(lat, lng);
			},
			error => {
				console.error(error);
			}
		);
		// Set these values in the state.
	};

	submitData(event) {
		const help = {
			var1: this.state.var1,
			var2: this.state.var2,
			var3: this.state.var3,
			sugg: this.state.sugg,
			location: this.state.address,
			rid: this.state.rid,
			hid:this.state.hid
		}
		console.log(help)
		Axios.post(`${SUBMIT_URL}`, help)
			.then((response) => {
				console.log(response)
				this.checkLogin()
				//this.props.history.push("/thanks/")
			}).catch((error) => {
				console.log(error)
				console.log("error in adding ")
			})
	}
	checkLogin() {
		console.log("trying to open login page")
		this.props.history.push("/thanks/")
		window.location.reload(false);

	}

	render() {
		const searchOptions = {
			location: new google.maps.LatLng(-34, 151),
			radius: 2000,
			types: ['address']
		  }
		const AsyncMap = 
		//withScriptjs(
			withGoogleMap(
				props => (
					<div className="mapCov">
						<GoogleMap google={this.props.google}
							defaultZoom={this.props.zoom}
							defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
						>
							{/* InfoWindow on top of marker */}
							<InfoWindow
								onClose={this.onInfoWindowClose}
								position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
							>
								<div>
									<span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
								</div>
							</InfoWindow>
							{/*Marker*/}
							{this.state.state.markerPosition&&
							<Marker google={this.props.google}
								name={'Dolores park'}
								draggable={true}
								onDragEnd={this.onMarkerDragEnd}
								position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
							/>
							}
							<Marker />
							{/* For Auto complete Search Box */}
							<div className="mapResult">
							  {/* <Autocomplete className="form-control"
								onPlaceSelected={this.onPlaceSelected}
								onChange={this.onChange}
								name='add'
								types={['establishment']}
							/> */}
							 
								<button type="submit"
									className="btn btn_sub_help"
									onClick={(e) => this.submitData(e)}> Help </button>
							</div>
						</GoogleMap>
					</div>
				)
		//	)
		);
		let map;
		if (this.props.center.lat !== undefined) {
			map = <div>
				<div>
					{/* 	<div className="form-group">
						<label htmlFor="">City</label>
						<input type="text" name="city" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.city }/>
					</div>
					<div className="form-group">
						<label htmlFor="">Area</label>
						<input type="text" name="area" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.area }/>
					</div>
					<div className="form-group">
						<label htmlFor="">State</label>
						<input type="text" name="state" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.state }/>
		</div> */}
					<form>
						<div className="row">
							<div className="col-sm-12"><h3 className="map_title">Please suggest {this.state.var1} with {this.state.var2}  & {this.state.var3}  near {this.state.loc} </h3></div>
							<div className="col-sm-6">						<div className="form-group">
								<label htmlFor="">Address</label>
								<input type="text" name="address" className="form-control" onChange={this.onChange} readOnly="readOnly" value={this.state.address} />

							</div></div>
							<div className="col-sm-6">
								<div className="form-group">
									<label htmlFor="">Suggested place </label>
									<input type="text"
									 name="sugg"
									 className="form-control" 
									 ref="inputOfName"
									 
									 value = {this.state.add}
									onChange={this.onSuggestion} />
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label htmlFor="">Please type your suggestion</label>
									<Autocomplete className="form-control"
								onPlaceSelected={this.onPlaceSelected}
								onClick={this.onChange}
								onSelect={this.onChange}
								onChange={this.onChange}
								name='add'
								types={['establishment']}
							/>
								 </div>
							</div>
							<div className="col-sm-12">
								<div className="form-group">
									<label htmlFor="">Drag the pointer to the location of your suggestion</label>
								</div>
							</div>
						</div>
					</form>

				</div>

				<AsyncMap
					// googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD6SFZcoYyCDs21kC_MV5mI12OeyjWyxFc&libraries=places"
					loadingElement={
						<div />
					}
					containerElement={
						<div className="mapCov" style={{ height: this.props.height }} />
					}
					mapElement={
						<div style={{ height: `100%` }} />
					}
					center={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
				/>
			</div>
		} else {
			map = <div style={{ height: this.props.height }} />
		}
		return (map)
	}
}
export default withRouter(Map)
//export default (withGoogleMap(Map));
