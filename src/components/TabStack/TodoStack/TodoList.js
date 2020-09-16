import React, { useState } from 'react';
import { connect } from 'react-redux';
import _get from 'lodash.get';
import _values from 'lodash.values';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';

import TaskItem from './TaskItem';
import Separator from '../../Separator';
import { deleteTodo, addTodo, toggleTodo } from '../../../store/action';

import Colors from '../../../constant/Color';



handleSwipeRight = (id, todoId, props) => () => {
  const { deleteTodoAction } = props;
  deleteTodoAction(id, todoId);
};


handleSubmit = (inputText, id, props, setInputText) => {
  console.log(props, "props");
  const { addTodoAction } = props;
  addTodoAction(id, inputText);
  setInputText("");
};


handleCheckBox = (id, todoId, props) => () => {
  const { toggelTodoAction } = props;
  toggelTodoAction(id, todoId);
};


const TodoList = ({ allTodos, ...props }) => {
  const [inputText, setInputText] = useState("");

  const { id, title } = props.route.params;

  const todos = _values(allTodos[id]);
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.title}>
          {title} {`(${todos.length})`}
        </Text>
        <TextInput
          placeholder="Add Task here....."
          style={styles.textInput}
          onChangeText={(text) => setInputText(text)}
          onSubmitEditing={() => handleSubmit(inputText, id, props, setInputText)}
          value={inputText}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={todos}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => {
          return (
            <TaskItem
              task={item}
              handleSwipeRight={(todoId) => handleSwipeRight(id, todoId, props)}
              handleCheckBox={(todoId) => handleCheckBox(id, todoId, props)}
            />
          );
        }}
        keyExtractor={(task) => task.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.cream,
  },
  title: {
    color: Colors.darkBlue,
    fontWeight: '500',
    fontSize: 24,
  },
  textInput: {
    marginVertical: 5,
    padding: 5,
    borderRadius: 2,
    borderColor: Colors.ligthGrey,
    borderWidth: 1,
    height: 40,
  },
  textStyle: {
    color: Colors.slateBlue,
    fontSize: 20,
    marginVertical: 5,
  },
});

const mapStateToProps = (state) => {
  const todos = _get(state, 'todoReducer.todos');
  return {
    allTodos: todos,
  };
};

export default connect(mapStateToProps, {
  deleteTodoAction: deleteTodo,
  addTodoAction: addTodo,
  toggelTodoAction: toggleTodo,
})(TodoList);
