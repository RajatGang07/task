import React from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';

import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../../constant/Color';
import DeleteTask from './DeleteTask';
import EditTask from './EditTask';

const TaskItem = ({ task, handleSwipeRight, handleCheckBox, ...props }) => {
  const { title, id, isCompleted } = task;
  return (
    <Swipeable
      renderRightActions={() => (
        <EditTask onPress={handleSwipeRight(id)} />
      )}
      renderLeftActions={() => (
        <DeleteTask onPress={handleSwipeRight(id)} />
      )}
    >
      <View style={styles.taskItemContainer}>
        <CheckBox
          disabled={false}
          style={styles.checkBox}
          value={isCompleted}
          onValueChange={handleCheckBox(id)}
        />
        <Text
          style={[
            styles.textStyle,
            { textDecorationLine: isCompleted ? 'line-through' : 'none' },
          ]}>
          {title}
        </Text>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  taskItemContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: Colors.cream,
  },
  checkBox: {
    marginHorizontal: 2,
    fontSize: 12,
  },
  textStyle: {
    marginLeft: 5,
    color: Colors.darkBlue,
    fontSize: 18,
    padding: 3
  }
});

export default TaskItem;
