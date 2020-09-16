import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../../../constant/Color';

const EditTask = ({ ...props }) => {
  return (
    <TouchableOpacity onPress={() => alert('Edit button pressed')}  style={styles.rightAction}>
      <Text style={[styles.rightActionText]}>Edit
      </Text>
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

export default EditTask;
