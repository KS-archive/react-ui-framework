import React from 'react';
import { reduxForm } from 'redux-form';
import initializeForm from './initializeForm';
import validate from './validate';

export default (form, fields = {}, rest) => (WrappedComponent) => {
  const WC = reduxForm({ form, validate: validate(fields), ...rest })(WrappedComponent);
  const Component = props => <WC initializeForm={initializeForm} fields={fields} {...props} />;
  return Component;
};
