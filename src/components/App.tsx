import * as React from 'react'
import { observer, inject } from 'mobx-react';

import { WeatherForecastService, WeatherData, Weather } from '../services/weather-forecast.service';

import { WeatherState } from '../state/weather.state';

import { SearchBar } from './search-bar.component';
import { CityList } from './city-list.component';
import { CityWeatherGrid } from './cityweather-grid.component';
import { NavBar } from './navbar.component';
import * as GoldenLayout from 'golden-layout';

interface Props {
    store : WeatherState ;
};

@inject("store")
class App extends React.Component<any, {}> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount = () => {
        const TestComponent = React.createClass({
            render: function() {
                return (<h1>test component 2</h1>)
            }
        })
        const layoutConfig = {
        content: [
            {
                type: 'row',
                content: [           
                    {
                        type: 'column',
                        content:[
                            {
                                type:'react-component',
                                component: 'navbar',
                                props: {weatherState: this.props.store}
                            },
                            {
                                type:'react-component',
                                component: 'weathergrid',
                                props: {weatherState: this.props.store}
                            }
                        ]
                    },
                    {
                        type: 'column',
                        content:[
                            {
                                type:'react-component',
                                component: 'weathergrid',
                                props: {weatherState: this.props.store}
                            },
                            {
                                type:'react-component',
                                component: 'navbar',
                                props: {weatherState: this.props.store}
                            }
                        ]
                    }                
        ]
        }]};
        const geschaefteLayout = new GoldenLayout(layoutConfig);
        geschaefteLayout.registerComponent('navbar', NavBar);
        geschaefteLayout.registerComponent('weathergrid', CityWeatherGrid);
        geschaefteLayout.init();
    }

    render() {

        return (
            <div>
            </div>
        );
    }
}

export { App };