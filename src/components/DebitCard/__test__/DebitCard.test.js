import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import {DebitCard} from '../index';

describe('DebitCard', () => {
  const wrapper = shallow(
    <DebitCard
      cardNumber="1234 1234 1234 1234"
      name="Jasper Tran"
      thru="12/2022"
      cvv="123"
    />,
  );
  it('should render DebitCard with show information', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
