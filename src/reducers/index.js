import { combineReducers } from 'redux';
import { appReducer } from 'reducers/app.js';
import { studentReducer } from 'reducers/student.js';

export default combineReducers({
  appReducer,
  studentReducer,
});
