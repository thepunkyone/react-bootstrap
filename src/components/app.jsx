import React from 'react';
import axios from 'axios';
import LocationDetails from '../components/location-details';
import ForecastSummaries from '../components/forecast-summaries';
import ForecastDetails from '../components/forecast-details';
import '../styles/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }

  render() {
    const state = this.state;
    const selectedForecast = state.forecasts.find(forecast => {
      return forecast.date === state.selectedDate;
    });

    return (
      <div className="forecast">
        <LocationDetails
          city={state.location.city}
          country={state.location.country}
        />
        <ForecastSummaries forecasts={state.forecasts} onForecastSelect={this.handleForecastSelect} />
        {
          selectedForecast && <ForecastDetails forecast={selectedForecast} />
        }
      </div>
    );
  }
}

export default App;
