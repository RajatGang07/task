import React from 'react';

import { Text, StyleSheet, SafeAreaView } from 'react-native';

const Settings = ({...props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}> Settings Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontWeight: '800',
    fontSize: 22,
  },
});

export default Settings;
