// @flow
import reduxMock from '../../__mock__/redux.mock';
import {creditStore} from '../reducers';
import {setIsSpendingLimitEnable, setSpendingLimit} from '../actions';
import {useSpendingLimit, useIsSpendingLimitEnable} from '../selectors';

const getStore = () => reduxMock({creditStore});

describe('CreditStore Redux Store', () => {
  it('should return spending limit true after set', () => {
    const {dispatch, getState} = getStore();
    dispatch(setIsSpendingLimitEnable(true));
    expect(getState().creditStore.isSpendingLimitEnable).toBe(true);
  });
  it('should return spending limit false after set', () => {
    const {dispatch, getState} = getStore();
    dispatch(setIsSpendingLimitEnable(false));
    expect(getState().creditStore.isSpendingLimitEnable).toBe(false);
  });
  it('should return spending limit value after set', () => {
    const {dispatch, getState} = getStore();
    dispatch(setSpendingLimit(1000));
    expect(getState().creditStore.spendingLimit).toBe(1000);
  });
});
