import React from 'react';
import {shallow} from 'enzyme';
import {DebitCardLimit} from '../index';

describe('DebitCardLimit', () => {
  it('should render DebitCardLimit', () => {
    const wrapper = shallow(<DebitCardLimit value={100} total={200} />);
    expect(wrapper).toMatchSnapshot();
  });
});
