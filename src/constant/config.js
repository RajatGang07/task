import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from './Color';

export const SETTINGS_TAB = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({color, size}) => (
    <Icon name="cog-outline" color={color} size={size} />
  ),
};

export const HOME_TAB = {
  tabBarLabel: 'Home',
  tabBarIcon: ({color, size}) => <Icon name="home" color={color} size={size} />,
};

export const TABBAR_OPTIONS = {
  activeTintColor: Colors.darkBlue,
  inactiveTintColor: Colors.fadedBlue,
  labelStyle: {
    fontSize: 14,
  },
};
