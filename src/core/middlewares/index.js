import createHistory from 'history/createBrowserHistory';
import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

// Set up redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Set up react-router-redux
export const history = createHistory();
const middleware = routerMiddleware(history);

export default composeEnhancers(
  applyMiddleware(thunk),
  applyMiddleware(middleware)
);
