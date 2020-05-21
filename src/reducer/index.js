import { combineReducers } from 'redux';
import postReducer from '../reducer/post/reducer';

export default combineReducers({
  posts: postReducer,
});
