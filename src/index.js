import React from 'react';
import ReactDOM from 'react-dom';
import T from 'i18n-react';
import { Provider } from 'react-redux';

import 'normalize.css';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Routes from './routes';
import store from './core/store';

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
