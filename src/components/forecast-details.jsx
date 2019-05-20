import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ForecastDetails = props => (
  <div className="forecast-details">
    <div className="date">
      <span>
        {moment(props.forecast.date).format('ddd Do MMM')}
      </span>
    </div>
    <div className="temperature-min">
      <span>
        {props.forecast.temperature.min}
      </span>
    </div>
    <div className="temperature-max">
      <span>
        {props.forecast.temperature.max}
      </span>
    </div>
    <div className="humidity">
      <span>
        {props.forecast.humidity}
      </span>
    </div>
    <div className="wind-speed">
      <span>
        {props.forecast.wind.speed}
      </span>
    </div>
    <div className="wind-direction">
      <span>
        {props.forecast.wind.direction}
      </span>
    </div>
  </div>
);

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    temperature: {
      min: PropTypes.number,
      max: PropTypes.number,
    },
    humidity: PropTypes.number,
    wind: {
      speed: PropTypes.number,
      direction: PropTypes.string,
    },
  }).isRequired,
};

export default ForecastDetails;
