import {POST_FILTERS} from '.';

const BASE_REDDIT_URL = 'https://oauth.reddit.com';

// **Authorization**
export const REDDIT_AUTHORIZATION_ENDPOINT =
  'https://www.reddit.com/api/v1/authorize.compact';
export const REDDIT_TOKEN_ENDPOINT =
  'https://www.reddit.com/api/v1/access_token';

// **Subreddits**
export const GET_SUBSCRIBED_SUBREDDITS =
  BASE_REDDIT_URL + '/subreddits/mine/subscriber';
export const getApiToGetSubredditPosts = (subreddit_url, filter) => {
  switch (filter) {
    case POST_FILTERS.HOT:
      return BASE_REDDIT_URL + subreddit_url + 'hot';
    case POST_FILTERS.NEW:
      return BASE_REDDIT_URL + subreddit_url + 'new';
    case POST_FILTERS.CONTROVERSIAL:
      return BASE_REDDIT_URL + subreddit_url + 'controversial';
    case POST_FILTERS.TOP:
      return BASE_REDDIT_URL + subreddit_url + 'top';
  }
};

// Comments
export const getApiToGetPostComments = post_id =>
  BASE_REDDIT_URL + '/comments/' + post_id;
