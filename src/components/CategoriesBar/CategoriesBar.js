import React from 'react';
import createReactClass from 'create-react-class';
import NavLink from 'react-router-dom/NavLink';
import PropTypes from 'prop-types';
import { Container, Menu } from 'semantic-ui-react';

const CategoriesBar = createReactClass({
  render: function() {
    return (
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as={NavLink} to="/" name="home" header>
            Readable
          </Menu.Item>
          {this.props.categories.map(category => (
            <Menu.Item
              as={NavLink}
              to={`/categories/${category.path}`}
              name={category.path}
              key={category.path}
            >
              {category.name}
            </Menu.Item>
          ))}
        </Container>
      </Menu>
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
