import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './components/App/App';
import { history } from './core/middlewares';

const Routes = props => (
  <ConnectedRouter history={history}>
    <App>
      <Switch>
        <Route exact path="/" render={() => <h1>Olá mundo</h1>} />
        <Route
          exact
          path="/categories/:slug"
          render={({ match }) => <div>Categoria: {match.params.slug}</div>}
        />
      </Switch>
    </App>
  </ConnectedRouter>
);

export default Routes;
