import { applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import { apiMiddleware } from 'redux-api-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import apiError from './api-error-middleware';

const history = createHistory();

export const middlewares = [
  thunk,
  promise(),
  apiMiddleware,
  apiError,
  routerMiddleware(history)
];

if (process.env.NODE_ENV.toLowerCase() === 'development') {
  middlewares.push(
    createLogger({
      actionTransformer: action => ({
        ...action,
        type: String(action.type)
      })
    })
  );
}

export default composeWithDevTools(applyMiddleware(...middlewares));
