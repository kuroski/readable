import React from 'react';
import ReactDOM from 'react-dom';
import T from 'i18n-react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import 'normalize.css';
import 'semantic-ui-css/semantic.min.css';

import ErrorBoundary from './containers/ErrorBoundary/ErrorBoundary';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import Routes from './routes';

// Set up redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Set up react-router-redux
const history = createHistory();
const middleware = routerMiddleware(history);

// Set up reducers and enhancers
const reducers = combineReducers({
  ...rootReducer,
  router: routerReducer
});

const enhancers = composeEnhancers(
  applyMiddleware(thunk),
  applyMiddleware(middleware)
);

const store = createStore(reducers, enhancers);

// TODO: Logic to fetch locale by browser config
T.setTexts(require('./i18n/en.json'));

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <Routes history={history} />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
