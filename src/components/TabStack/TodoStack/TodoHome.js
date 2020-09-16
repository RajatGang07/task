import React, { useState } from 'react';
import { connect } from 'react-redux';

import _get from 'lodash.get';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import { addList } from '../../../store/action';
import Colors from '../../../constant/Color';

handleSubmit = (inputText, props, setInputText) => {
  const { addListAction } = props;
  debugger
  addListAction(inputText);
  setInputText("");
};

handleListClick = (id, title, props) => () => {
  const { navigation } = props;
  navigation.navigate('Details', { id: id, title: title });
};


const TodoHome = ({ lists, ...props }) => {
  const [inputText, setInputText] = useState("");

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <View style={styles.headingSubContainer}>
            <Text style={styles.title}>Tasks {`(${lists.length})`}</Text>
          </View>
          <TextInput
            placeholder="Add task here"
            style={styles.textInput}
            onChangeText={(text) => setInputText(text)}
            onSubmitEditing={() => handleSubmit(inputText, props, setInputText)}
            value={inputText}
          />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={lists}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={handleListClick(item.id, item.title, props)}>
              <Text style={styles.textStyle}>
                <Text style={styles.index}>{index + 1}.</Text> {item.title}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(list) => list.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.cream,
  },
  container: {
    padding: 10,
    flex: 1,
  },
  headingSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: Colors.darkBlue,
    fontWeight: '800',
    fontSize: 24,
  },
  textInput: {
    marginVertical: 5,
    padding: 5,
    borderRadius: 3,
    borderColor: Colors.ligthGrey,
    borderWidth: 1,
    height: 40,
  },
  index: {
    color: Colors.blue,
    fontWeight: '500',
  },
  textStyle: {
    color: Colors.darkBlue,
    fontSize: 20,
    marginVertical: 5,
  },
});

const mapStateToProps = (state) => {
  const lists = _get(state, 'todoReducer.lists');
  return {
    lists: lists,
  };
};

export default connect(mapStateToProps, {
  addListAction: addList,
})(TodoHome);
