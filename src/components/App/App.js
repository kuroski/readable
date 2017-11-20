import React from 'react';
import createReactClass from 'create-react-class';
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar';
import { Container } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { retrieveAll } from '../../core/actions/categories.action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export const App = createReactClass({
  componentDidMount: function() {
    this.props.retrieveAll();
  },

  render: function() {
    return (
      <div className="App">
        <CategoriesBar categories={this.props.categories} />
        <Container text style={{ marginTop: '7em' }}>
          {this.props.children}
        </Container>
      </div>
    );
  }
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ retrieveAll }, dispatch);
};

const mapStateToProps = state => ({
  categories: state.categories
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
