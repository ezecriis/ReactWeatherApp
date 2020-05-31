import React from 'react';

const WeatherFrom = props => (
    <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" name="city" placeholder="Your city name" className="form-control" autoFocus />
            </div>
            <div className="form-group">
                <input type="text" name="country" placeholder="Your county name" className="form-control" autoFocus />
            </div>
            <button className="btn btn-success btn-block">
                Get Weather
            </button>
        </form>
    </div>
);

export default WeatherFrom;
