import React from 'react';
import axios from 'axios';
import LocationDetails from '../components/location-details';
import SearchForm from '../components/search-form';
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
      error: false,
    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
  }

  componentDidMount() {
    const url = 'https://mcr-codes-weather.herokuapp.com/forecast?city=Manchester';
    axios.get(url).then(response => {
      const data = response.data;
      this.setState({
        forecasts: data.forecasts,
        location: {
          city: data.location.city,
          country: data.location.country,
        },
      });
    });
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
        <SearchForm />
        <ForecastSummaries forecasts={state.forecasts} onForecastSelect={this.handleForecastSelect} />
        {
          selectedForecast && <ForecastDetails forecast={selectedForecast} />
        }
      </div>
    );
  }
}

export default App;
