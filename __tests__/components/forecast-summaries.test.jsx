import React from 'react';
import { shallow } from 'enzyme';
import ForecastSummaries from '../../src/components/forecast-summaries';

describe('ForecastSummaries component', () => {
  let wrapper;
  const forecasts = [
    {
      date: 1234,
      description: 'description',
      icon: '10',
      temperature: {
        max: 20,
      },
    },
    {
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
    wrapper.find('ForecastSummary').forEach((summary, index) => {
      expect(summary.prop('date')).toEqual(forecasts[index].date);
      expect(summary.prop('description')).toEqual(forecasts[index].description);
      expect(summary.prop('icon')).toEqual(forecasts[index].icon);
      expect(summary.prop('temperature')).toEqual(forecasts[index].temperature.max);
      expect(summary.prop('onSelect')).toEqual(wrapper.props.onForecastSelect);
    });

    expect(wrapper.find('ForecastSummary').at(0).prop('date')).toBe(1234);
    expect(wrapper.find('ForecastSummary').at(1).prop('icon')).toBe('12');
  });
});