import React from 'react';
import createReactClass from 'create-react-class';
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import './App.css';

const App = createReactClass({
  getInitialState: () => ({
    categories: [
      {
        name: 'react',
        path: 'react'
      },
      {
        name: 'redux',
        path: 'redux'
      },
      {
        name: 'udacity',
        path: 'udacity'
      }
    ]
  }),

  render: function() {
    return (
      <div className="App">
        <CategoriesBar categories={this.state.categories} />
        <Container text style={{ marginTop: '7em' }}>
          <Route exact path="/" render={() => <h1>Olá mundo</h1>} />

          <Route
            path="/categories/:slug"
            render={({ match }) => <div>Categoria: {match.params.slug}</div>}
          />
        </Container>
      </div>
    );
  }
});

export default App;
