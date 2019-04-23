import React from 'react';
import { shallow } from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';
import { prependOnceListener } from 'cluster';
import { wrap } from 'module';

describe('ForecastSummary component', () => {
  let wrapper;
  let myOnSelectMock = jest.fn()

  beforeEach(() => {
    wrapper = shallow((
      <ForecastSummary
        date={1525046400000}
        temperature={10}
        description="mockDescription"
        icon="mockIcon"
        onSelect={myOnSelectMock}
      />
    ));
  });

  it('Gets passed the correct date, temperature, description, icon on click handler properties', () => {
    const date = wrapper.find('.date').text();
    expect(date).toBe('Mon 30th Apr');
    const temperature = wrapper.find('.temperature').text();
    expect(temperature).toBe('10');
    
    const description = wrapper.find('.description').text();
    expect(description).toBe('mockDescription');
    const icon = wrapper.find('WeatherIcon');
    expect(icon.prop('name')).toBe('owm');
    expect(icon.prop('iconId')).toBe('mockIcon');
    ////////////////////////////////  
    // const button = wrapper.find('button');
    // expect(button.prop('onClick')).toEqual('mockHandler');
  });

  it('should call onSelect function when button is clicked', () => {
    const button = wrapper.find('button');
    const onClickFn = button.prop('onClick');
    expect(myOnSelectMock).not.toHaveBeenCalled();
    onClickFn();
    expect(myOnSelectMock).toBeCalledWith(1525046400000);
  })

});
