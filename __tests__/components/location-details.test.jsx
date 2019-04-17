import React from 'react';
import Enzyme from 'enzyme';
import LocationDetails from '../../src/components/location-details';

describe('LocationDetails component', () =>{
  it('renders the passed city and country in location-details class', () => {
    const wrapper = Enzyme.shallow((
      <LocationDetails city="foo" country="bar" />
    ));
    const text = wrapper.find('.location-details').text();
    expect(text).toEqual('foo, bar');
  });
});
