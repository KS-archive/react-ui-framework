import React, { PureComponent } from 'react';
import { createForm } from 'react-ui-framework/services/forms';
import FIELDS from './formConfig';

class Form extends PureComponent {
  componentWillMount() {
    this.props.initializeForm.call(this);
  }

  onSubmit = values => console.log(values);

  render() {
    const { Field } = this;

    return <Field name="email" />;
  }
}

export default createForm('basic', FIELDS)(Form);
