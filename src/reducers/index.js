import { combineReducers } from 'redux';
import commentReducer from '../reducers/Comments';

export default combineReducers({
  comments: commentReducer,
});
