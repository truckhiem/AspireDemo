import {combineReducers, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {creditStore} from './CreditStore/reducers';

// put here all the reducer
export const rootReducer = combineReducers({
  creditStore,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // sessionStorage,
};

const pReducer = persistReducer(persistConfig, rootReducer);
export type AppState = ReturnType<typeof rootReducer>;
export const configureStore = createStore(pReducer);
export const persistor = persistStore(configureStore);
