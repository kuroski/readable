import React from 'react';
import createReactClass from 'create-react-class';
import Link from 'react-router-dom/Link';
import PropTypes from 'prop-types';
import './CategoriesBar.css';

const CategoriesBar = createReactClass({
  render: function() {
    return (
      <div>
        CategoriesBar -
        <ul>
          {this.props.categories.map(category => (
            <li key={category.name}>
              <Link to={category.path}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
});

CategoriesBar.propTypes = {
  categories: PropTypes.array.isRequired
};

CategoriesBar.defaultProps = {
  categories: []
};

export default CategoriesBar;
