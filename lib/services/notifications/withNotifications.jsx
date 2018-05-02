import React from 'react';
import { notify } from 'reapop';
import { connect } from 'react-redux';

export default (WrappedComponent) => {
  const Component = connect(null, { notify })(WrappedComponent);
  return props => <Component {...props} />;
};
