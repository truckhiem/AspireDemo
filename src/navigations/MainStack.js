import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {BottomBarIcon} from '../elements/BottomBarIcon';
import {EmptyScreen} from '../screens/EmptyScreen';
import {BOTTOM_BAR} from 'res/data/bottom_bar';
import {COLORS} from '../utils/theme/Colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function MainStack() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          return <BottomBarIcon focused={focused} title={route.name} />;
        },
      })}
      tabBarOptions={{
        iconStyle: {
          backgroundColor: 'green',
          paddingTop: 0,
        },
        activeTintColor: COLORS.green,
        inactiveTintColor: COLORS.grey,
        showLabel: false,
        tabStyle: {
          paddingTop: 10,
        },
        style: {
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 5,
        },
      }}>
      {BOTTOM_BAR.map((tab) => (
        <Tab.Screen
          component={tab.component}
          name={tab.title}
          key={tab.title}
        />
      ))}
    </Tab.Navigator>
  );
}
