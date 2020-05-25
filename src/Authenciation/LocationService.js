class LocationService 
{
    getArea(addressArray)
    {
        for( let i = 0; i < addressArray.length; i++ )
        {
            if ( addressArray[ i ].types[0]  ) {
                for ( let j = 0; j < addressArray[ i ].types.length; j++ ) {
                  if ( 'sublocality_level_1' === addressArray[ i ].types[j] || 'locality' === addressArray[ i ].types[j] )
                   {
                   var  area =  addressArray[ i ].long_name;
                    //this.setState({area : area})
                    console.log(area)
                    return area;
                  }
                }
              }
             
        }
    }
    getStreet(addressArray)
    {
        for( let i = 0; i < addressArray.length; i++ )
        {
            if ( addressArray[ i ].types[0]  ) {
                for ( let j = 0; j < addressArray[ i ].types.length; j++ ) {
                  if ( 'route' === addressArray[ i ].types[j] || 'route' === addressArray[ i ].types[j] )
                   {
                   var  area =  addressArray[ i ].long_name;
                    //this.setState({area : area})
                    console.log(area)
                    return area;
                  }
                }
              }
             
        }
    }
    getCity(addressArray)
    { 
        let city=''
        for( let i = 0; i < addressArray.length; i++ )
        {
            if ( addressArray[ i ].types[0] && 'administrative_area_level_2' === addressArray[ i ].types[0] )
            {
             city =  addressArray[ i ].long_name;
             return city;
            } 
        } 
    }
    getpostal(addressArray)
    {
        let city = '';
        for( let i = 0; i < addressArray.length; i++ ) 
        {
			if ( addressArray[ i ].types[0] && 'postal_code' === addressArray[ i ].types[0] ) {
           
                city = addressArray[ i ].long_name;
                console.log(city)
				return city; }
        } 
    } 
}
export default new LocationService()