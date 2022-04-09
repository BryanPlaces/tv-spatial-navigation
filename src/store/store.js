import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

let composeEnhacers = compose;

if (typeof window !== 'undefined') {
  composeEnhacers = window['__REDUX_DEVTOOLS_EXTENSION__']
}

const rootReducer = combineReducers({...reducers});

const store = createStore(
  rootReducer,
  composeEnhacers(
    applyMiddleware(thunkMiddleware)
  )
);

export default store;