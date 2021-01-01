import {ActionNames} from './action.types';

const initialState = {
  spendingLimit: 0,
  isSpendingLimitEnable: false,
};

export const creditStore = (state = initialState, action) => {
  switch (action.type) {
    case ActionNames.SET_SPENDING_LIMIT:
      const {limitValue} = action;
      return {
        ...state,
        spendingLimit: limitValue,
      };
    case ActionNames.SET_IS_SPENDING_LIMIT_ENABLE:
      const {isEnable} = action;
      return {
        ...state,
        isSpendingLimitEnable: isEnable,
      };
    default:
      return state;
  }
};
