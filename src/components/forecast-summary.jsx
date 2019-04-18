import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => (
  <div className="forecast-summary">
    <div className="date">
      <span>
        {props.date}
      </span>
    </div>
    <div className="temperature">
      <span>
        {props.temperature}
      </span>
    </div>
    <div className="description">
      <span>
        {props.description}
      </span>
    </div>
    <div className="icon">
      <span>
        {props.icon}
      </span>
    </div>
  </div>
);

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastSummary;
