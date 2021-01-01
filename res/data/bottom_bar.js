import {EmptyScreen} from 'screens/EmptyScreen';
import {CardStack} from '../../src/navigations/CardStack';
export const BOTTOM_BAR = [
  {
    title: 'Home',
    icon: require('res/images/ic_bottom_bar_home.png'),
    component: EmptyScreen,
  },
  {
    title: 'Card',
    icon: require('res/images/ic_bottom_bar_card.png'),
    component: CardStack,
  },
  {
    title: 'Payments',
    icon: require('res/images/ic_bottom_bar_payments.png'),
    component: EmptyScreen,
  },
  {
    title: 'Credit',
    icon: require('res/images/ic_bottom_bar_credit.png'),
    component: EmptyScreen,
  },
  {
    title: 'Profile',
    icon: require('res/images/ic_bottom_bar_account.png'),
    component: EmptyScreen,
  },
];
