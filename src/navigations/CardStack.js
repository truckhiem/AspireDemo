import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {CardScreen} from 'screens/CardScreen';
import {SpendingLimit} from 'screens/SpendingLimit';

const Stack = createStackNavigator();

export function CardStack() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="CardScreen"
        component={CardScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SpendingLimit"
        component={SpendingLimit}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
