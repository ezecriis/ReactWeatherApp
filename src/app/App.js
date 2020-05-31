import React, { Component } from 'react';
import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';
import { WEATHER_KEY } from './keys';

class App extends Component {

    state = {
        temperature: '',
        description: '',
        humidity: '',
        city: '',
        country: '',
        error: null
    };
    
    getWeather = async e => {
        console.log('testing');
        e.preventDefault();
        const { city, country } = e.target.elements;
        const cityValue = city.value;
        const countyValue = country.value;

        if (cityValue && countyValue) {
            const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countyValue}&appid=${WEATHER_KEY}&units=metric`;
            const response = await fetch(API_URL);
            const data = await response.json();
    
            this.setState({
                temperature: data.main.temp,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                error: null
            });
        }
        else {
            this.setState({error: 'Please enter a city and a country'});
        }
    }
    render() {
        return (
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <WeatherForm getWeather={this.getWeather} />
                        <WeatherInfo { ...this.state} />
                    </div>
                </div>
            </div>
        )
    }
};

export default App;
