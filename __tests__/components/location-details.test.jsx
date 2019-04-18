import React from 'react';
import { shallow } from 'enzyme';
import LocationDetails from '../../src/components/location-details';

describe('LocationDetails component', () =>{
  it('renders city and country properties', () => {
    const wrapper = shallow((
      <LocationDetails city="foo" country="bar" />
    ));
    const text = wrapper.find('.location-details').text();
    expect(text).toEqual('foo, bar');
  });
});
