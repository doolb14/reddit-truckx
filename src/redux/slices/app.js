import {combineReducers} from 'redux';
import LoginReducer from './login';
import PostReducer from './post';
import SubredditReducer from './subreddit';

export default combineReducers({
  login: LoginReducer,
  post: PostReducer,
  subreddit: SubredditReducer,
});
