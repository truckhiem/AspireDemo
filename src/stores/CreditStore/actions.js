import {ActionNames} from './action.types';

export const setSpendingLimit = (limitValue) => ({
  type: ActionNames.SET_SPENDING_LIMIT,
  limitValue,
});

export const setIsSpendingLimitEnable = (isEnable) => ({
  type: ActionNames.SET_IS_SPENDING_LIMIT_ENABLE,
  isEnable,
});
