import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { connect } from 'react-redux';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import DrawerContent from '../components/Drawer';

import { tryLocalSignIn } from '../store/action';
import TabStack from '../components/TabStack/TabStack';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Auth = ({ userToken, isSignout, ...props }) => {
    if (userToken) {
        return (
            <Drawer.Navigator
                drawerContent={(props) => <DrawerContent {...props} />}>
                <Drawer.Screen name="HomeDrawer" component={TabStack} />
            </Drawer.Navigator>
        );
    }
    return (
        <Stack.Navigator
            screenOptions={{
                title: 'Todo App',
                animationTypeForReplace: isSignout ? 'push' : 'pop',
                headerShown: false,
            }}>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            
        </Stack.Navigator>
    )

}

const mapStateToProps = (state) => {
    const { userToken, isSignout } = state.todoReducer;

    return {
        userToken,
        isSignout,
    };
};

export default connect(mapStateToProps, {
    tryLocalSignInAction: tryLocalSignIn,
})(Auth);

