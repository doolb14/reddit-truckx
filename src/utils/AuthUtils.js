import {authorize} from 'react-native-app-auth';
import {
  getInternetCredentials,
  setInternetCredentials,
} from 'react-native-keychain';
import {
  REDDIT_AUTHORIZATION_ENDPOINT,
  REDDIT_TOKEN_ENDPOINT,
} from '../constants/api';
import {REDDIT_CLIENT_ID} from '@env';

const LOGIN_KCID = 'reddit-token-keychain'; // DO NOT CHANGE

export const requestUserLogin = async () => {
  const cid = REDDIT_CLIENT_ID;
  const config = {
    redirectUrl: 'com.reddittruckx://oauth2redirect/reddit',
    clientId: cid,
    clientSecret: '',
    // duration: 'permanent',
    scopes: ['mysubreddits', 'read'],
    serviceConfiguration: {
      authorizationEndpoint: REDDIT_AUTHORIZATION_ENDPOINT,
      tokenEndpoint: REDDIT_TOKEN_ENDPOINT,
    },
  };
  const token_credentials = await authorize(config);
  setTokenObj(token_credentials);
};

const setTokenObj = token_obj => {
  setInternetCredentials(LOGIN_KCID, '__t', JSON.stringify(token_obj));
};

export const getTokenObj = async () => {
  const res = await getInternetCredentials(LOGIN_KCID);
  return res?.password ? JSON.parse(res?.password) : null;
};

export const resetTokenObj = async () => {
  console.log('Resetting token');
  setTokenObj(null);
};
