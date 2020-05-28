import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'

import '../SelectPlace/Map.css'
class Place extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      city: '',
      area: '',
      state: '',
      postalcode: ''
    }
    this.setFormLocation = this.setFormLocation.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  handleChange = (address) => {
    this.setState({ address })
  }
  onChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  // When the user selects an autocomplete suggestion...
  handleSelect(place) {
    // Pull in the setFormLocation function from the parent ReportForm
    // const setFormLocation = this.props.setFormLocation
    this.props.onSelect(place);

    geocodeByAddress(place)
      .then(results => {
        const addressArray = results[0].address_components
        console.log(addressArray)
        const city = this.setFormLocation(addressArray)
      })
      .catch(error => {
        console.error('Error', error)


      })

  }
  setFormLocation(addressArray) {
    console.log("heloo this method is working ")
    let city = '';
    let state = '';
    let area = '';
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
        // city ='City :'+ addressArray[ i ].long_name;
        // this.setState({city : city})
        console.log(city)
      }
      if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
        state = 'State :' + addressArray[i].long_name;
        this.setState({ state: state })
        console.log(state)
      }
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray[i].types.length; j++) {
          if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
            area = addressArray[i].long_name;
            this.setState({ city: area })
            console.log(area)
          }
        }
      }
      console.log(city + state + area)
    }
  };

  render() {
    const renderInput = ({ getInputProps, getSuggestionItemProps, suggestions }) => (

      <div className="autocomplete-root"
      >
        <input className="form-control"

          {...getInputProps({
            placeholder: 'Type and chose from suggestion'
          })}
          {...getInputProps()} />
        <div className="autocomplete-dropdown-container">
          {suggestions.map(suggestion => {
            const className = suggestion.active
              ? 'suggestion-item--active'
              : 'suggestion-item';
            // inline style for demonstration purpose
            const style = suggestion.active
              ? { backgroundColor: '#ddd', cursor: 'pointer' }
              : { backgroundColor: '#ffffff', cursor: 'pointer' };
            return (
              <div className="form-control"
              >
                <div className="suggestion"
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })
                  }
                >
                  <span
                  >{suggestion.description}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="form-group">
          <input type="text" placeholder='City' name="city" className="form-control" onChange={this.onChange} value={this.state.city} />
        </div>

        {/* <div className="form-group"> 
              <input type="text"  placeholder = 'State' name="state" className="form-control" onChange={ this.onChange }   value={ this.state.state }/>
      </div>   */}
      </div>
    );

    // Limit the suggestions to show only cities in the US
    /*const searchOptions = {
     types: ['(cities)'],
     componentRestrictions: {country: "us"}
    }
*/
    return (
      <PlacesAutocomplete highlightFirstSuggestion
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        renderInput={{ placeholder: 'Enter address' }}
      // Pass the search options prop
      //searchOptions={searchOptions}

      >
        {renderInput}
      </PlacesAutocomplete>
    );
  }

}

export default Place;
