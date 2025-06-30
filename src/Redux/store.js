import {
    legacy_createStore,
    combineReducers,
    compose,
    applyMiddleware,
  } from "redux";
import {thunk} from "redux-thunk";
import { authReducer,userReducer ,feedbackReducer} from "./reducer"


const rootreducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    feedback: feedbackReducer
});


const store = legacy_createStore(
    rootreducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
    );  
export default store;

if (window.Cypress) {
    window.store = store;
  }