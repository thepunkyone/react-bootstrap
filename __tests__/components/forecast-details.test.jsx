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
    
  });
});
