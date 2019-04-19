import React from 'react';
import { shallow } from 'enzyme';
import ForecastSummaries from '../../src/components/forecast-summaries';

describe('ForecastSummaries component', () =>{
  it('renders an array of ForecastSummary components', () => {
    const wrapper = shallow((
      <ForecastSummaries />
    ));
    
  });
});
