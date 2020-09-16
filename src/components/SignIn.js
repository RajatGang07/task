import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    SafeAreaView,
} from 'react-native';
import { signIn } from '../store/action';

import Colors from '../constant/Color';

const SignInScreen = ({ signInAction, navigation,...props }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Button
                        title="Sign Up"
                        onPress={() => navigation.navigate('SignUp')}
                    />
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.headingText}>Manage your Daily Tasks </Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Username"
                            value={username}
                            onChangeText={setUsername}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>
                    <Button
                        title="Sign in"
                        onPress={() =>
                            username && password && signInAction(username, password)
                        }
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    headerContainer: {
        alignItems: 'flex-end',
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 50,
    },
    headingText: {
        color: Colors.darkBlue,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '600',
    },
    inputContainer: {
        marginVertical: 5,
        height: 45,
    },
    label: {
        fontSize: 16,
    },
    textInput: {
        borderRadius: 3,
        flex: 1,
        padding: 10,
        fontSize: 16,
        borderColor: Colors.ligthGrey,
        borderWidth: 1,
    },
});

export default connect(null, {
    signInAction: signIn,
})(SignInScreen);
