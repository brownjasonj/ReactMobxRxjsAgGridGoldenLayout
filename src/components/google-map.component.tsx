import * as React from 'react';
import * as ReactGoogleMaps from 'react-google-maps';
import { observer } from 'mobx-react';

import { City } from '../types/city.type';
import { WeatherState } from '../state/weather.state';

interface Props {
    weatherState: WeatherState
}

@observer
class GoogleMap extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const city: City = this.props.weatherState.getSelectedCity;
        console.log("Change City to " + city);
        if (!city) 
            return (<div> No Map Available </div>);
        return (
            <ReactGoogleMaps.GoogleMapLoader
                containerElement={<div style={{height: '100%'}}/>}
                googleMapElement={
                    <ReactGoogleMaps.GoogleMap defaultZoom={12} defaultCenter={{lat: city.coord.lat, lng: city.coord.lon}} />
                }
            />
        );
    }
}

export { GoogleMap }