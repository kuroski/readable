import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { retrieveAll } from '../../core/actions/posts.action';
import { withRouter } from 'react-router-dom';

export const PostList = createReactClass({
  componentDidMount: function() {
    this.props.retrieveAll(this.props.category);
  },

  render: function() {
    return (
      <div className="App">
        Posts:
        {this.props.posts.map(post => <p key={post.id}>{post.title}</p>)}
      </div>
    );
  }
});

PostList.propTypes = {
  category: PropTypes.string.isRequired
};

PostList.defaultProps = {
  category: ''
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ retrieveAll }, dispatch);
};

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostList)
);
