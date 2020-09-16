import AsyncStorage from '@react-native-community/async-storage';
import _get from 'lodash.get';

const setStringValue = async (token, userName) => {
  try {
    await AsyncStorage.multiSet([
      ['token', token],
      ['userName', userName],
    ]);
  } catch (e) {
    console.log('error:', e);
  }
};

const getMyStringValue = async () => {
  try {
    const localStorageData = await AsyncStorage.multiGet(['token', 'userName']);
    const userToken = localStorageData[0][1];
    const userName = localStorageData[1][1];
    return {userToken, userName};
  } catch (e) {
    console.log('error:', e);
  }
};

export const signIn = (userName) => async (dispatch) => {
  const userToken = '3xc65-wZ98-43232';
  await setStringValue(userToken, userName);
  dispatch({
    type: 'SIGN_IN',
    payload: {userToken, userName},
  });
};

const removeValue = async () => {
  try {
    await AsyncStorage.multiRemove(['token', 'userName']);
  } catch (e) {
    console.log('error:', e);
  }
};

export const signUp = ( userName) => async (
  dispatch,
) => {
  const userToken = '3xc65-wZ98-43232';
  await setStringValue(userToken, userName);
  dispatch({
    type: 'SIGN_UP',
    payload: {userToken, userName},
  });
};

export const logOut = () => async (dispatch) => {
  console.log("Calling: logout")
  await removeValue();
  dispatch({
    type: 'SIGN_OUT',
  });
};

export const tryLocalSignIn = () => async (dispatch) => {
  const {userToken, userName} = await getMyStringValue();
  if (userToken) {
    dispatch({
      type: 'SIGN_IN',
      payload: {userToken, userName},
    });
  }
};


export const addList = (listName) => (dispatch) => {
  dispatch({
    type: 'ADD_LIST',
    payload: listName,
  });
};

export const deleteTodo = (listId, todoId) => (dispatch) => {
  dispatch({
    type: 'DELETE_TODO',
    payload: {listId, todoId},
  });
};

export const addTodo = (listId, title) => (dispatch) => {
  dispatch({
    type: 'ADD_TODO',
    payload: {listId, title},
  });
};

export const toggleTodo = (listId, todoId) => (dispatch) => {
  dispatch({
    type: 'TOGGLE_TODO',
    payload: {listId, todoId},
  });
};

