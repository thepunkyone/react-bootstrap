import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from '../components/location-details';
import ForecastSummaries from '../components/forecast-summaries';
import ForecastDetails from '../components/forecast-details';
import '../styles/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: this.props.forecasts[0].date,
    };
  }

  render() {
    const props = this.props;
    const selectedForecast = props.forecasts.find(forecast => {
      return forecast.date === this.state.selectedDate;
    });

    return (
      <div className="forecast">
        <LocationDetails
          city={props.location.city}
          country={props.location.country}
        />
        <ForecastSummaries forecasts={props.forecasts} />
        <ForecastDetails forecast={selectedForecast} />
      </div>
    );
  }
}


App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};

export default App;
