import {combineReducers} from 'redux';
import counterReducer from './counterReducer';

const totalReducers= combineReducers({
  count: counterReducer,
});

export default totalReducers;