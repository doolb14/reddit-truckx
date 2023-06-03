import axios from 'axios';
import {getTokenObj} from './AuthUtils';

const ApiAxios = axios.create();

// Request interceptor
ApiAxios.interceptors.request.use(
  async config => {
    config.headers = {
      Authorization: await getAccessToken(),
      'User-Agent': 'android:com.reddit_truckx:v0.0.1',
    };
    return config;
  },
  error => Promise.reject(error),
);

const getAccessToken = async () => {
  const {accessToken} = (await getTokenObj()) || null;
  return accessToken ? 'bearer ' + accessToken : null;
};

// var is_token_refreshing = false;

// const retryRequestWithNewToken = async config => {
//   const originalRequestConfig = config;
//   delete originalRequestConfig.headers.Authorization;
//   originalRequestConfig.headers.Authorization = await getFormattedToken();

//   // delay original requests until authorization has been completed
//   return axios.request(originalRequestConfig);
// };

// const until = predFn => {
//   const poll = done => (predFn() ? done() : setTimeout(() => poll(done), 100));
//   return new Promise(poll);
// };

// ApiAxios.interceptors.response.use(
//   async response => {
//     const status_401 = response.data?.errors?.find(val => val.status === 401);
//     // Update tokens if 401
//     if (status_401) {
//       if (is_token_refreshing) {
//         // delay original requests until authorization has been completed
//         await until(() => !is_token_refreshing);
//         var q = await retryRequestWithNewToken(response.config);
//         return q;
//       } else {
//         var new_resp = response;
//         is_token_refreshing = true;
//         await refreshAndSaveToken()
//           .then(async token_data => {
//             new_resp = await retryRequestWithNewToken(response.config);
//           })
//           .catch(e => {
//             Promise.reject(e);
//           })
//           .finally(() => {
//             is_token_refreshing = false;
//           });

//         return new_resp;
//       }
//     }
//     return response;
//   },
//   error => {
//     return Promise.reject(error);
//   },
// );

export default ApiAxios;
