import React from 'react';
import { shallow } from 'enzyme';
import ForecastSummaries from '../../src/components/forecast-summaries';
import ForecastSummary from '../../src/components/forecast-summary';


describe('ForecastSummaries component', () => {
  let wrapper;
  const forecasts = [
    {
      key: 1234,
      date: 1234,
      description: 'description',
      icon: '10',
      temperature: {
        max: 20,
      },
    },
    {
      key: 5678,
      date: 5678,
      description: 'description2',
      icon: '12',
      temperature: {
        max: 27,
      },
    },
  ];
  beforeEach(() => {
    wrapper = shallow((
      <ForecastSummaries
        forecasts={forecasts}
      />
    ));
  });

  it('renders an array of ForecastSummary components', () => {
    expect(wrapper.find('ForecastSummary')).toHaveLength(2);
  });

  it('ForecastSummary components get passed the correct props', () => {
    wrapper.find('ForecastSummary').forEach(summary => {
      expect(summary.prop('key')).toBeTruthy;
      expect(summary.prop('date')).toBeTruthy;
      expect(summary.prop('description')).toBeTruthy;
      expect(summary.prop('icon')).toBeTruthy;
      expect(summary.prop('temperature.max')).toBeTruthy;
    });

    expect(wrapper.find('ForecastSummary').at(0).prop('date')).toBe(1234);
    expect(wrapper.find('ForecastSummary').at(1).prop('icon')).toBe('12');
  });
});