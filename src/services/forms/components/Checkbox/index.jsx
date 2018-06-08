import React, { PureComponent } from 'react';
import CheckboxBase from '../../../../components/Checkbox';

export default class Checkbox extends PureComponent {
  change = value => this.props.input.onChange(value);

  render() {
    const {
      input, label, meta: { touched, error }, className, style,
    } = this.props;
    console.log(this.props);

    return (
      <CheckboxBase
        className={className}
        onChange={this.change}
        label={label}
        name={input.name}
        checked={input.value}
        error={touched && error}
        style={style}
      />
    );
  }
}
