class LocationService 
{
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