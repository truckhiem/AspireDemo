// @flow

import Enzyme, {shallow} from 'enzyme';
import snapshotDiff from 'snapshot-diff';
import Adapter from 'enzyme-adapter-react-16';
import 'react-native-gesture-handler/jestSetup';
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';

Enzyme.configure({adapter: new Adapter()});

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter', () => {
  jest.fn();
  return class foo1 {
    constructor(lol) {
      this.hitt = lol;
    }

    bleManagerEmitter = {
      addListener: () => {
        'bar';
      },
      start: () => {},
    };

    static start() {}

    addListener = () => {};
  };
});

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

jest.mock('react-native-i18n', () => ({
  t: (k) => k,
  locale: 'en-EN',
}));

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('redux-persist/lib/createPersistoid', () =>
  jest.fn(() => ({
    update: jest.fn(),
    flush: jest.fn(),
  })),
);

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
global.snapshotDiff = snapshotDiff;
global.shallow = shallow;
