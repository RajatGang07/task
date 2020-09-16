import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Settings from './Settings';
import { HOME_TAB, SETTINGS_TAB, TABBAR_OPTIONS } from '../../constant/config';
import TodoStack from './TodoStack/TodoStack';

const Tab = createBottomTabNavigator();

const TabStack = ({...props}) => {
  return (
    <Tab.Navigator tabBarOptions={TABBAR_OPTIONS}>
      <Tab.Screen name="Home" component={TodoStack} options={HOME_TAB} />
      <Tab.Screen name="Settings" component={Settings} options={SETTINGS_TAB} />
    </Tab.Navigator>
  );
};

export default TabStack;
