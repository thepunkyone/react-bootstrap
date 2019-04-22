import React from 'react';
import { shallow } from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';

describe('ForecastSummary component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow((
      <ForecastSummary
        date={1525046400000}
        temperature={10}
        description="mockDescription"
        icon="mockIcon"
      />
    ));
  });

  it('Gets passed the correct date, temperature, description and icon properties', () => { 
    const date = wrapper.find('.date').text();
    expect(date).toBe('Mon 30th Apr');
    const temperature = wrapper.find('.temperature').text();
    expect(temperature).toBe('10');
    const description = wrapper.find('.description').text();
    expect(description).toBe('mockDescription');
    const icon = wrapper.find('WeatherIcon');
    expect(icon.prop('name')).toBe('owm');
    expect(icon.prop('iconId')).toBe('mockIcon');
  });

});
