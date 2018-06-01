import React, { PureComponent } from 'react';
import { createForm } from 'react-ui-framework/services/forms';
import { Button } from 'react-ui-framework';
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
        <Field name="interests" />
        <Field name="size" />
        <Button label="Submit" onClick={this.props.handleSubmit(this.onSubmit)} style={{ marginTop: 16 }} />
      </Container>
    );
  }
}
