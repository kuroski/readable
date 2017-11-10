import React from 'react';
import ReactDOM from 'react-dom';
import T from 'i18n-react';
import './index.css';
import App from './containers/App/App';
import ErrorBoundary from './containers/ErrorBoundary/ErrorBoundary';
import registerServiceWorker from './registerServiceWorker';

// TODO: Logic to fetch locale by browser config
T.setTexts(require('./i18n/en.json'));

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);
registerServiceWorker();
