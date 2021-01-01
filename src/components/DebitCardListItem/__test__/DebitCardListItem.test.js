import React from 'react';
import {shallow} from 'enzyme';
import {DebitCardListItem} from '../index';

const icDefault = require('res/images/ic_top_up.png');

describe('DebitCardListItem', () => {
  it('should render DebitCardListItem', () => {
    const wrapper = shallow(
      <DebitCardListItem
        icon={icDefault}
        title="DebitCardListItem"
        description="DebitCardListItem"
        onSwitch={() => {}}
        isEnable={true}
        isHaveSwitch={false}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
