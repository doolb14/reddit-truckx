import {
  getApiToGetSubredditPosts,
  GET_SUBSCRIBED_SUBREDDITS,
} from '../../constants/api';
import ApiAxios from '../../utils/ApiAxios';
import {
  call,
  fork,
  put,
  select,
  takeLatest,
  take,
  cancel,
} from 'redux-saga/effects';
import {loginUser, logoutUser} from '../slices/login';
import {
  createSubredditList,
  changeSelectedSubredditUrl,
} from '../slices/subreddit';
import {
  changePostsFilter,
  createPostsList,
  appendPostsList,
} from '../slices/post';
import {resetTokenObj} from '../../utils/AuthUtils';
import {FETCH_MORE_POSTS} from './saga_actions';

// fetch subreddits
function* fetchSubreddits() {
  try {
    const response = yield call(ApiAxios.get, GET_SUBSCRIBED_SUBREDDITS);
    yield put({
      type: createSubredditList.type,
      payload: {data: response?.data?.data?.children},
    });
    if (response?.data?.data?.children?.length) {
      yield put({
        type: changeSelectedSubredditUrl.type,
        payload: {url: response?.data?.data?.children[0]?.data?.url},
      });
    }
  } catch (err) {
    console.error('Redux-Saga(fetchSubreddits): ', err);
  }
}

// fetch posts for selected subreddit
function* fetchPosts(api_params = {}) {
  try {
    const selected_subreddit_url = yield select(
      state => state.subreddit.selected_subreddit_url,
    );
    const selected_post_filter = yield select(state => state.post.filter);
    if (selected_subreddit_url && selected_post_filter) {
      const response = yield call(
        ApiAxios.get,
        getApiToGetSubredditPosts(selected_subreddit_url, selected_post_filter),
        {params: api_params},
      );
      if (response?.data?.data?.children?.length) {
        if (api_params?.after) {
          yield put({
            type: appendPostsList.type,
            payload: {posts: response?.data?.data?.children},
          });
        } else {
          yield put({
            type: createPostsList.type,
            payload: {posts: response?.data?.data?.children},
          });
        }
      }
    }
  } catch (err) {
    console.error('Redux-Saga(fetchPosts): ', err);
  }
}

// reset tokens
function* resetTokens() {
  yield call(resetTokenObj);
}

// user logs in
function* loginSaga() {
  yield takeLatest(loginUser.type, fetchSubreddits);
}

// user logs out
function* logoutSaga() {
  yield takeLatest(logoutUser.type, resetTokens);
}

// subreddit changed
function* subredditSelectedSagaFlow() {
  var active_tasks = [];
  while (true) {
    const action = yield take([
      changeSelectedSubredditUrl.type,
      changePostsFilter.type,
      FETCH_MORE_POSTS,
    ]);
    if (
      action.type === changeSelectedSubredditUrl.type ||
      action.type === changePostsFilter.type
    ) {
      while (active_tasks.length) {
        yield cancel(active_tasks[0]);
        active_tasks.shift();
      }
      const fetch_posts_task = yield fork(fetchPosts);
      active_tasks.push(fetch_posts_task);
    } else if (action.type === FETCH_MORE_POSTS) {
      // loadMorePosts
      const last_post_name = yield select(
        state => state.post.list?.slice(-1)[0]?.data?.name,
      );
      if (last_post_name) {
        yield call(fetchPosts, {after: last_post_name});
      }
    }
  }
}

export default function* rootSaga() {
  yield fork(loginSaga);
  yield fork(logoutSaga);
  yield fork(subredditSelectedSagaFlow);
}
