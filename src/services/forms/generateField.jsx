import React from 'react';
import { Field } from 'redux-form';
import components from './components';

export default function ({ name, className, extend, type }) {
  const field = this.props.fields[name];
  const compType = type || field.type;
  const properties = {
    name, // Name specified in component.
    className: `${field.className || ''} ${className || ''}`, // Class from formConfig and component.
    component: components[compType], // Name of component from components folder.
    props: { ...field.extend, ...extend }, // Data from formConfig and component.
  };

  return <Field {...properties} />;
}
