import React, { PureComponent } from 'react';
import { createForm } from 'react-ui-framework/services/forms';
import FIELDS from './formConfig';
import { Container } from '../../../helpers/styles';

@createForm('basic', FIELDS)
export default class Form extends PureComponent {
  componentWillMount() {
    this.props.initializeForm.call(this);
  }

  onSubmit = values => console.log(values);

  render() {
    const { Field } = this;

    return (
      <Container>
        <Field name="email" />
        <Field name="terms" />
      </Container>
    );
  }
}
