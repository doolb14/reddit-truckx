import createSagaMiddleware from '@redux-saga/core';
import {configureStore} from '@reduxjs/toolkit';
import AppReducer from './slices/app';
import saga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

// if (__DEV__) {
const createDebugger = require('redux-flipper').default;
middlewares.push(createDebugger());
// }

export const store = configureStore({
  reducer: AppReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});

sagaMiddleware.run(saga);
