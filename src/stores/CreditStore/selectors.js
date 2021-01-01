import {useSelector} from 'react-redux';
import {AppState} from '../index';

export const selectCreditStore = (state: AppState): SportsDataState =>
  state.creditStore ?? {};

export const useSpendingLimit = () =>
  useSelector((state) => selectCreditStore(state).spendingLimit);

export const useIsSpendingLimitEnable = () =>
  useSelector((state) => selectCreditStore(state).isSpendingLimitEnable);
