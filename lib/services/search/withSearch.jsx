import React from 'react';
import { connect } from 'react-redux';
import { setSearch } from './actions';

export default (WrappedComponent) => {
  const Component = connect(({ search }) => search, { setSearch })(WrappedComponent);
  return props => <Component {...props} />;
};
