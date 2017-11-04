import React from 'react';
import createReactClass from 'create-react-class'
import T from 'i18n-react';

const ErrorBoundary = createReactClass({
  getInitialState: function() {
    return {
      hasError: false
    }
  },

  componentDidCatch: function(error, info) {
    this.setState({ hasError: true });
  },

  render: function() {
    if (this.state.hasError) {
      return <h1>{T.translate('somethingWhentWrong')}</h1>;
    }
    return this.props.children;
  }
});

export default ErrorBoundary;