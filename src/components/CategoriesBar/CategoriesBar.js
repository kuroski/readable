import React from 'react';
import createReactClass from 'create-react-class';
import './CategoriesBar.css';

const CategoriesBar = createReactClass({
  render: function() {
    return (
      <div>
        CategoriesBar -
        <ul>
          {this.props.categories.map(category => (
            <li key={category.name}>{category.name}</li>
          ))}
        </ul>
      </div>
    );
  }
});

export default CategoriesBar;
