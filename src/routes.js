import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './components/App/App';
import PostList from './components/PostList/PostList';
import { history } from './core/middlewares';

const Routes = props => (
  <ConnectedRouter history={history}>
    <App>
      <Switch>
        <Route exact path="/" render={() => <PostList />} />
        <Route
          exact
          path="/categories/:slug"
          render={({ match }) => (
            <div>
              Categoria: {match.params.slug}{' '}
              <PostList category={match.params.slug} />
            </div>
          )}
        />
      </Switch>
    </App>
  </ConnectedRouter>
);

export default Routes;
