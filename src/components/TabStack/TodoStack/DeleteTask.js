import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../../../constant/Color';

const DeleteTask = ({ onPress, ...props }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.rightAction}>
      <Text style={[styles.rightActionText]}>Delete</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rightAction: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: Colors.red,
    padding: 15,
  },
  rightActionText: {
    color: Colors.white,
    fontSize: 18,
  },
});

export default DeleteTask;
