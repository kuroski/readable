import React from 'react';
import createReactClass from 'create-react-class';
import { Route } from 'react-router-dom';
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar';
import logo from './logo.svg';
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CategoriesBar categories={this.state.categories} />
        <Route exact path="/" render={() => <h1>Olá mundo</h1>} />

        <Route
          path="/categories/:slug"
          render={({ match }) => <div>Categoria: {match.params.slug}</div>}
        />
      </div>
    );
  }
});

export default App;
