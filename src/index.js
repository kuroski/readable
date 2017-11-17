import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import T from 'i18n-react';

import 'normalize.css';
import './index.css';

import store from './store';
import Routes from './routes';
import ErrorBoundary from './containers/ErrorBoundary/ErrorBoundary';
import registerServiceWorker from './registerServiceWorker';

// TODO: Logic to fetch locale by browser config
T.setTexts(require('./i18n/en.json'));

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
