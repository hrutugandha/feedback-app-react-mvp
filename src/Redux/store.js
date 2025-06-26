// import { legacy_createStore } from "redux";
// import reducer from "./reducer";

// const store = legacy_createStore(reducer);

// export default store;


import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import feedbackReducer from './slices/feedbackSlice';
import { legacy_createStore } from 'redux';



const store = legacy_createStore(reducer)

export default configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    feedback: feedbackReducer,
  },
});