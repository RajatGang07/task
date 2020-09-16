import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  isSignout: true,
  userToken: null,
  isLoading: false,
  lists: [
    {
      id: 'l1',
      title: 'Home task',
    },
    {
      id: 'l2',
      title: 'Office task',
    },
    {
      id: 'l3',
      title: 'Un-Official task',
    },
  ],
  todos: {
    l1: {
      L1T1: {
        id: 'L1T1',
        title: 'Plan a trip',
        isCompleted: false,
      }
    },
    l2: {
      L2T1: {
        id: 'L2T1',
        title: 'Learn RN',
        isCompleted: true,
      },
    },
    l3: {
      L3T1: {
        id: 'L3T1',
        title: 'Prank Call',
        isCompleted: false,
      },
    }
  },
};

const getId = () => (Math.random() * 1000).toString();

const todoReducer = createReducer(initialState, {
  ADD_LIST: (state, action) => {
    const { lists, todos } = state;
    const id = getId();
    lists.push({
      id: id,
      title: action.payload,
    });

    todos[id] = {};
  },
  DELETE_TODO: (state, action) => {
    const { todos } = state;
    const { listId, todoId } = action.payload;
    delete todos[listId][todoId];
  },
  ADD_TODO: (state, action) => {
    const { todos } = state;
    const todoId = getId();
    const { listId, title } = action.payload;
    todos[listId][todoId] = { id: todoId, title: title, isCompleted: false };
  },
  TOGGLE_TODO: (state, action) => {
    const { todos } = state;
    const { listId, todoId } = action.payload;

    const targettedTodo = todos[listId][todoId];
    targettedTodo.isCompleted = !targettedTodo.isCompleted;
  },
  SIGN_IN: (state, action) => {
    console.log("action sign in", action.payload);
    state.isSignout = false;
    const { userToken, userName } = action.payload;
    state.userToken = userToken;
    state.userName = userName;
  },
  SIGN_UP: (state, action) => {
    console.log("action sign up", action.payload);
    state.isSignout = false;
    const { userToken, userName } = action.payload;
    state.userToken = userToken;
    state.userName = userName;
  },
  SIGN_OUT: (state) => {
    state.isSignout = true;
    state.userToken = null;
  },
});

export default combineReducers({
  todoReducer,
});
