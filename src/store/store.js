import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { authReducer } from "../reducers/authReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    auth: authReducer
})

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    ) 
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);