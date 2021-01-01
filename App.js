import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {MainStack} from './src/navigations/MainStack';
import {navigationRef} from './src/navigations/RootNavigation';
import {configureStore} from './src/stores';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <Provider store={configureStore}>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator headerMode="none">
            <Stack.Screen component={MainStack} name="MainStack" />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};
