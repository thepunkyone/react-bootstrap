import React from 'react';
import { shallow } from 'enzyme';
import ForecastDetails from '../../src/components/forecast-details';

describe('ForecastDetails component', () => {
  let wrapper;
  const forecast = {
    date: 1525046400000,
    temperature: {
      min: 10,
      max: 20,
    },
    humidity: 13,
    wind: {
      speed: 20,
      direction: 's',
    },
  };
    
  beforeEach(() => {
    wrapper = shallow((
      <ForecastDetails
        forecast={forecast}
      />
    ));
  });

  it('ForecastDetails component gets passed the correct props', () => {
    const date = wrapper.find('.date').text();
    expect(date).toBe('Mon 30th Apr');
    const temperatureMax = wrapper.find('.temperature-max').text();
    expect(temperatureMax).toBe('20');
    const temperatureMin = wrapper.find('.temperature-min').text();
    expect(temperatureMin).toBe('10');
    const humidity = wrapper.find('.humidity').text();
    expect(humidity).toBe('13');
    const windSpeed = wrapper.find('.wind-speed').text();
    expect(windSpeed).toBe('20');
    const windDirection = wrapper.find('.wind-direction').text();
    expect(windDirection).toBe('s');
  });
});
