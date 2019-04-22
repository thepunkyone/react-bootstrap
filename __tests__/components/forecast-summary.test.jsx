import React from 'react';
import { shallow } from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';

describe('ForecastSummary component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow((
      <ForecastSummary
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon"
      />
    ));
  });

  it('Gets passed the correct date, temperature, description and icon properties', () => { 
    const date = wrapper.find('.date').text();
    expect(date).toBe('mockDate');
    const temperature = wrapper.find('.temperature').text();
    expect(temperature).toBe('mockTemperature');
    const description = wrapper.find('.description').text();
    expect(description).toBe('mockDescription');
    const icon = wrapper.find('WeatherIcon');
    expect(icon.prop('name')).toEqual('owm');
    expect(icon.prop('iconId')).toEqual('mockIcon');
  });

});
