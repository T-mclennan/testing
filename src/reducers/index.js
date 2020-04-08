import { combineReducers } from 'redux';
import authReducer from 'reducers/auth';
import commentReducer from './comments';

export default combineReducers({
  auth: authReducer,
  comments: commentReducer,
});
