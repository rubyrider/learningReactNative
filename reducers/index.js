// reducers/index.js
import {combineReducers} from 'redux';
import session from './sessionSlice';

const rootReducer = combineReducers({
  session,
});

export default rootReducer;
