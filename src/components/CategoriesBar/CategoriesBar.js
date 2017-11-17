import React from 'react';
import createReactClass from 'create-react-class';
import Link from 'react-router-dom/Link';
import PropTypes from 'prop-types';
import './CategoriesBar.css';

const CategoriesBar = createReactClass({
  render: function() {
    console.log('=====');
    console.log(this.props);
    return (
      <nav className="categories-bar">
        {this.props.categories.map(category => (
          <Link
            key={category.path}
            to={`categories/${category.path}`}
            className="categories-bar__link"
          >
            {category.name}
          </Link>
        ))}
      </nav>
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
