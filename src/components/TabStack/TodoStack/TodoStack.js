import React from 'react';
import { connect } from 'react-redux';

import _get from 'lodash.get';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

import TodoHome from './TodoHome';
import TodoList from './TodoList';

import Colors from '../../../constant/Color';

import { logOut } from '../../../store/action';
import LogoutButton from '../../LogoutButton';


const Stack = createStackNavigator();

const TodoStack = ({ loggedInUser, navigation, logOutAction, ...props }) => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.cream,
          },
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={styles.menuIcon}
                onPress={() => navigation.openDrawer()}>
                <Icon name="menu" size={25} />
              </TouchableOpacity>
            );
          },

          headerRight: () => {
            return (
              <TouchableOpacity>
                  <LogoutButton />
              </TouchableOpacity>
            );
          },

        }}>
        <Stack.Screen
          name="TodoHome"
          component={TodoHome}
          options={{
            title: `Hi, ${loggedInUser}`,
          }}
        />
        <Stack.Screen
          name="Details"
          component={TodoList}
          options={({ route }) => ({
            title: route.params.title,
          })}
        />


      </Stack.Navigator>

    </>
  );
};

const styles = StyleSheet.create({
  menuIcon: {
    marginLeft: 10,
  },
});

const mapStateToProps = (state) => {
  const userName = _get(state, 'todoReducer.userName');
  return {
    loggedInUser: userName,
  };
};

export default connect(mapStateToProps, {
  logOutAction: logOut,
})(TodoStack);
