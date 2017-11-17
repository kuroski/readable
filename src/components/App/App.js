import React from 'react';
import createReactClass from 'create-react-class';
import CategoriesBarContainer from '../../containers/CategoriesBarContainer/CategoriesBarContainer';
import './App.css';

const App = createReactClass({
  getInitialState: () => ({
    categories: []
  }),

  render: function() {
    return (
      <div className="App">
        <CategoriesBarContainer />
        {this.props.children}
      </div>
    );
  }
});

export default App;
