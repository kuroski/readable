import React from 'react';
import { Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

import App from './components/App/App';

const history = createHistory();

const Routes = () => (
  <ConnectedRouter history={history}>
    <App>
      <Route exact path="/" render={() => <h1>Olá mundo</h1>} />
      <Route
        path="/categories/:slug"
        render={({ match }) => <div>Categoria: {match.params.slug}</div>}
      />
    </App>
  </ConnectedRouter>
);

export default Routes;
