import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';


let reducers = combineReducers({
   form: formReducer,
})

let store = createStore(
   reducers,
   compose(
      applyMiddleware(thunkMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   )
);


export default store;

