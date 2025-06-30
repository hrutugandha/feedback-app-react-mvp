import { legacy_createStore } from "redux";
// import reducer from "./reducer";

// const store = legacy_createStore(reducer);

// export default store;


import {feedbackReducer, authReducer, userReducer} from './reducer';



export default({
  reducer: {
    auth: authReducer,
    users: userReducer,
    feedback: feedbackReducer,
  },
});